import React from 'react'
import Link from 'next/link'
import './style.css'

function Navbar() {
  return (
    <nav className='navg'>
        <div className="logo">
          <Link href="/">PDFNinja</Link>
          <div className="under">PDF Manipulator</div>
        </div>
      </nav>
  )
}

export default Navbar
