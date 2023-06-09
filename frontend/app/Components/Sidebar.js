import React from 'react'
import './style.css'
import Link from 'next/link'

function Sidebar() {
  return (
    <div className="sidebar">
        <ul>
            <li><Link className='sidebar-links' href='/'>Convert PDF</Link></li>
            <li><Link className='sidebar-links' href='/merge'>Merge PDF</Link></li>
            <li><Link className='sidebar-links' href='/compress'>Compress PDF</Link></li>
        </ul>  
    </div>
  )
}

export default Sidebar
