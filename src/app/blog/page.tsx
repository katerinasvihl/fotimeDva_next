// import { getArticles } from '@/data/loaders'

// import Link from 'next/link'

// export default async function Blog() {
//   const articlesData = await getArticles()
//   const articles = articlesData.data

//   return (
//     <main className="mx-auto max-w-6xl p-4">
//       <h1 className="mb-6 text-3xl font-bold">Blog</h1>
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {articles.map((article: any) => (
//           <Link key={article.id} href={`/blog/${article.attributes.slug}`}>
//             <div className="cursor-pointer rounded-lg border p-4 shadow transition hover:shadow-lg">
//               <img
//                 src={article.attributes.thumbnail.data.attributes.url}
//                 alt={
//                   article.attributes.thumbnail.data.attributes.alternativeText
//                 }
//                 className="h-48 w-full rounded-lg object-cover"
//               />
//               <h2 className="mt-4 text-xl font-semibold">
//                 {article.attributes.title}
//               </h2>
//               {/* Pokud máš excerpt nebo krátký popis */}
//               <p className="text-gray-600">{article.attributes.excerpt}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </main>
//   )
// }
