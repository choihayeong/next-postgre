'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard#settings" scroll={false}>DashBoard</Link>
        </li>
      </ul>
    </nav>
  )
}

/**
 * Disabling scroll restoration
 * If you'd like to disable this behavior, you can pass scroll={false} to the <Link> component, 
 * or scroll: false to router.push() or router.replace().
 * 
 */