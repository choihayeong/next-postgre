export default function Page({ params }: { params: { id: string } }) {
  return <div>My Post: {params.id}</div>
}

/**
 * URL : /blog/[slug]/ such as http://localhost:3000/blog/aa/ 
 * export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
  }
 * 
 */