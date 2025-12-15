'use client'

import { WorkFlowProps } from '@/types/blocks'
import Icon from './ui/Icon'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { useEffect, useState } from 'react'

export const WorkFlow = ({ title, step }: Readonly<WorkFlowProps>) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1380)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="mt-[60px] h-full w-full bg-borderLine px-3 md:mt-[85px] md:px-12 lg:mt-[120px] lg:px-28">
      <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 py-10 md:mt-[85px] md:px-12 md:py-[60px] lg:mt-[120px] xl:px-0">
        <div>
          <span className="text-lg font-semibold text-text md:text-2xl">
            {title}
          </span>
        </div>
        <div className="mt-6 flex justify-between md:mt-10 md:flex-row md:gap-5 ">
          <Carousel
            opts={{ active: isMobile }}
            className="w-full xl:flex xl:justify-between"
          >
            <CarouselContent className="-ml-0 h-full xl:w-full xl:justify-between">
              {step.map((item, index) => (
                <CarouselItem
                  className="flex h-full basis-full flex-col pl-0 pr-5 text-text md:basis-1/2 xl:max-w-[260px] xl:pr-0"
                  key={index}
                >
                  <Icon icon={item.icon} className="h-[62px] w-[62px]" />
                  <div className="my-2 flex flex-col">
                    <span className="max-h-[64px] text-2xl font-semibold">
                      {item.title}
                    </span>
                    <span className="font-semibold opacity-50">
                      {item.description}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
