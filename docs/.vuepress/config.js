import { defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { hopeTheme } from "vuepress-theme-hope"

module.exports = {
  base: '/manual/',
  lang: 'zh-TW',
  title: 'Ahoo 操作手冊',
  description: '',
  plugins: [
    mediumZoomPlugin({
    }),
    docsearchPlugin({
    }),
  ],
  theme: hopeTheme({
    iconAssets: "fontawesome",
    navbar: [
      { text: '員工', link: '/employee/' },
      { text: '行政財務', link: '/finance/' },
      { text: '老闆', link: '/boss/' },
    ],
    sidebar: {
      // ----------------------------------------
      // 員工
      // ----------------------------------------
      '/employee/': [
        {
          text: '專案',
          collapsable: true,
          children: [
            {
              text: '建立專案與分期',
              link: '/employee/project/create-project/',
            },
          ]
        },
        {
          text: '請款單',
          collapsable: true,
          children: [
            {
              text: '建立"一般"請款單',
              link: '/employee/payment/create-payment-nomral/',
              children: [],
            },
            {
              text: '建立"專案"請款單',
              link: '/employee/payment/create-payment-project/',
              children: [],
            },
            {
              text: '自行取回再編輯',
              link: '/employee/payment/retrieve-payment/',
              children: [],
            },
          ]
        },
        {
          text: '發票',
          collapsable: true,
          children: [
            {
              text: '申請',
              children: [
                {
                  text: '專案發票',
                  link: '/employee/invoice/create-invoice-project/',
                  children: [],
                },
                {
                  text: '非專案發票',
                  link: '/employee/invoice/create-invoice-none-project/',
                  children: [],
                },
              ],
            },

          ]
        },
      ],
      // ----------------------------------------
      // 行政財務
      // ----------------------------------------
      '/finance/': [
        {
          text: '請款單',
          collapsable: true,
          children: [
            {
              text: '建立"一般"請款單',
              link: '/employee/payment/create-payment-nomral/',
              children: [],
            },
            {
              text: '建立"專案"請款單',
              link: '/employee/payment/create-payment-project/',
              children: [],
            },
            {
              text: '建立財務單',
              link: '/employee/payment/create-payment-project/',
              children: [],
            },
            {
              text: '自行取回再編輯',
              link: '/employee/payment/retrieve-payment/',
              children: [],
            },
          ]
        },
        {
          text: '發票',
          collapsable: true,
          children: [
            {
              text: '申請',
              children: [
                {
                  text: '專案發票',
                  link: '/employee/invoice/create-invoice-project/',
                  children: [],
                },
                {
                  text: '非專案發票',
                  link: '/employee/invoice/create-invoice-none-project/',
                  children: [],
                },
              ],
            },

          ]
        },
      ],
      '/boss/': [
        {
          text: '專案',
          collapsable: true,
          children: [
            {
              text: '建立專案與分期',
              link: '/employee/project/create-project/',
            },
          ]
        },
      ]
    }
  }),
};
