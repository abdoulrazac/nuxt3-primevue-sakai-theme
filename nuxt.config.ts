// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        head: {
            meta: [
                { 'http-equiv': 'x-ua-compatible', 'content': 'IE=edge' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
            ],
            link: [
                { rel: 'icon', href: '/favicon.ico' }
            ]
        }
    },

    css: [
        'primevue/resources/primevue.css',
        'primeflex/primeflex.css',
        'primeicons/primeicons.css',
        '~/assets/styles/layout.scss',
    ],

    modules: [
        '~/modules/primevue'
    ],

    imports: {
        autoImport: true,
        addons: {
            vueTemplate: true
        }
    },

    build: {
        transpile: [
            'chart.js',
            'primevue'
        ]
    },
})
