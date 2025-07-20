"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Code2, Mail, MapPin, Send, Clock } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useState, useEffect } from "react";

interface PageProps {
  params: Promise<{ lang: "en" | "es" }>;
}

export default function ContactPage({ params }: PageProps) {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [dict, setDict] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const loadData = async () => {
      const resolvedParams = await params;
      setLang(resolvedParams.lang);
      const dictionary = await getDictionary(resolvedParams.lang);
      setDict(dictionary);
    };
    loadData();
  }, [params]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert(
      lang === "en"
        ? "Message sent successfully!"
        : "¡Mensaje enviado exitosamente!"
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (!dict) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Danny Armijos</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${lang}/services`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {dict.nav.services}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {dict.nav.about}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="text-white font-semibold"
            >
              {dict.nav.contact}
            </Link>
            <LanguageSwitcher currentLocale={lang} />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {lang === "en" ? "Contact Us" : "Contáctanos"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {lang === "en"
                ? "Ready to transform your business? Get in touch with our team of experts and let's discuss your project."
                : "¿Listo para transformar tu negocio? Ponte en contacto con nuestro equipo de expertos y hablemos sobre tu proyecto."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  {lang === "en" ? "Send us a message" : "Envíanos un mensaje"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {lang === "en" ? "Full Name" : "Nombre Completo"}
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder={
                          lang === "en"
                            ? "Your full name"
                            : "Tu nombre completo"
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {lang === "en" ? "Email Address" : "Correo Electrónico"}
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder={
                          lang === "en" ? "your@email.com" : "tu@email.com"
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {lang === "en" ? "Company" : "Empresa"}
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder={
                        lang === "en"
                          ? "Your company name"
                          : "Nombre de tu empresa"
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {lang === "en"
                        ? "Service Interest"
                        : "Servicio de Interés"}
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleInputChange("service", value)
                      }
                    >
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue
                          placeholder={
                            lang === "en"
                              ? "Select a service"
                              : "Selecciona un servicio"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-white/20">
                        <SelectItem
                          value="saas"
                          className="text-white hover:bg-white/10"
                        >
                          {dict.services.saas.title}
                        </SelectItem>
                        <SelectItem
                          value="construction"
                          className="text-white hover:bg-white/10"
                        >
                          {dict.services.construction.title}
                        </SelectItem>
                        <SelectItem
                          value="design"
                          className="text-white hover:bg-white/10"
                        >
                          {dict.services.design.title}
                        </SelectItem>
                        <SelectItem
                          value="ai"
                          className="text-white hover:bg-white/10"
                        >
                          {dict.services.ai.title}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {lang === "en" ? "Message" : "Mensaje"}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      placeholder={
                        lang === "en"
                          ? "Tell us about your project requirements..."
                          : "Cuéntanos sobre los requisitos de tu proyecto..."
                      }
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {lang === "en" ? "Send Message" : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">
                      {lang === "en" ? "Email Us" : "Envíanos un Email"}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-2">
                    {lang === "en"
                      ? "For general inquiries and support:"
                      : "Para consultas generales y soporte:"}
                  </p>
                  <a
                    href="mailto:support-client@dmarmijosa.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    support-client@dmarmijosa.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">
                      {lang === "en" ? "Business Hours" : "Horario de Atención"}
                    </h3>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p>
                      {lang === "en"
                        ? "Monday - Friday: 9:00 AM - 6:00 PM"
                        : "Lunes - Viernes: 9:00 AM - 6:00 PM"}
                    </p>
                    <p>
                      {lang === "en"
                        ? "Saturday: 10:00 AM - 4:00 PM"
                        : "Sábado: 10:00 AM - 4:00 PM"}
                    </p>
                    <p>
                      {lang === "en" ? "Sunday: Closed" : "Domingo: Cerrado"}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-green-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">
                      {lang === "en" ? "Our Location" : "Nuestra Ubicación"}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {lang === "en"
                      ? "We work remotely with clients worldwide, providing flexible and efficient service delivery."
                      : "Trabajamos de forma remota con clientes en todo el mundo, brindando un servicio flexible y eficiente."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r border-blue-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {lang === "en"
                      ? "Quick Response Guarantee"
                      : "Garantía de Respuesta Rápida"}
                  </h3>
                  <p className="text-gray-300">
                    {lang === "en"
                      ? "We respond to all inquiries within 24 hours during business days. For urgent matters, please mention it in your message."
                      : "Respondemos a todas las consultas dentro de 24 horas durante días hábiles. Para asuntos urgentes, por favor menciónalo en tu mensaje."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
