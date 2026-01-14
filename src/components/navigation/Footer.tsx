import Link from 'next/link'
import Icon from '../blocks/ui/Icon'
import { LinkProps, Logo } from '@/types/base'
import { StrapiImage } from '../blocks/StrapiImage'

export interface Socials {
  icon: 'instagram' | 'facebook' | 'youtube'
  link: LinkProps
}

interface FooterProps {
  logo: Logo
  socials: Socials[]
  phone: string
  email: string
}

export const Footer = ({
  logo,
  socials,
  phone,
  email,
}: Readonly<FooterProps>) => {
  return (
    <div className="border-t border-borderLine/30 py-8 lg:py-2">
      <div className="overfow-hidden container mx-auto flex max-w-[320px] flex-col items-center justify-between gap-8  md:px-12 lg:max-w-[1400px] lg:flex-row xl:px-0">
        <Link
          href={logo.url}
          className="relative h-[60px] w-[230px] lg:h-[60px] lg:w-[220px]"
        >
          <StrapiImage
            src={logo.logo.url}
            alt={logo.logo.alternativeText || logo.logo.url}
            fill
            className="absolute inset-0 object-cover"
          />
        </Link>

        <div className="flex max-w-[200px] gap-4">
          {socials.map((link) => (
            <Link
              key={link.link.id}
              href={link.link.url}
              className="relative h-[30px] w-min max-w-[40px] duration-500 hover:scale-150"
            >
              <Icon icon={link.icon} className="aboslute h-full w-min" />
            </Link>
          ))}
        </div>
        <div>
          <div className="flex justify-center gap-1 font-heading lg:justify-start">
            <span>tel:</span>
            <Link href={`tel:${phone}`}>{phone}</Link>
          </div>
          <div className="flex justify-center gap-1 font-heading lg:justify-start">
            <span>email:</span>
            <Link href={`mailto:${email}`}>{email}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
