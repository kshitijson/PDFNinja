'use client'
import React from 'react'
import '../globals.css'
import styles from './page.module.css'
import Head from 'next/head'
import Script from 'next/script'

function compress() {
  return (
    <>
    <Head>
      <title>PDFNinja | Compress</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
    </Head>
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"
    />
    <div className={styles.containerPdfCompress}>
      <div className="container">
      <h1>Compress</h1>
      <form>
        <label htmlFor="input-file">Upload pdf file</label>
        <input type="file" name='input-file'/>
        <label htmlFor="rate">Choose a Compression rate: </label>
        <select id="rate" name="rate">
          <option value="twenty">20%</option>
          <option value="fifty">50%</option>
          <option value="seventy">70%</option>
          <option value="ninety">90%</option>
        </select>
        <button type="submit">Compress</button>
      </form>
      </div>

      <button>Download file</button>
    </div>

    </>
  )
}

export default compress
