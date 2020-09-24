import React, { ReactElement } from 'react';
import { PageProps } from 'gatsby';

import { SEO } from '../components/Global/SEO';

const IndexPage = ({ location: { pathname } }: PageProps): ReactElement => (
  <>
    <SEO title="Home" pathname={pathname} />
    <h1>Index Page</h1>
  </>
);

// eslint-disable-next-line import/no-default-export
export default IndexPage;
