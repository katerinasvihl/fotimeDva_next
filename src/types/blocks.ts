import { BlocksContent } from '@strapi/blocks-react-renderer'
import { ImageProps, LinkProps, Items } from './base'
import { Socials } from '@/components/navigation/Footer'

type ComponentType =
  | 'layout.hero-section'
  | 'layout.services'
  | 'layout.text-block'
  | 'layout.work-process'
  | 'layout.mini-gallery'
  | 'layout.reviews'
  | 'layout.blog-section'
  | 'layout.cta'
  | 'layout.text-image'
  | 'layout.work-preview'
  | 'layout.image-list'
  | 'layout.blog-post'
  | 'layout.contact-form'
  | 'layout.service-item'

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>,
> {
  id: number
  __component?: T
  documentId?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  data?: D
}

export type Block =
  | HeroSectionProps
  | ServicesProps
  | TextBlockProps
  | WorkFlowProps
  | MiniGalleryProps
  | ReviewsProps
  | BlogSectionProps
  | ctaProps
  | TextImageProps
  | WorkPreviewProps
  | ImageListProps
  | BlogPostProps
  | ContactFormProps
  | ServiceProps

export interface Advantages {
  id: number
  title: string
}

export interface HeroSectionProps extends Base<'layout.hero-section'> {
  heading: string
  subHeading: string
  image: ImageProps
  link?: LinkProps
  advantages?: Advantages[]
}

export interface Service {
  title: string
  description?: string
  image: ImageProps
  url: string
  link: string
}

export interface ServicesProps extends Base<'layout.services'> {
  title: string
  service: Service[]
}

export interface TextBlockProps extends Base<'layout.text-block'> {
  title?: string
  description?: BlocksContent
  link?: LinkProps
}

export interface Stepps {
  icon: 'calendar' | 'camera' | 'edit' | 'cloud'
  title: string
  description: string
}

export interface WorkFlowProps extends Base<'layout.work-process'> {
  title: string
  step: Stepps[]
}

export interface MiniGalleryProps extends Base<'layout.mini-gallery'> {
  title: string
  images: ImageProps[]
  link: LinkProps
}

export interface Review {
  avatar: ImageProps
  name: string
  review: string
}

export interface ReviewsProps extends Base<'layout.reviews'> {
  title: string
  reviews: Review[]
}

export interface Blog {
  title: string
  description: string
  text: string
  id: number
  image: ImageProps
  link: string
}

export interface BlogSectionProps extends Base<'layout.blog-section'> {
  title?: string
  blog: Blog[]
}

export interface ctaProps extends Base<'layout.cta'> {
  title: string
  subTitle: string
  links: LinkProps[]
  image: ImageProps
}

export interface TextImageProps extends Base<'layout.text-image'> {
  title: string
  description: BlocksContent
  image: ImageProps
  reverseOrder: boolean
}

export interface WorkPreviewProps extends Base<'layout.work-preview'> {
  images: ImageProps[]
  link: LinkProps
}

export interface GalleryImage {
  image: ImageProps
  imageSize: 'big' | 'long' | 'tall' | 'normal'
}

export interface ImageListProps extends Base<'layout.image-list'> {
  image: GalleryImage[]
}

export interface BlogPostProps extends Base<'layout.blog-post'> {
  title: string
  slug: string
  description?: string
  text: string
  image: ImageProps
  author: string
  publishedAt: string
}

export interface ContactFormProps extends Base<'layout.contact-form'> {
  title: string
  socials: Socials[]
}

export interface ServiceProps extends Base<'layout.service-item'> {
  image: ImageProps
  title: string
  price: number
  description?: string
  list: Items[]
  reverseOrder?: boolean
}
