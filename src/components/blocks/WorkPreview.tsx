import Link from 'next/link'
import { StrapiImage } from './StrapiImage'
import { WorkPreviewProps } from '@/types/blocks'

export const WorkPreview = ({ images, link }: Readonly<WorkPreviewProps>) => {
  return (
    <div className="mt-[60px] h-full w-full bg-lightBackground px-3 md:mt-[85px] md:px-12 lg:mt-[120px] lg:px-28">
      <div className="container mx-auto flex max-w-[1200px] flex-col items-center justify-center px-3 py-10  md:px-12 md:py-[60px]  xl:px-0">
        <div className="mt-6 flex justify-between md:mt-10 md:flex-row md:gap-5 ">
          {images.map((image) => (
            <div
              className="relative lg:h-[200px] lg:w-[300px] xl:h-[250px] xl:w-[380px]"
              key={image.url}
            >
              <StrapiImage
                src={image.url}
                alt={image.alternativeText || image.url}
                fill
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <Link
          href={link.url}
          className=" mb-3 mt-8 w-fit rounded-md bg-button px-10 py-2 text-black md:mb-0"
        >
          {link.text}
        </Link>
      </div>
    </div>
  )
}
