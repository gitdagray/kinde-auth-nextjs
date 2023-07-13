import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Kinde Auth',
  description: 'Kinde Auth with Next.js App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col grow">
          {children}
        </main>
      </body>
    </html>
  )
}
