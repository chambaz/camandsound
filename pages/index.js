import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Block from '../components/block'
import Social from '../components/social'

export default () => (
  <div>
    <Head>
      <title>Cam & Sound - A daydream at night...</title>
      <meta name='description' content='From the suburbs of New York and London, Cam & Sound was born. A unique blend of hip hop, mixing genres and influences from all over. Sit back and enjoy the daydream at night...' />
    </Head>
    <main className='Canvas hide'>
      <Header />
      <Block
        subTitle='From Where We Started...'
        body='From the suburbs of New York and London, Cam & Sound was born. A unique blend of hip hop, mixing genres and influences from all over. Sit back and enjoy the daydream at night...' />
      <Block
        subTitle='A glimpse of whats to come'
        title='Your Lies / Say What You Want'
        body='Available now on all major streaming services'
        embed='<iframe class="block__inline-frame" src="https://open.spotify.com/embed/track/14DcxRsN23M2eLofjD2obr" width="300" height="380" frameborder="0" allowtransparency="true"></iframe><iframe class="block__inline-frame" src="https://open.spotify.com/embed/track/0rMbeeACShenHxNfxngLht" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>' />
      <Block
        subTitle='The official music video'
        title='Your Lies'
        embed='<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/LD6etQju64k?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0;" allowfullscreen></iframe></div>' />
      <Block
        subTitle='&ldquo;A masterful debut of innovative hiphop&rdquo;'
        title='A Daydream at Night'
        body='Available now on all major streaming services'
        embed='<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A5MoKK3sCGt3QUnR1tds6aS" width="640" height="352" frameborder="0" allowtransparency="true" style="width: 100%;"></iframe>' />
      <Block
        subTitle='The official acoustic music video'
        title='Blissful Ignorance'
        embed='<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/Il0iglZk7IA?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0;" allowfullscreen></iframe></div>' />
      <Social />
    </main>

    <style jsx>{`
      .Canvas {
        opacity: 1;
        transition: 1s;
      }
    `}</style>
  </div>
)
