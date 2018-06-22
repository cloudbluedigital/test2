const webpack = require('webpack')
const dotenv = require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /**
 * Meta tags
 * @type {Object}
 */
  meta: {
    description: 'Some Description',
    theme_color: '#00bcd4',
    ogHost: 'https://test.app',
    name: 'Title',
    twitterCard: 'app',
    twitterSite: '@twitterID',
    twitterCreator: 'twitterID',
    nativeUi: true,
    mobileAppIOS: false
  },

  /**
   * Nuxt extensions
   * @type {Array}
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    ['nuxt-validate', {
      lang: 'en'
    }]
  ],

  /**
   * Axios config
   * @type {Object}
   */
  axios: {
    retry: {
      retries: 3
    },
    proxyHeaders: false
  },

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#1E88E5',
    failedColor: '#ba1414',
    height: '5px'
  },

  css: [
    '@/assets/sass/bootstrap.scss'
  ],

  /**
   * Render configuration
   */
  render: {
    bundleRenderer: {
      gzip: {
        threshold: 5
      },
      http2: {
        push: true
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
