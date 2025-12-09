import { BlogPostProps } from '@/types/blocks'
import Link from 'next/link'
import { StrapiImage } from './StrapiImage'

export const BlogPost = ({
  title,
  slug,
  image,
  author,
  publishedAt,
}: Readonly<BlogPostProps>) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative h-full w-full md:h-[320px] xl:h-[405px]"
    >
      <StrapiImage
        alt={title || 'background'}
        src={image.url}
        className="absolute inset-0 object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black opacity-30 duration-300 group-hover:opacity-50" />
      <div className="relative z-10 flex h-full w-full items-center  justify-between px-2 md:items-end md:px-4 md:pb-6">
        <div className="flex flex-col justify-center font-heading md:justify-end ">
          <span className="text-xl md:text-3xl">{title}</span>
          {author && (
            <div>
              <span>{author}</span>
            </div>
          )}
          {publishedAt && (
            <div>
              <span>{publishedAt}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
