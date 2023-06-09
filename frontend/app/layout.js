import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PDFNinja',
  description: 'Unlock the Power of PDFs: Empower Your Documents with PDFNinja!',
}

export default function RootLayout({ children, navbar }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
