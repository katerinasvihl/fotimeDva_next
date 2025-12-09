import { TextImageProps } from '@/types/blocks'
import { StrapiImage } from './StrapiImage'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export const TextImage = ({
  title,
  description,
  image,
  reverseOrder,
}: Readonly<TextImageProps>) => {
  return (
    <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 md:mt-[85px] md:px-12 lg:mt-[120px] xl:px-0">
      <div className="flex flex-col items-center justify-around gap-5 md:flex-row">
        <div
          className={`${reverseOrder ? 'order-2' : 'order-2 md:order-1'} w-full max-w-[480px]`}
        >
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || title}
            height={600}
            width={480}
            className="h-auto w-full object-cover"
          />
        </div>
        <div
          className={`${reverseOrder ? 'order-1' : 'order-1 md:order-2'} xl-max-w-[480px] flex max-w-[380px] flex-col justify-center text-text`}
        >
          <h2 className="text-3xl font-medium">{title}</h2>
          <div className="pt-3 xl:pt-5">
            <BlocksRenderer content={description} />
          </div>
        </div>
      </div>
    </div>
  )
}
