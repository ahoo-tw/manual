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
      { text: "行政財務", link: "/finance/" },
      { text: "老闆", link: "/boss/" },
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
              text: "建立客戶資料",
              link: "/employee/project/vendor/",
            },
            {
              text: "建立委外廠商資料",
              link: "/employee/project/vd/",
            },
            {
              text: "建立委外個人/工作室資料",
              link: "/employee/project/os/",
            },
            {
              text: "建立專案(PM)",
              link: "/employee/project/create-project/",
            },
            {
              text: "修改專案分期(PM)",
              link: "/employee/project/edit-project/",
            },
            {
              text: "搜尋專案(PM)",
              link: "/employee/project/search/",
            },
            {
              text: "匯出Excel(PM)",
              link: "/employee/project/excel/",
            },
          ],
        },
        {
          text: "[請款單]",
          collapsable: true,
          children: [
            {
              text: "列表介紹",
              link: "/employee/payment/basic/",
            },
            {
              text: "新增請款單",
              link: "/employee/payment/create-payment/",
            },
            {
              text: "自行退回再編輯",
              link: "/employee/payment/retrieve-payment/",
            },
            {
              text: "搜尋請款單",
              link: "/employee/payment/search/",
            },
            {
              text: "待補單據",
              link: "/employee/payment/receipt/",
            },
            {
              text: "匯出Excel",
              link: "/employee/payment/excel/",
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
                  text: '申請"專案"發票',
                  link: "/employee/invoice/create-invoice-project/",
                },
                {
                  text: '申請"非專案"發票',
                  link: "/employee/invoice/create-invoice-none-project/",
                },
                {
                  text: "自行退回",
                  link: "/employee/invoice/retrieve-invoice/",
                },
                {
                  text: "搜尋發票",
                  link: "/employee/invoice/search-invoice/",
                },
                {
                  text: "匯出Excel",
                  link: "/employee/invoice/excel/",
                },
              ],
            },
          ],
        },
      ],
      // ----------------------------------------
      // 行政財務
      // ----------------------------------------
      "/finance/": [
        {
          text: "[請款單]",
          collapsable: true,
          children: [
            {
              text: "列表介紹",
              link: "/finance/payment/basic/",
            },
            {
              text: '新增"請款單"',
              link: "/finance/payment/normal/",
            },
            {
              text: '新增"財務單"',
              link: "/finance/payment/create-payment-finance/",
            },
            {
              text: "審核與填寫付款明細",
              link: "/finance/payment/detail/",
            },
            {
              text: "審核與確認付款",
              link: "/finance/payment/done/",
            },
            {
              text: "搜尋請款單",
              link: "/finance/payment/search/",
            },
            {
              text: "作廢請款單",
              link: "/finance/payment/cancel/",
            },
          ],
        },
        {
          text: "[發票]",
          collapsable: true,
          children: [
            {
              text: "開立發票",
              link: "/finance/invoice/invoice-pass/",
            },
            {
              text: "發票入帳",
              link: "/finance/invoice/invoice-done/",
            },
            {
              text: "搜尋發票",
              link: "/finance/invoice/search/",
            },
            {
              text: "作廢發票",
              link: "/finance/invoice/cancel/",
            },
            {
              text: "匯出Excel",
              link: "/finance/invoice/excel/",
            },
          ],
        },
        {
          text: "[財務]",
          collapsable: true,
          children: [
            {
              text: "財務收支管理",
              link: "/finance/finance/variable-statement/",
            },
            {
              text: "零用現金管理",
              link: "/finance/finance/petty-cash/",
            },
            {
              text: "人事薪資",
              link: "/finance/finance/salary/",
            },
            {
              text: "匯款明細查詢",
              link: "/finance/finance/remittances/",
            },
            {
              text: "經常性支出設定",
              link: "/finance/finance/current-expenditure/",
            },
            {
              text: "特支專案設定",
              link: "/finance/finance/special-disbursement-project/",
            },
            {
              text: "發票字軌管理",
              link: "/finance/finance/invoice-serial-number/",
            },
            {
              text: "銀行帳戶設定",
              link: "/finance/finance/bank-account/",
            },
            {
              text: "收支項目設定",
              link: "/finance/finance/trade-statement/",
            },
            {
              text: "營收目標設定",
              link: "/finance/finance/revenue-goal/",
            },
            {
              text: "審核流程設定",
              link: "/finance/finance/audit-flow/",
            },
            {
              text: "公司資訊設定",
              link: "/finance/finance/company-info/",
            },
          ],
        },
      ],
      // ----------------------------------------
      // 老闆
      // ----------------------------------------
      "/boss/": [
        {
          text: "[專案]",
          collapsable: true,
          children: [
            {
              text: "建立專案",
              link: "/boss/project/create-project/",
            },
          ],
        },
        {
          text: "[分析]",
          collapsable: true,
          children: [
            {
              text: "收支總覽",
              link: "/boss/analysis/overview/",
            },
            {
              text: "存款總覽",
              link: "/boss/analysis/deposit/",
            },
            {
              text: " 現金流量分析",
              link: "/boss/analysis/cash/",
            },
            {
              text: " 收入分析",
              link: "/boss/analysis/income/",
            },
            {
              text: "支出分析",
              link: "/boss/analysis/payout/",
            },
            {
              text: " 財務收支分析",
              link: "/boss/analysis/financial-analysis-script/",
            },
            {
              text: " 同期比較",
              link: "/boss/analysis/comparison/",
            },
            {
              text: " 客戶貢獻",
              link: "/boss/analysis/vendor/",
            },
            {
              text: "綜合損益表",
              link: "/boss/income-statement/",
            },
          ],
        },
      ],
    },
  }),
};
