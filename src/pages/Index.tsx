import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import CostCalculator from "@/components/CostCalculator";
import MobileMenu from "@/components/MobileMenu";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: "Zap",
      title: "Монтаж электропроводки",
      description: "Профессиональная прокладка кабелей, установка розеток и выключателей по современным стандартам безопасности"
    },
    {
      icon: "Shield",
      title: "Электрощитовое оборудование",
      description: "Проектирование и монтаж распределительных щитов, установка автоматов защиты и УЗО"
    },
    {
      icon: "Home",
      title: "Умный дом",
      description: "Интеграция систем освещения, климат-контроля и безопасности с возможностью удалённого управления"
    },
    {
      icon: "Building2",
      title: "Коммерческие объекты",
      description: "Комплексное электроснабжение офисов, торговых центров, складов и производственных помещений"
    },
    {
      icon: "Lightbulb",
      title: "Освещение",
      description: "Дизайн и монтаж внутреннего и наружного освещения, LED-системы, архитектурная подсветка"
    },
    {
      icon: "Wrench",
      title: "Ремонт и обслуживание",
      description: "Диагностика неисправностей, плановое обслуживание, аварийный ремонт электросетей"
    }
  ];

  const pricing = [
    { service: "Установка розетки / выключателя", price: "от 800 ₽" },
    { service: "Монтаж электрощита (до 12 модулей)", price: "от 8 000 ₽" },
    { service: "Прокладка кабеля (за 1 м)", price: "от 250 ₽" },
    { service: "Замена электропроводки (1-комн. кв.)", price: "от 35 000 ₽" },
    { service: "Подключение люстры", price: "от 1 500 ₽" },
    { service: "Монтаж системы Умный дом", price: "от 50 000 ₽" }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/ab8a9e6c-94b6-44ee-a588-c7ee1a6748a9/files/e565a50a-c615-49fc-a25f-9a26aafbb18e.jpg",
      title: "Электромонтаж склада",
      description: "Полное электроснабжение складского комплекса 2500 м²"
    },
    {
      image: "https://cdn.poehali.dev/projects/ab8a9e6c-94b6-44ee-a588-c7ee1a6748a9/files/6797118e-a8ce-4e14-bbf2-1776a6f3d4d5.jpg",
      title: "Система Умный дом",
      description: "Интеграция освещения и климат-контроля в загородном доме"
    }
  ];

  const guarantees = [
    {
      icon: "FileCheck",
      title: "Гарантия 3 года",
      description: "На все виды электромонтажных работ и установленное оборудование"
    },
    {
      icon: "ClipboardCheck",
      title: "Сертификация",
      description: "Все специалисты имеют допуски и сертификаты электробезопасности"
    },
    {
      icon: "ShieldCheck",
      title: "Страхование",
      description: "Работы застрахованы, несём полную ответственность за результат"
    },
    {
      icon: "Clock",
      title: "Сервис 24/7",
      description: "Аварийная служба работает круглосуточно без выходных"
    }
  ];

  const testimonials = [
    {
      name: "Алексей Петров",
      role: "Директор складского комплекса",
      rating: 5,
      text: "Обратился в ЭлектроПро для полного электроснабжения склада 2500 м². Работа выполнена в срок, качество на высшем уровне. Особенно порадовало внимание к деталям и безопасности."
    },
    {
      name: "Марина Сидорова",
      role: "Владелица загородного дома",
      rating: 5,
      text: "Заказывали установку системы Умный дом. Ребята сделали всё идеально! Теперь управляю освещением и климатом с телефона. Очень довольны результатом!"
    },
    {
      name: "Дмитрий Козлов",
      role: "Управляющий ТЦ",
      rating: 5,
      text: "Сотрудничаем с ЭлектроПро уже 3 года. Обслуживают электросистемы торгового центра, всегда оперативно реагируют на заявки. Надёжные партнёры!"
    },
    {
      name: "Елена Волкова",
      role: "Владелица квартиры",
      rating: 5,
      text: "Заменяли проводку в однокомнатной квартире. Работали аккуратно, убрали за собой. Цена оказалась такой же, как в смете, без доплат. Рекомендую!"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="font-heading font-bold text-2xl text-secondary">ЭлектроПро</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#guarantees" className="text-foreground hover:text-primary transition-colors">Гарантии</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button size="lg" className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4 bg-accent text-accent-foreground">Профессионально. Надёжно. Безопасно.</Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Электромонтажные работы любой сложности
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Более 15 лет опыта. Гарантия 3 года на все работы. Сертифицированные специалисты. Соблюдение ПУЭ и СНиП.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Icon name="PhoneCall" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "Award", value: "15+", label: "лет на рынке" },
              { icon: "Users", value: "2500+", label: "довольных клиентов" },
              { icon: "CheckCircle2", value: "100%", label: "гарантия качества" },
              { icon: "Clock", value: "24/7", label: "аварийная служба" }
            ].map((stat, idx) => (
              <Card key={idx} className="text-center border-none shadow-md animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardContent className="pt-6">
                  <Icon name={stat.icon} className="text-primary mx-auto mb-3" size={40} />
                  <div className="font-heading text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр электромонтажных работ для жилых и коммерческих объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-secondary mb-4">Прайс-лист</h2>
            <p className="text-lg text-muted-foreground">Рассчитайте стоимость работ или посмотрите базовые цены</p>
          </div>
          
          <div className="mb-16">
            <CostCalculator />
          </div>

          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-secondary mb-2">Базовые расценки</h3>
            <p className="text-muted-foreground">Ознакомьтесь с нашими стандартными тарифами</p>
          </div>
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardContent className="p-0">
              <div className="divide-y">
                {pricing.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Icon name="CircleCheck" className="text-primary" size={20} />
                      <span className="font-medium">{item.service}</span>
                    </div>
                    <span className="font-heading font-bold text-lg text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-muted-foreground mt-6">
            * Точная стоимость рассчитывается после выезда специалиста на объект
          </p>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-secondary mb-4">Портфолио работ</h2>
            <p className="text-lg text-muted-foreground">Примеры выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <CardTitle className="font-heading text-lg mb-1">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Icon name="Quote" size={32} className="text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic pl-6">{testimonial.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Наши гарантии</h2>
            <p className="text-xl text-white/90">Мы несём полную ответственность за качество работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="font-heading text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="flex items-start gap-4">
              <Icon name="Info" className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading font-bold text-xl mb-3">Гарантийные обязательства включают:</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span>Бесплатное устранение дефектов, возникших по вине исполнителя</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span>Плановое техническое обслуживание в течение гарантийного срока</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span>Бесплатные консультации по эксплуатации электрооборудования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span>Приоритетное обслуживание при возникновении неисправностей</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">Оставьте заявку, и мы свяжемся с вами в течение 15 минут</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Заказать консультацию</CardTitle>
                <CardDescription>Заполните форму, и наш специалист перезвонит вам</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите вашу задачу..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Телефон</div>
                      <a href="tel:+74951234567" className="text-primary hover:underline">+7 (495) 123-45-67</a>
                      <div className="text-sm text-muted-foreground mt-1">Ежедневно с 8:00 до 22:00</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:info@electropro.ru" className="text-primary hover:underline">info@electropro.ru</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Электромонтажная, д. 15</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center gap-2">
                    <Icon name="Clock" size={24} />
                    Аварийная служба 24/7
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">При аварийных ситуациях звоните по телефону:</p>
                  <a href="tel:+74951234568" className="text-2xl font-heading font-bold hover:underline">
                    +7 (495) 123-45-68
                  </a>
                  <p className="text-sm mt-2 opacity-90">Выезд в течение 1 часа по Москве и МО</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="font-heading font-semibold text-xl mb-4 text-center">Быстрая связь</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      required
                    />
                  </div>
                </div>
                <Textarea 
                  placeholder="Ваш вопрос..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-primary" size={28} />
                <span className="font-heading font-bold text-xl">ЭлектроПро</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональные электромонтажные работы с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Электромонтаж</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Умный дом</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Освещение</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Обслуживание</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#guarantees" className="hover:text-white transition-colors">Гарантии</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@electropro.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 ЭлектроПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;