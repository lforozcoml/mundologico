import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { 
  Bot, 
  Zap, 
  Code, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  ChevronDown,
  MessageSquare,
  Target,
  Calendar,
  BarChart3,
  ShoppingBag,
  GraduationCap,
  Heart,
  Globe,
  Star,
  Quote
} from 'lucide-react';
import './App.css';

// Importar imágenes
import logoMundologico from './assets/logo-mundologico(1).png';
import logoMundologicoBlanco from './assets/logo-mundologico-blanco.png';
import heroMainImage from './assets/image.png';
import robotThumbsUp from './assets/OpenAIPlayground2025-06-14at10.14.49(0).png';
import robotWaving from './assets/OpenAIPlayground2025-06-14at10.14.49(1).png';
import robotPointing from './assets/OpenAIPlayground2025-06-14at10.14.49(2).png';
import robotThinking from './assets/OpenAIPlayground2025-06-13at20.21.28(1).png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={logoMundologico} alt="Mundo Lógico" className="h-10 w-auto" />
              <span className="text-xl font-bold text-indigo-600">Mundo Lógico</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-indigo-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-indigo-600 transition-colors">Servicios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-indigo-600 transition-colors">Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-indigo-600 transition-colors">Contacto</a>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Comenzar
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-indigo-600 transition-colors">Inicio</a>
                <a href="#servicios" className="text-gray-700 hover:text-indigo-600 transition-colors">Servicios</a>
                <a href="#nosotros" className="text-gray-700 hover:text-indigo-600 transition-colors">Nosotros</a>
                <a href="#contacto" className="text-gray-700 hover:text-indigo-600 transition-colors">Contacto</a>
                <Button className="bg-indigo-600 hover:bg-indigo-700 w-full">
                  Comenzar
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                  🚀 Transformación Digital
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Impulsamos tu{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                    innovación digital
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Automatización, IA y desarrollo low-code/no-code para transformar tu empresa con soluciones prácticas y poderosas.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-3">
                  Comenzar Ahora
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Ver Servicios
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">500+</div>
                  <div className="text-sm text-gray-600">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">24/7</div>
                  <div className="text-sm text-gray-600">Soporte</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroMainImage} 
                  alt="Transformación Digital" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-indigo-400 to-emerald-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-emerald-400 to-indigo-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 mb-4">
              Nuestros Servicios
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Soluciones que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                transforman
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos servicios especializados en automatización, transformación digital e innovación tecnológica para impulsar tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 relative">
                  <img 
                    src={robotThumbsUp} 
                    alt="Automatización" 
                    className="w-24 h-24 mx-auto rounded-2xl object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Automatización
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Optimizamos tus procesos empresariales con soluciones de automatización inteligente que reducen costos y aumentan la eficiencia.
                </CardDescription>
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    Saber más
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 relative">
                  <img 
                    src={robotWaving} 
                    alt="Transformación Digital" 
                    className="w-24 h-24 mx-auto rounded-2xl object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                  Transformación Digital
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Modernizamos tu infraestructura tecnológica y procesos para adaptarte a la era digital con estrategias personalizadas.
                </CardDescription>
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    Saber más
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 relative">
                  <img 
                    src={robotPointing} 
                    alt="Low-Code/No-Code" 
                    className="w-24 h-24 mx-auto rounded-2xl object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Low-Code/No-Code
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Desarrollamos aplicaciones y soluciones rápidas con plataformas low-code y no-code para acelerar tu transformación.
                </CardDescription>
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    Saber más
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-emerald-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-indigo-100">Proyectos Completados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-indigo-100">Satisfacción del Cliente</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-indigo-100">Empresas Transformadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-indigo-100">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 mb-4">
              Testimonios
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Lo que dicen nuestros{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                clientes
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-indigo-600 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Mundo Lógico transformó completamente nuestros procesos. La automatización que implementaron nos ahorró 40% del tiempo en tareas repetitivas."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    MR
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">María Rodríguez</div>
                    <div className="text-sm text-gray-600">CEO, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-emerald-600 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "El equipo de Mundo Lógico es excepcional. Su enfoque en low-code nos permitió lanzar nuestra aplicación en tiempo récord."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    CL
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Carlos López</div>
                    <div className="text-sm text-gray-600">CTO, InnovaSoft</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-indigo-600 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Increíble servicio y resultados. La transformación digital que logramos con Mundo Lógico superó todas nuestras expectativas."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    AS
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Ana Silva</div>
                    <div className="text-sm text-gray-600">Directora, DigitalPro</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 mb-4">
                  Contacto
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                  ¿Listo para{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                    transformar
                  </span>{' '}
                  tu negocio?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Contáctanos hoy y descubre cómo podemos impulsar tu transformación digital con soluciones innovadoras y personalizadas.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contacto@mundologico.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono</div>
                    <div className="text-gray-600">+57 (300) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ubicación</div>
                    <div className="text-gray-600">Bogotá, Colombia</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre
                      </label>
                      <Input placeholder="Tu nombre" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="tu@email.com" className="w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <Input placeholder="Nombre de tu empresa" className="w-full" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <Textarea 
                      placeholder="Cuéntanos sobre tu proyecto..." 
                      className="w-full h-32"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-lg py-3">
                    Enviar Mensaje
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src={logoMundologicoBlanco} alt="Mundo Lógico" className="h-8 w-auto" />
                <span className="text-xl font-bold">Mundo Lógico</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Impulsamos la transformación digital de tu empresa con soluciones innovadoras y personalizadas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Automatización</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transformación Digital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Low-Code/No-Code</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultoría IA</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contacto@mundologico.com</li>
                <li>+57 (300) 123-4567</li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mundo Lógico. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

