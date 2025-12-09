'use client'

import { ReviewsProps } from '@/types/blocks'
import { StrapiImage } from './StrapiImage'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

export const Reviews = ({ title, reviews }: Readonly<ReviewsProps>) => {
  return (
    <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 md:mt-[85px] md:px-12 lg:mt-[120px] xl:px-0">
      <div>
        <span className="text-lg font-semibold md:text-2xl">{title}</span>
      </div>

      <div className="relative mt-6 flex justify-between md:mt-10 md:flex-row md:gap-5">
        <Carousel className="w-full">
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem
                key={review.name}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="flex flex-col">
                  {review.avatar && (
                    <div className="relative h-[65px] w-[65px] overflow-hidden rounded-full">
                      <StrapiImage
                        className="absolute inset-0 object-cover"
                        src={review.avatar.url}
                        alt={review.name}
                        fill
                      />
                    </div>
                  )}
                  <h4
                    className={`${review.avatar ? 'mt-6' : ''} text-2xl font-semibold text-text`}
                  >
                    {review.name}
                  </h4>
                  <p className="text-md mt-6 max-w-[355px] font-semibold leading-6 opacity-60">
                    {review.review}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bottom-[-60px] left-auto right-[40px] top-auto translate-x-[-50%] md:right-1/2" />
          <CarouselNext className="bottom-[-60px] right-0 top-auto translate-x-[-50%] md:left-1/2" />
        </Carousel>
      </div>
    </div>
  )
}
