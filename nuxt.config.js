export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: process.env.NODE_ENV === 'production' ? true : false,

  server: {
    host: '0.0.0.0'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Théo Gillet - Développeur Web Front-End basé à Bordeaux (33)',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Hello. Moi, c’est Théo, Développeur Web Freelance basé à Bordeaux (33). Vous êtes au bon endroit si vous cherchez quelqu’un pour créer le site de vos rêves. Vous demandez, je réalise !" },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid:'google-site-verification', name:'google-site-verification', content: 'pY5X_BClMgfUBZWknlq9rGAKR_88Ju2pDN40v-ZsIB8' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/image.png' }
    ],
    script: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-SM0VZ1JK3G", async: true },
      { src: 'js/ga.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: `${process.env.BASE_URL}`,
    path: '/site-map.xml',
    gzip: true,
    routes: [
      {
        url: '/',
        priority: 1,
        lastMod: '2023-01-02'
      },
      {
        url: '/projets',
        priority: 1,
        lastMod: '2023-01-02'
      },
      {
        url: '/contact',
        priority: 0.5,
        lastMod: '2023-01-02'
      }
    ]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
