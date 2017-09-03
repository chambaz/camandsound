import React from 'react'
import Link from 'next/link'

export default (props) => {
  return (
    <div className='block'>
      <div className='block__inner'>
        <h3 className='block__subtitle'>{ props.subTitle }</h3>
        <h2 className='block__title'>{ props.title }</h2>
        <p className='block__body'>{ props.body }</p>
        <div
          className='block__embed'
          dangerouslySetInnerHTML={{__html: props.embed}}>
        </div>
      </div>

      <style jsx>{`
        .block {
          background: rgba(0, 0, 0, .8);
          padding: 2.5em 1.25em;
          margin: 0 auto 2.5em;
          max-width: 65em;
          color: #fff;
          text-align: center;
          width: 100%;
        }

        .block__inner {
          max-width: 50em;
          margin: 0 auto;
          width: 100%;
        }

        .block__subtitle {
          font-size: 1.3em;
          font-weight: 300;
          margin: .158730159em 0;
        }

        .block__title {
          font-size: 3em;
          margin: .416666667em 0;
        }

        .block__body {
          margin: 0 0 1.25em;
        }

        .block__embed :global(.block__inline-frame) {
          margin: 0 .625em .625em;
        }
      `}</style>
    </div>
  )
}
