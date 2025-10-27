import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "#services", label: "Услуги", icon: "Zap" },
    { href: "#pricing", label: "Цены", icon: "Calculator" },
    { href: "#portfolio", label: "Портфолио", icon: "Briefcase" },
    { href: "#guarantees", label: "Гарантии", icon: "ShieldCheck" },
    { href: "#contact", label: "Контакты", icon: "Phone" }
  ];

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-2xl">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="font-heading">ЭлектроПро</span>
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <nav className="flex flex-col gap-3">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={handleMenuClick}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name={item.icon} className="text-primary" size={20} />
              </div>
              <span className="font-medium text-lg">{item.label}</span>
            </a>
          ))}
        </nav>
        <Separator className="my-4" />
        <div className="space-y-3">
          <Button className="w-full" size="lg">
            <Icon name="Phone" size={20} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            <p>Ежедневно с 8:00 до 22:00</p>
            <p className="mt-2 font-medium text-foreground">info@electropro.ru</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
