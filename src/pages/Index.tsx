import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Hammer" size={28} className="text-accent" />
              <span className="text-xl font-bold">Дом Мечты</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('catalog')} className="hover:text-accent transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">О компании</button>
              <button onClick={() => scrollToSection('delivery')} className="hover:text-accent transition-colors">Доставка</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-accent transition-colors">Контакты</button>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <section id="home" className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Строительные материалы для профессионалов
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Широкий ассортимент качественных материалов по конкурентным ценам. Работаем с 2005 года.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Каталог товаров
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">20+</div>
              <div className="text-muted-foreground">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5000+</div>
              <div className="text-muted-foreground">Товаров</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10000+</div>
              <div className="text-muted-foreground">Клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Каталог товаров</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Все необходимое для строительства и ремонта в одном месте
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brick" size={28} className="text-accent" />
                </div>
                <CardTitle>Стройматериалы</CardTitle>
                <CardDescription>Кирпич, блоки, цемент, песок</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-accent">
                  Смотреть товары →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={28} className="text-accent" />
                </div>
                <CardTitle>Инструменты</CardTitle>
                <CardDescription>Электро и ручной инструмент</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-accent">
                  Смотреть товары →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Paintbrush" size={28} className="text-accent" />
                </div>
                <CardTitle>Отделочные материалы</CardTitle>
                <CardDescription>Краски, обои, плитка</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-accent">
                  Смотреть товары →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={28} className="text-accent" />
                </div>
                <CardTitle>Электрика</CardTitle>
                <CardDescription>Кабель, розетки, автоматы</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-accent">
                  Смотреть товары →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Droplet" size={28} className="text-accent" />
                </div>
                <CardTitle>Сантехника</CardTitle>
                <CardDescription>Трубы, смесители, ванны</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-accent">
                  Смотреть товары →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" size={28} className="text-accent" />
                </div>
                <CardTitle>Кровля и фасад</CardTitle>
                <CardDescription>Черепица, сайдинг, водостоки</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-accent">
                  Смотреть товары →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр услуг для вашего удобства
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Truck" size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Доставка</h3>
              <p className="text-muted-foreground">Быстрая доставка по городу и области</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Users" size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Консультации</h3>
              <p className="text-muted-foreground">Помощь в подборе материалов</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="CreditCard" size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Кредит</h3>
              <p className="text-muted-foreground">Покупка в рассрочку 0%</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Package" size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Возврат товара</h3>
              <p className="text-muted-foreground">Гарантия возврата 14 дней</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Дом Мечты — надежный партнер в мире строительных материалов с 2005 года. 
                Мы предлагаем широкий ассортимент качественных товаров для профессионального 
                строительства и ремонта.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша команда специалистов всегда готова помочь с выбором материалов и 
                проконсультировать по любым вопросам. Работаем напрямую с производителями, 
                что позволяет предлагать конкурентные цены.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0" />
                  <span>Сертифицированная продукция</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0" />
                  <span>Гарантия качества на все товары</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0" />
                  <span>Профессиональная консультация</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg h-96 overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/4694bedf-693d-4630-999d-3d77ff57cef6/files/fb465ce8-e74f-44af-b1b5-faeca7275736.jpg" 
                alt="Наша команда" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Доставка</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Оперативная доставка строительных материалов
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">По городу</h3>
              <p className="text-muted-foreground mb-2">Доставка в день заказа</p>
              <p className="text-2xl font-bold text-accent">от 1000₽</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Map" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">По области</h3>
              <p className="text-muted-foreground mb-2">Доставка 1-2 дня</p>
              <p className="text-2xl font-bold text-accent">от 2000₽</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Store" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Самовывоз</h3>
              <p className="text-muted-foreground mb-2">Забрать сегодня</p>
              <p className="text-2xl font-bold text-accent">Бесплатно</p>
            </div>
          </div>

          <div className="mt-12 bg-card p-6 rounded-lg max-w-3xl mx-auto">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Icon name="Info" size={20} className="text-accent" />
              Условия доставки
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Бесплатная доставка при заказе от 50 000₽</li>
              <li>• Точное время доставки согласовывается с менеджером</li>
              <li>• Возможна доставка в выходные дни</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы всегда на связи и готовы помочь
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@stroymarket.ru</p>
                  <p className="text-muted-foreground">sales@stroymarket.ru</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Строительная, д. 15</p>
                  <p className="text-muted-foreground text-sm mt-1">Пн-Пт: 8:00 - 20:00, Сб-Вс: 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Работаем без выходных</p>
                  <p className="text-muted-foreground">Круглосуточная поддержка онлайн</p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Ваше сообщение" 
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background resize-none"
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Hammer" size={24} className="text-accent" />
                <span className="text-lg font-bold">Дом Мечты</span>
              </div>
              <p className="text-sm opacity-80">
                Надежный партнер в мире строительных материалов с 2005 года
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Стройматериалы</li>
                <li>Инструменты</li>
                <li>Отделочные материалы</li>
                <li>Электрика</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@stroymarket.ru</li>
                <li>г. Москва, ул. Строительная, 15</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2005-2024 Дом Мечты. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;