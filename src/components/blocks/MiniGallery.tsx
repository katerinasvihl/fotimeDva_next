import Link from 'next/link'
import { StrapiImage } from './StrapiImage'
import { MiniGalleryProps } from '@/types/blocks'

export const MiniGallery = ({
  title,
  images,
  link,
}: Readonly<MiniGalleryProps>) => {
  return (
    <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 md:mt-[85px] md:px-12 lg:mt-[120px] xl:px-0">
      <div>
        <span className="text-lg font-semibold md:text-2xl">{title}</span>
      </div>
      <div className="mt-6 grid grid-cols-2 grid-rows-3 md:mt-10 md:grid-cols-4 md:grid-rows-2 md:gap-y-5 lg:auto-cols-auto lg:grid-cols-none">
        {images.map((image, index) => (
          <div
            className={`
              relative 
              w-auto
              ${index === 0 || index === 3 ? 'col-span-1 row-span-2 row-start-2 h-full md:row-start-1 xl:w-[330px]' : 'col-span-2 row-span-1 mx-5 h-[130px] lg:h-[180px] xl:h-[265px] xl:w-[500px]'}
              ${index === 3 && 'col-start-2 row-start-2 md:col-start-4'}
            `}
            key={image.id}
          >
            <StrapiImage
              alt={image.alternativeText || 'background'}
              src={image.url}
              className="absolute inset-0 h-full w-full object-cover"
              fill
            />
          </div>
        ))}
      </div>
      <div className="w-full text-center">
        <Link
          href={link.url}
          className="mt-7 inline-block w-fit rounded-md bg-button px-10 py-2  font-heading text-black"
        >
          {link.text}
        </Link>
      </div>
    </div>
  )
}
