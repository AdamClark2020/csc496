import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm adam clark the creator of this website. I made this website using gatsby js for my senior seminar class.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage