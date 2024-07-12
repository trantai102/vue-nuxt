import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    'nuxtjs-naive-ui',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    vueI18n: './i18n.config.ts',
  },

  vite: {
    plugins: [
      AutoImport({
        imports: [
          'vue',
          'pinia',
          'vue-i18n',
          
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ],
        dts: 'auto-imports.d.ts',
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  },

  compatibilityDate: '2024-07-05'
})
