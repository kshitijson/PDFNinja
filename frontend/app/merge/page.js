'use client'
import React from 'react'
import '../globals.css'
import styles from './page.module.css'

function merge() {
  return (
    <div className={styles.containerPdfMerge}>
      <h1>Merge</h1>
      <form>
        <label htmlFor="input-file">Upload pdf file #1</label>
        <input type="file" name='input-file'/>
        <label htmlFor="input-file">Upload pdf file #2</label>
        <input type="file" name='input-file'/>
        <label htmlFor="input-file">Upload pdf file #3</label>
        <input type="file" name='input-file'/>
        <button type="submit">Convert</button>
      </form>

      <button>Download file</button>
    </div>
  )
}

export default merge
