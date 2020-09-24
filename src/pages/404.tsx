import React, { ReactElement } from 'react';
import { PageProps } from 'gatsby';

import { SEO } from '../components/Global/SEO';

const NotFoundPage = ({ location: { pathname } }: PageProps): ReactElement => (
  <>
    <SEO title="404: Not Found" pathname={pathname} />
    <h1>Not Found Page</h1>
  </>
);

// eslint-disable-next-line import/no-default-export
export default NotFoundPage;
