"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LanguageSwitcherProps {
  currentLocale: string
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (locale: string) => {
    const segments = pathname.split("/")
    segments[1] = locale
    const newPath = segments.join("/")
    router.push(newPath)
  }

  const languages = {
    en: { name: "English", flag: "🇺🇸" },
    es: { name: "Español", flag: "🇪🇸" },
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
          <Globe className="h-4 w-4 mr-2" />
          {languages[currentLocale as keyof typeof languages]?.flag}
          <span className="ml-1 hidden sm:inline">{languages[currentLocale as keyof typeof languages]?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/90 border-white/20">
        {Object.entries(languages).map(([code, lang]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => switchLanguage(code)}
            className="text-white hover:bg-white/10 cursor-pointer"
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
