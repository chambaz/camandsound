import React from 'react'
import Link from 'next/link'

export default (props) => {
  return (
    <div className='block'>
      <blockquote className='block__subtitle'>{ props.subTitle }</blockquote>
      <h2 className='block__title'>{ props.title }</h2>
      <p className='block__body'>{ props.body }</p>

      <style jsx>{`
        .block {
          background: rgba(0, 0, 0, .8);
          padding: 1.25em;
          margin-bottom: 1.25em;
          color: #fff;
          text-align: center;
        }

        .block__subtitle {
          font-size: 1.4375em;
          margin: .158730159em 0;
        }

        .block__title {
          font-size: 3.9375em;
          margin: .416666667em 0;
        }

        .block__body {
          font-size: 1.125em;
          margin: .555555556em 0;
        }
      `}</style>
    </div>
  )
}
