import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Block from '../components/block'
import Social from '../components/social'

export default () => (
  <div>
    <Head>
      <title>Home - This is the title</title>
      <meta name='description' content='This is the description' />
    </Head>
    <Header />
    <Block
      subTitle='“A masterful debut of innovative hiphop”'
      title='A Daydream at Night'
      body='Available now on all major streaming services' />
    <Block
      subTitle='The official acoustic music video'
      title='Blissful Ignorance'
      body='' />
    <Social />
  </div>
)
