<p align="center">
  <a href="https://www.kevaladesign.com/" target="_blank" rel="noopener noreferrer">
    <img alt="Kevala Design Logo" src="https://github.com/kevaladesign/gatsby-ssg-template/blob/master/src/images/icon.png?raw=true" width="60" />
  </a>
</p>
<h1 align="center">Gatsby SSG Template</h1>

## Information

**Status**

###### Travis CI

[![Build Status](https://travis-ci.com/kevaladesign/gatsby-ssg-template.svg?branch=master)](https://travis-ci.com/kevaladesign/gatsby-ssg-template)

**Stack**

This project was built using the [Gatsby.js](https://www.gatsbyjs.com/) default starter. Additionally, this template contains default configurations for:

- TypeScript
- Immer
- ESLint
- Prettier
- Jest
- React Testing Library
- Travis CI

## Variants

This template contains variants of the main branch ([`master`](https://github.com/kevaladesign/gatsby-ssg-template/tree/master)), extending the template to include additional configuration for optional features.

**Styling: Tailwind CSS & Emotion**

###### Branch: [variant-with-twin](https://github.com/kevaladesign/gatsby-ssg-template/tree/variant-with-twin)

Contains additional configuration for [Twin](https://github.com/ben-rogerson/twin.macro) which integrates:

- Tailwind CSS
- Emotion

## Development

1.  **Clone Repository and Install NPM Packages**

    ```sh
    git clone https://github.com/kevaladesign/gatsby-ssg-template.git
    cd gatsby-ssg-template/
    npm install
    ```

2.  **Initialize Development Environment Variables**

    ```sh
    touch .env.development
    ```

    Use the `.env.example` file as a reference for the required environment variables.

3.  **Start Gatsby Development Process**

    ```sh
    npm run develop
    ```
