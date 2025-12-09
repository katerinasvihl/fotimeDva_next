'use client'

import Link from 'next/link'
import { StrapiImage } from '../blocks/StrapiImage'
import { Logo, LinkProps } from '@/types/base'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'

interface HeaderProps {
  logo: Logo
  link: LinkProps[]
  button: LinkProps
}

export const Header = ({ logo, link, button }: Readonly<HeaderProps>) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute z-30 w-full border-b border-borderLine/30 bg-black/50 pr-3 md:pr-7 lg:h-[72px]">
      <div className="relative z-40 flex items-center justify-between py-2 lg:py-0">
        {/* Logo */}
        <Link
          href={logo.url}
          className="relative h-[44px] w-[150px] lg:h-[70px] lg:w-[230px]"
        >
          <StrapiImage
            src={logo.logo.url}
            alt={logo.logo.alternativeText || logo.logo.url}
            fill
            className="absolute inset-0 object-cover"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-5 md:flex">
          <div className="flex gap-5">
            {link.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="relative cursor-pointer font-heading text-white transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:bg-white after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <Link
            href={button.url}
            className="w-fit rounded-md bg-button px-10 py-2 font-heading text-black"
          >
            {button.text}
          </Link>
        </nav>

        {/* Mobile Menu (Drawer) */}
        <Drawer open={isOpen} onOpenChange={setIsOpen} direction="top">
          <DrawerTrigger asChild>
            <button className="z-50 text-white md:hidden">
              <Menu size={32} />
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-black pt-10 text-white">
            <div className="container mx-auto flex flex-col items-center gap-6">
              <Link
                href={logo.url}
                className="relative mb-6 h-[70px] w-[230px]"
              >
                <StrapiImage
                  src={logo.logo.url}
                  alt={logo.logo.alternativeText || logo.logo.url}
                  fill
                  className="absolute inset-0 object-cover"
                />
              </Link>
              {link.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className="font-heading text-lg text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
              <Link
                href={button.url}
                className="mt-4 w-fit rounded-md bg-button px-10 py-2 font-heading text-black"
                onClick={() => setIsOpen(false)}
              >
                {button.text}
              </Link>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}
