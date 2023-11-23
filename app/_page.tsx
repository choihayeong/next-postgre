'use client'
 
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import { Suspense } from 'react'
// import Table from '@/components/table'
// import TablePlaceholder from '@/components/table-placeholder'

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Welcome :)
      </h1>

      <div>
        <h2 className="md:text-5xl">&lt; Link/ &gt; </h2>
        <Link href="/dashboard">DashBoard</Link>
      </div>

      <div>
        <h2 className="md:text-5xl">useRouter()</h2>
        <button type="button" onClick={() => router.push('/dashboard')}>
          Dashboard
        </button>
      </div>

      {/* <Suspense fallback={<TablePlaceholder />}>
        <Table />
      </Suspense> */}
    </main>
  )
}

/**
 * 
 * 
 */
