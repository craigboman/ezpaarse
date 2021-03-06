'use strict';

const colors = require('vuetify/es5/util/colors').default;

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ezPAARSE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ezPAARSE' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  mode: 'spa',
  loading: {
    color: '#FFFFFF'
  },
  loadingIndicator: {
    name: 'folding-cube',
    color: 'teal'
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios: {
    proxy: true
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/session', method: 'get', propertyName: '' }
        },
        tokenRequired: false
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/process',
      callback: '/'
    }
  },
  router: {
    middleware: [ 'auth' ]
  },
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  plugins: [
    { src: '~/plugins/axios.js', ssr: false },
    { src: '~/plugins/i18n.js', ssr: false },
    { src: '~/plugins/socket.js', ssr: false }
  ],
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Add global packages
  */
  build: {
    extend (config, ctx) {}
  },
  srcDir: 'client/',
  vuetify: {
    font: {
      family: 'Roboto',
    },
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      themes: {
        dark: {
          primary: colors.teal,
          secondary: colors.grey.darken3,
          accent: colors.blue.base
        },
        light: {
          primary: colors.teal,
          secondary: colors.grey.darken3,
          accent: colors.blue.base
        }
      }
    }
  }
};
