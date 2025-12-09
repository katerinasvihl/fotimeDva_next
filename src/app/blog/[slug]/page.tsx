// import { getArticleBySlug, getArticles } from '@/data/loaders'
// import { BlogPostProps } from '@/types/blocks'
// import type { GetStaticPaths, GetStaticProps } from 'next'

// export const getStaticPaths: GetStaticPaths = async () => {
//   const articlesData = await getArticles()
//   const articles = articlesData.data

//   const paths = articles.map(({ article }: BlogPostProps) => ({
//     params: { slug: article.attributes.slug },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const articleData = await getArticleBySlug(params?.slug as string)
//   if (!articleData) {
//     return { notFound: true }
//   }

//   return {
//     props: {
//       article: articleData,
//     },
//     revalidate: 60,
//   }
// }

// export default function ArticlePage({ article }: { article: BlogPostProps }) {
//   return (
//     <main className="mx-auto max-w-4xl p-4">
//       <h1 className="text-4xl font-bold">{article.title}</h1>
//       {/* Zobrazení autora, data publikování apod. */}
//       <p className="text-gray-600">
//         {article.author} | {new Date(article.publishedAt).toLocaleDateString()}
//       </p>
//       <img
//         src={article.image.url}
//         alt={article.image.alternativeText}
//         className="my-4 w-full rounded-lg"
//       />
//       {/* Pokud používáš rich text nebo bloky */}
//       <div
//         className="prose max-w-none"
//         dangerouslySetInnerHTML={{ __html: article.description }}
//       />
//     </main>
//   )
// }

// // export default async function ArticlePage({
// //   params,
// // }: {
// //   params: { slug: string }
// // }) {
// //   const articleData = await getArticleBySlug(params.slug)

// //   if (!articleData) {
// //     return <div>Článek nebyl nalezen</div>
// //   }

// //   const { title, author, publishedAt, coverImage, content } = articleData

// //   return (
// //     <main>
// //       {/* Hero sekce */}
// //       <div
// //         className="relative h-64 w-full bg-cover bg-center"
// //         style={{ backgroundImage: `url(${coverImage?.url})` }}
// //       >
// //         <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
// //           <h1 className="text-4xl font-bold">{title}</h1>
// //           <p className="text-lg">
// //             {author} • {new Date(publishedAt).toLocaleDateString()}
// //           </p>
// //         </div>
// //       </div>

// //       {/* Rich text obsah */}
// //       <article className="prose lg:prose-xl mx-auto p-4">
// //         {blockRenderer(content)}
// //       </article>
// //     </main>
// //   )
// // }
