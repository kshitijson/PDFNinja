import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import './style.css'

function Footer() {
  return (
    <footer className="footer">
            <div className="footer-content">
              <span className="footer-name">Kshitij Sonawane</span>
              <div className="footer-links">
                <Link href="https://linkedin.com/in/kshitij-sonawane-469788215" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="footer-icon" />
                </Link>
                <Link href="https://github.com/kshitijson" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="footer-icon" />
                </Link>
              </div>
            </div>
          </footer>
  )
}

export default Footer
