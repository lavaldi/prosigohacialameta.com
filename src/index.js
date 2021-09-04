import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash.get'
import Layout from './components/layout'

const Page = props => {
  let title = 'Prosigo hacia la meta'
  let siteUrl = 'https://prosigohacialameta.com'

  const postTitle = get(props.data?.mdx, 'frontmatter.title',
    get(props, 'pageContext.frontmatter.title')
  ) ?? 'Blog'
  const description = get(props.data?.mdx, 'frontmatter.excerpt',
    get(props, 'pageContext.frontmatter.excerpt')
  ) || 'Artículos de vida cristiana por Claudia Valdivieso'
  const defaultImage = `${siteUrl}/prosigo-hacia-la-meta.png`
  const image = get(props.data?.mdx, 'frontmatter.banner', defaultImage)

  if (postTitle) {
    title = `${postTitle} | ${title}`
  }

  return (
    <>
    <Helmet
      htmlAttributes={{
        lang: 'es-pe',
      }}>
        <link
          rel='icon'
          type='image/png'
          href='/icon.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          href='/icon.png'
        />
        <link
          rel='canonical'
          href={props.location.href}
        />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta property="og:url" content={siteUrl + props.uri} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={description} />
        <meta name='og:image' content={image} />
        <meta name='twitter:creator' content='@lavaldi_' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <Layout {...props}>
        {props.children}
      </Layout>
    </>
  )
}

export const wrapPageElement = ({ element, props }) =>
  <Page {...props}>
    {element}
  </Page>