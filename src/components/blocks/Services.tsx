// 'use client'

// import Link from 'next/link'
// // import { Button } from '@/components/ui/button'
// import Icon from './ui/Icon'
// import { ServicesProps } from '@/types/blocks'
// import { StrapiImage } from './StrapiImage'
// import clsx from 'clsx'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'

// export const Services = ({ title, service }: Readonly<ServicesProps>) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null)
//   const router = useRouter()

//   const handleCardClick = (index: number, link: string) => {
//     if (activeIndex === index) {
//       router.push(link)
//     } else {
//       setActiveIndex(index)
//     }
//   }

//   return (
//     <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 md:mt-[85px] md:px-12 lg:mt-[120px] xl:px-0">
//       <div>
//         <span className="text-lg font-semibold md:text-2xl">{title}</span>
//       </div>
//       <div className="mt-6 hidden md:mt-10 md:flex md:gap-5">
//         {service.map((item) => (
//           <Link
//             key={item.title}
//             href={item.link}
//             className="group relative h-[320px] w-full overflow-hidden xl:h-[405px]"
//           >
//             <StrapiImage
//               alt={item.title || 'background'}
//               src={item.image.url}
//               fill
//               className="absolute inset-0 object-cover duration-300 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50" />
//             <div className="relative z-10 flex h-full items-end justify-between px-4 pb-6">
//               <div className="text-white">
//                 <span className="text-3xl">{item.title}</span>
//                 {item.description && (
//                   <span className="block opacity-70">{item.description}</span>
//                 )}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { ServiceCard } from './ServiceCard'
import { ServicesProps } from '@/types/blocks'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export const Services = ({ title, service }: ServicesProps) => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="lg> container mt-[60px] max-w-[1200px] md:mt-[85px] md:px-12  lg:mx-auto xl:px-0">
      <span className=" px-3 text-lg font-semibold md:px-0 md:text-2xl">
        {title}
      </span>

      {/* MOBILE */}
      <div className="mt-6  md:hidden">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'center',
            loop: false,
          }}
        >
          <CarouselContent className="ml-0">
            <CarouselItem className="pointer-events-none shrink-0 basis-[8%] pl-0 sm:basis-[12%]" />

            {service.map((item, index) => {
              const isActive = index === current

              return (
                <CarouselItem
                  key={index}
                  className="sm-basis-[76%] basis-[84%] pl-0"
                >
                  <div
                    className={clsx(
                      'transition-all duration-300',
                      isActive
                        ? 'scale-100 opacity-100'
                        : 'scale-90 opacity-50',
                    )}
                  >
                    <ServiceCard
                      title={item.title}
                      image={item.image}
                      url={item.url}
                      link={item.link}
                    />
                  </div>
                </CarouselItem>
              )
            })}
            <CarouselItem className="pointer-events-none shrink-0 basis-[8%] sm:basis-[12%]" />
          </CarouselContent>
        </Carousel>
      </div>

      {/* DESKTOP */}
      <div className="mt-6 hidden md:mt-10 md:flex md:gap-5">
        {service.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            image={item.image}
            url={item.url}
            link={item.link}
          />
        ))}
      </div>
    </div>
  )
}
