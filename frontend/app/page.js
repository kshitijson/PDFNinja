'use client'
import React from 'react'
import './globals.css'
import styles from './page.module.css'

function main() {
  return (
    <div className={styles.containerPdfConvert}>
      <h1>Convert</h1>
      <form>
        <label htmlFor="input-file">Upload pdf file</label>
        <input type="file" name='input-file'/>
        <label for="format">Choose a format to convert: </label>
        <select id="format" name="format">
          <option value="docx">Word file (.docx)</option>
          <option value="txt">Text (.txt)</option>
          <option value="jpeg">Image (.jpeg)</option>
          <option value="png">Image (.png)</option>
        </select>
        <button type="submit">Convert</button>
      </form>

      <button>Download file</button>
    </div>
  )
}

export default main
