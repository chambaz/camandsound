import React from 'react'
import Link from 'next/link'

export default (props) => {
  return (
    <header className='header'>
      <a href='/'>
        <img className='header__ghost' src='/static/img/img-ghosty-mcghost-face.svg' />
      </a>
      <a href='/'>
        <h1 className='header__title'>
          <img className='header__logo' src='/static/img/img-cam-sound-logo.png' />
        </h1>
      </a>
      <style jsx>{`
        .header {
          padding: 2.5em 1.25em 1.25em;
          text-align: center;
        }

        .header__ghost {
          width: 6em;
        }

        .header__logo {
          max-width: 100%;
        }
      `}</style>
    </header>
  )
}
