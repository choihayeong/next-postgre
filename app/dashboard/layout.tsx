import Link from "next/link"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main className="dashboard">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <ul>
          <li>
            <Link href="#preview">Preview</Link>
          </li>
          <li>
            <Link href="#settings">Settings</Link>
          </li>
        </ul>
      </nav>
 
      {children}
    </main>
  )
}

/**
 * A layout is UI that is shared between multiple pages.
 * Layouts can also be nested.
 * The component should accept a children prop that will be populated with a child layout (if it exists) or a child page during rendering.
 * 
 */