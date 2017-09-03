import React from 'react'
import Link from 'next/link'

export default (props) => {
  return (
    <div className='social'>
      <h2 className='social__body'>Follow Cam &amp; Sound:</h2>
      <ul className='social__list'>
        <li className='social__item'>
          <a className='social__link' href='#'>
            <img src='/static/img/img-social-twitter.png' />
          </a>
        </li>
        <li className='social__item'>
          <a className='social__link' href='#'>
            <img src='/static/img/img-social-facebook.png' />
          </a>
        </li>
        <li className='social__item'>
          <a className='social__link' href='#'>
            <img src='/static/img/img-social-instagram.png' />
          </a>
        </li>
        <li className='social__item'>
          <a className='social__link' href='#'>
            <img src='/static/img/img-social-soundcloud.png' />
          </a>
        </li>
        <li className='social__item'>
          <a className='social__link' href='#'>
            <img src='/static/img/img-social-youtube.png' />
          </a>
        </li>
      </ul>
      <style jsx>{`
        .social {
          color: #fff;
          padding: 1.25em 1.25em 2.5em;
          text-align: center;
        }

        .social__list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .social__item {
          display: inline-block;
          margin: 0 .3125em;
        }

        .social__link {
          display: block;
        }
      `}</style>
    </div>
  )
}
