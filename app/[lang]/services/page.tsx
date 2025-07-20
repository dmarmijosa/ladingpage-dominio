import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Palette, Brain, Cloud, ArrowRight, CheckCircle, Database, Smartphone, Globe } from "lucide-react"
import Link from "next/link"
import { getDictionary } from "@/lib/dictionaries"
import { LanguageSwitcher } from "@/components/language-switcher"

interface PageProps {
  params: Promise<{ lang: "en" | "es" }>
}

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">NexaCode</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${lang}/services`} className="text-white font-semibold">
              {dict.nav.services}
            </Link>
            <Link href={`/${lang}/about`} className="text-gray-300 hover:text-white transition-colors">
              {dict.nav.about}
            </Link>
            <Link href={`/${lang}/contact`} className="text-gray-300 hover:text-white transition-colors">
              {dict.nav.contact}
            </Link>
            <LanguageSwitcher currentLocale={lang} />
            <Link href={`/${lang}/contact`}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {dict.nav.getStarted}
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">{dict.services.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{dict.services.description}</p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Cloud className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{dict.services.saas.title}</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">{dict.services.saas.description}</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "Multi-tenant architecture" : "Arquitectura multi-inquilino"}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "Auto-scaling infrastructure" : "Infraestructura de auto-escalado"}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "API-first development" : "Desarrollo API-first"}
                </li>
              </ul>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{dict.services.construction.title}</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">{dict.services.construction.description}</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "Full-stack development" : "Desarrollo full-stack"}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "Microservices architecture" : "Arquitectura de microservicios"}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "DevOps integration" : "Integración DevOps"}
                </li>
              </ul>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{dict.services.design.title}</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">{dict.services.design.description}</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "User experience research" : "Investigación de experiencia de usuario"}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "Responsive design systems" : "Sistemas de diseño responsivo"}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "Brand identity development" : "Desarrollo de identidad de marca"}
                </li>
              </ul>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{dict.services.ai.title}</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">{dict.services.ai.description}</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "Machine learning models" : "Modelos de aprendizaje automático"}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "Natural language processing" : "Procesamiento de lenguaje natural"}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  {lang === "en" ? "Predictive analytics" : "Análisis predictivo"}
                </li>
              </ul>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {lang === "en" ? "Additional Services" : "Servicios Adicionales"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  {lang === "en" ? "Database Design" : "Diseño de Base de Datos"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  {lang === "en"
                    ? "Optimized database architecture and data modeling for high-performance applications."
                    : "Arquitectura de base de datos optimizada y modelado de datos para aplicaciones de alto rendimiento."}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  {lang === "en" ? "Mobile Development" : "Desarrollo Móvil"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  {lang === "en"
                    ? "Native and cross-platform mobile applications for iOS and Android."
                    : "Aplicaciones móviles nativas y multiplataforma para iOS y Android."}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  {lang === "en" ? "Web Applications" : "Aplicaciones Web"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  {lang === "en"
                    ? "Modern web applications with progressive web app capabilities."
                    : "Aplicaciones web modernas con capacidades de aplicación web progresiva."}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {lang === "en" ? "Ready to Get Started?" : "¿Listo para Comenzar?"}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {lang === "en"
                ? "Let's discuss your project requirements and create a custom solution for your business."
                : "Hablemos sobre los requisitos de tu proyecto y creemos una solución personalizada para tu negocio."}
            </p>
            <Link href={`/${lang}/contact`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
              >
                {lang === "en" ? "Contact Us Today" : "Contáctanos Hoy"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
