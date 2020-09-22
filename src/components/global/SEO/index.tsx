import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { SEOProps, GraphQLStaticQuery } from './types';

export const SEO = ({
  description = ``,
  lang = `en`,
  meta = [],
  title,
  pathname,
  keywords = [],
  image,
}: SEOProps): ReactElement => {
  const { site }: GraphQLStaticQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            title
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image && image.src ? `${site.siteMetadata.siteUrl}${image.src}` : null;
  const metaUrl = `${site.siteMetadata.siteUrl}${pathname}`;

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // {
        //   name: `google-site-verification`,
        //   content: ``,
        // },
      ]
        .concat(
          image && metaImage
            ? [
                {
                  property: `og:image`,
                  content: metaImage,
                },
                {
                  property: `og:image:alt`,
                  content: title,
                },
                {
                  property: `og:image:width`,
                  content: `${image.width}`,
                },
                {
                  property: `og:image:height`,
                  content: `$${image.height}`,
                },
                {
                  name: `twitter:card`,
                  content: `summary_large_image`,
                },
              ]
            : [
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
              ]
        )
        .concat(
          keywords && keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`,`),
              }
            : []
        )
        .concat(meta)}
    />
  );
};
