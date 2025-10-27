import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

interface ServiceItem {
  id: string;
  name: string;
  basePrice: number;
  unit: string;
  icon: string;
}

const CostCalculator = () => {
  const services: ServiceItem[] = [
    { id: "outlet", name: "Установка розетки/выключателя", basePrice: 800, unit: "шт", icon: "Plug" },
    { id: "electricPanel", name: "Монтаж электрощита", basePrice: 8000, unit: "шт", icon: "Box" },
    { id: "cable", name: "Прокладка кабеля", basePrice: 250, unit: "м", icon: "Cable" },
    { id: "wiring", name: "Замена проводки (1-комн.)", basePrice: 35000, unit: "кв", icon: "Home" },
    { id: "chandelier", name: "Подключение люстры", basePrice: 1500, unit: "шт", icon: "Lightbulb" },
    { id: "smartHome", name: "Система Умный дом", basePrice: 50000, unit: "проект", icon: "Smartphone" },
  ];

  const [selectedServices, setSelectedServices] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => {
      const newServices = { ...prev };
      if (newServices[serviceId]) {
        delete newServices[serviceId];
      } else {
        newServices[serviceId] = 1;
      }
      setShowResult(false);
      return newServices;
    });
  };

  const handleQuantityChange = (serviceId: string, value: string) => {
    const quantity = parseInt(value) || 0;
    if (quantity > 0) {
      setSelectedServices(prev => ({ ...prev, [serviceId]: quantity }));
    } else {
      setSelectedServices(prev => {
        const newServices = { ...prev };
        delete newServices[serviceId];
        return newServices;
      });
    }
    setShowResult(false);
  };

  const calculateTotal = () => {
    return Object.entries(selectedServices).reduce((total, [serviceId, quantity]) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service ? service.basePrice * quantity : 0);
    }, 0);
  };

  const handleCalculate = () => {
    if (Object.keys(selectedServices).length > 0) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedServices({});
    setShowResult(false);
  };

  const totalCost = calculateTotal();
  const hasServices = Object.keys(selectedServices).length > 0;

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl">
      <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Icon name="Calculator" size={28} />
          </div>
          <div>
            <CardTitle className="text-2xl font-heading">Калькулятор стоимости</CardTitle>
            <CardDescription className="text-white/80">Рассчитайте примерную стоимость работ</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4 mb-6">
          <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
            <Icon name="ClipboardList" size={20} className="text-primary" />
            Выберите необходимые услуги
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map(service => {
              const isSelected = selectedServices[service.id] !== undefined;
              return (
                <div
                  key={service.id}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id={service.id}
                      checked={isSelected}
                      onCheckedChange={() => handleServiceToggle(service.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor={service.id}
                        className="flex items-center gap-2 cursor-pointer font-medium mb-2"
                      >
                        <Icon name={service.icon} size={18} className="text-primary" />
                        {service.name}
                      </Label>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">
                          от {service.basePrice.toLocaleString()} ₽ / {service.unit}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="mt-3 flex items-center gap-2">
                          <Label className="text-sm">Количество:</Label>
                          <Input
                            type="number"
                            min="1"
                            value={selectedServices[service.id] || 1}
                            onChange={(e) => handleQuantityChange(service.id, e.target.value)}
                            className="w-24"
                          />
                          <span className="text-sm text-muted-foreground">{service.unit}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Separator className="my-6" />

        {hasServices && (
          <div className="bg-muted/50 rounded-lg p-6 mb-6 animate-fade-in">
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <Icon name="ShoppingCart" size={20} className="text-primary" />
              Выбранные услуги
            </h4>
            <div className="space-y-3">
              {Object.entries(selectedServices).map(([serviceId, quantity]) => {
                const service = services.find(s => s.id === serviceId);
                if (!service) return null;
                const itemTotal = service.basePrice * quantity;
                return (
                  <div key={serviceId} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name={service.icon} size={16} className="text-primary" />
                      <span className="font-medium">{service.name}</span>
                      <Badge variant="secondary">{quantity} {service.unit}</Badge>
                    </div>
                    <span className="font-semibold">{itemTotal.toLocaleString()} ₽</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="flex-1"
            onClick={handleCalculate}
            disabled={!hasServices}
          >
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать стоимость
          </Button>
          {hasServices && (
            <Button
              size="lg"
              variant="outline"
              onClick={handleReset}
            >
              <Icon name="RotateCcw" size={20} className="mr-2" />
              Очистить
            </Button>
          )}
        </div>

        {showResult && (
          <div className="mt-6 p-6 bg-gradient-to-r from-primary to-secondary rounded-lg text-white animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-1">Примерная стоимость работ</h3>
                <p className="text-white/80 text-sm">Расчет выполнен на основе базовых тарифов</p>
              </div>
              <Icon name="CheckCircle2" size={48} className="text-white/80" />
            </div>
            <div className="text-4xl font-heading font-bold mb-4">
              от {totalCost.toLocaleString()} ₽
            </div>
            <div className="bg-white/10 rounded p-4 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Icon name="Info" size={16} className="flex-shrink-0 mt-0.5" />
                <span>Итоговая стоимость зависит от сложности объекта и дополнительных работ</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Info" size={16} className="flex-shrink-0 mt-0.5" />
                <span>Точный расчет предоставляется после выезда специалиста</span>
              </div>
            </div>
            <Button
              size="lg"
              className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать консультацию специалиста
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CostCalculator;
