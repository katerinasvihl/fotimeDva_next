import Link from 'next/link'

import { StrapiImage } from './StrapiImage'
import { Service } from '@/types/blocks'

export const ServiceCard = ({
  title,
  description,
  link,
  image,
  url,
}: Service) => {
  return (
    <Link
      key={title}
      href={link}
      className={
        'group relative block h-[320px] w-full overflow-hidden rounded-sm transition-all duration-300 xl:h-[405px]'
      }
    >
      <StrapiImage
        alt={title || 'background'}
        src={image.url}
        fill
        className={
          'absolute inset-0 object-cover duration-300 md:group-hover:scale-110'
        }
      />
      <div
        className={
          'absolute inset-0 bg-black opacity-30 md:group-hover:opacity-50'
        }
      />
      <div className="relative z-10 flex h-full items-end justify-between px-4 pb-6">
        <div className="text-white">
          <span className="text-3xl md:text-2xl lg:text-3xl">{title}</span>
          {description && (
            <span className="block opacity-70">{description}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
