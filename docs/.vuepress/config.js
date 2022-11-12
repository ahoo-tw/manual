import { defaultTheme } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { hopeTheme } from "vuepress-theme-hope";

module.exports = {
  base: "/",
  lang: "zh-TW",
  title: "Ahoo 操作手冊",
  description: "",
  plugins: [mediumZoomPlugin({}), docsearchPlugin({})],
  theme: hopeTheme({
    iconAssets: "fontawesome",
    navbar: [
      { text: "員工", link: "/employee/" },
      { text: "行政", link: "/executive/" },
      { text: "財務", link: "/finance/" },
    ],
    sidebar: {
      // ----------------------------------------
      // 員工
      // ----------------------------------------
      "/employee/": [
        {
          text: "[專案]",
          collapsable: true,
          children: [
            {
              text: "客戶管理",
              link: "/employee/project/vendor/",
            },
            {
              text: "委外管理",
              link: "/employee/project/outsourcing/",
            },
            {
              text: "專案管理(PM)",
              link: "/employee/project/create-project/",
            },
          ],
        },
        {
          text: "[請款單]",
          collapsable: true,
          children: [
            {
              text: "新增請款單",
              link: "/employee/payment/create-payment/",
            },
            {
              text: "自行退回再編輯",
              link: "/employee/payment/retrieve-payment/",
            },
          ],
        },
        {
          text: "[發票]",
          collapsable: true,
          children: [
            {
              text: "",
              children: [
                {
                  text: "申請開立發票",
                  link: "/employee/invoice/create-invoice/",
                },

                {
                  text: "自行退回再編輯",
                  link: "/employee/invoice/retrieve-invoice/",
                },
              ],
            },
          ],
        },
      ],
      // ----------------------------------------
      // 行政
      // ----------------------------------------
      "/executive/": [
        {
          text: "[請款單]",
          collapsable: true,
          children: [
            {
              text: "請款單付款",
              link: "/executive/payment/detail/",
            },
          ],
        },
        {
          text: "[發票]",
          collapsable: true,
          children: [
            {
              text: "開立發票",
              link: "/executive/invoice/invoice-pass/",
            },
          ],
        },
        {
          text: "[財務]",
          collapsable: true,
          children: [
            {
              text: "發票字軌管理",
              link: "/executive/finance/invoice-serial-number/",
            },
          ],
        },
      ],
      // ----------------------------------------
      // 財務
      // ----------------------------------------
      "/finance/": [
        {
          text: "[請款]",
          collapsable: true,
          children: [
            {
              text: "確認付款",
              link: "/finance/payment/done/",
            },
            {
              text: '新增"財務單"',
              link: "/finance/payment/create-payment-finance/",
            },
          ],
        },
        {
          text: "[發票]",
          collapsable: true,
          children: [
            {
              text: "發票入帳",
              link: "/finance/invoice/invoice-done",
            },
          ],
        },
        {
          text: "[財務]",
          collapsable: true,
          children: [
            {
              text: "填寫匯費",
              link: "/finance/finance/remittances/",
            },
          ],
        },
      ],
    },
  }),
};
