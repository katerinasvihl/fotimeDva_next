import { ServiceProps } from '@/types/blocks'
import { StrapiImage } from './StrapiImage'
import Icon from './ui/Icon'

export const Service = ({
  title,
  price,
  description,
  image,
  list,
  reverseOrder,
}: Readonly<ServiceProps>) => {
  return (
    <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 md:mt-[85px] md:px-12 lg:mt-[120px] xl:px-0">
      <div className="flex flex-col items-start justify-around gap-5 md:flex-row md:items-center">
        <div
          className={`${reverseOrder ? 'order-2' : 'order-2 md:order-1'} relative h-[320px] h-full w-full max-w-[480px] xl:h-[550px]`}
        >
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || title}
            fill
            className="absolute inset-0 h-full object-cover"
          />
        </div>
        <div
          className={`${reverseOrder ? 'order-1' : 'order-1 md:order-2'} xl-max-w-[480px] flex max-w-[380px] flex-col justify-center text-text`}
        >
          <h2 className="text-3xl font-medium">{title}</h2>
          {price && <h3 className="text-xl font-medium">{price}kč</h3>}
          {description && <span className=" pt-3 xl:pt-5">{description}</span>}
          {list && (
            <div className="mt-3">
              {list.map((item) => (
                <div key={item.index} className="py-1">
                  <Icon icon={item.icon} className="h-[30px] w-[30px]" />
                  <span className="ml-2 font-medium opacity-60">
                    {item.item}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
