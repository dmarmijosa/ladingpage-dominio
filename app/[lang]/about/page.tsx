import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Users, Shield, Zap, ArrowRight, Award, Target, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getDictionary } from "@/lib/dictionaries"
import { LanguageSwitcher } from "@/components/language-switcher"

interface PageProps {
  params: Promise<{ lang: "en" | "es" }>
}

export default async function AboutPage({ params }: PageProps) {
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
            <Link href={`/${lang}/services`} className="text-gray-300 hover:text-white transition-colors">
              {dict.nav.services}
            </Link>
            <Link href={`/${lang}/about`} className="text-white font-semibold">
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
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">{dict.about.title}</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{dict.about.description}</p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{dict.about.team.title}</h3>
              <p className="text-gray-300">{dict.about.team.description}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{dict.about.track.title}</h3>
              <p className="text-gray-300">{dict.about.track.description}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{dict.about.innovation.title}</h3>
              <p className="text-gray-300">{dict.about.innovation.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                {lang === "en" ? "Our Mission" : "Nuestra Misión"}
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                {lang === "en"
                  ? "We believe technology should empower businesses to achieve their full potential. Our mission is to bridge the gap between complex technical solutions and real business value."
                  : "Creemos que la tecnología debe empoderar a las empresas para alcanzar su máximo potencial. Nuestra misión es cerrar la brecha entre las soluciones técnicas complejas y el valor empresarial real."}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">
                    {lang === "en" ? "Excellence in every project" : "Excelencia en cada proyecto"}
                  </span>
                </div>
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-purple-400 mr-3" />
                  <span className="text-gray-300">
                    {lang === "en" ? "Client-focused solutions" : "Soluciones centradas en el cliente"}
                  </span>
                </div>
                <div className="flex items-center">
                  <Lightbulb className="h-6 w-6 text-yellow-400 mr-3" />
                  <span className="text-gray-300">
                    {lang === "en" ? "Continuous innovation" : "Innovación continua"}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Team+Collaboration"
                alt="Team Collaboration"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">{lang === "en" ? "Projects Completed" : "Proyectos Completados"}</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">{lang === "en" ? "Happy Clients" : "Clientes Satisfechos"}</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-green-400 mb-2">5+</div>
                <div className="text-gray-300">{lang === "en" ? "Years Experience" : "Años de Experiencia"}</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">{lang === "en" ? "Support Available" : "Soporte Disponible"}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {lang === "en" ? "Ready to Work Together?" : "¿Listo para Trabajar Juntos?"}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {lang === "en"
                ? "Let's discuss how we can help transform your business with innovative technology solutions."
                : "Hablemos sobre cómo podemos ayudar a transformar tu negocio con soluciones tecnológicas innovadoras."}
            </p>
            <Link href={`/${lang}/contact`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
              >
                {lang === "en" ? "Get In Touch" : "Ponte en Contacto"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
