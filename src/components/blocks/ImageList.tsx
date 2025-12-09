import { ImageListProps } from '@/types/blocks'
import { StrapiImage } from './StrapiImage'

export const ImageList = ({ image }: Readonly<ImageListProps>) => {
  return (
    <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 md:mt-[85px] md:px-12 lg:mt-[120px] xl:px-0">
      <div className="grid auto-rows-[150px] grid-cols-2 gap-2 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
        {image.map((item) => (
          <div
            key={item.image.id}
            className={`overflo-hidden relative ${
              item.imageSize === 'big'
                ? 'col-span-2 row-span-2'
                : item.imageSize === 'tall'
                  ? 'col-span-1 row-span-2'
                  : item.imageSize === 'long'
                    ? 'col-span-2 row-span-1'
                    : 'col-span-1 row-span-1'
            } group cursor-pointer`}
          >
            <StrapiImage
              src={item.image.url}
              alt={item.image.alternativeText || item.image.url}
              className="duration-350 absolute left-0 top-0 h-full w-full object-cover transition-all group-hover:z-50 group-hover:scale-150"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  )
}
