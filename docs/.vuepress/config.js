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
          text: "專案",
          collapsable: true,
          children: [
            {
              text: "建立專案",
              link: "/employee/project/create-project/",
            },
            {
              text: "修改分期",
              link: "/employee/project/edit-project/",
            },
            {
              text: "搜尋",
              link: "/employee/project/search/",
            },
            {
              text: "建立客戶資料",
              link: "/employee/project/vendor/",
            },
            {
              text: "委外管理-廠商",
              link: "/employee/project/vd/",
            },
            {
              text: "委外管理-個人/工作室",
              link: "/employee/project/os/",
            },
          ],
        },
        {
          text: "請款單",
          collapsable: true,
          children: [
            {
              text: "頁面介紹",
              link: "/employee/payment/basic/",
              children: [],
            },
            {
              text: '建立"一般請款"',
              link: "/employee/payment/create-payment-normal/",
              children: [],
            },
            {
              text: '建立"專案請款"',
              link: "/employee/payment/create-payment-project/",
              children: [],
            },
            {
              text: '建立"特支請款"',
              link: "/employee/payment/create-payment-special/",
              children: [],
            },
            {
              text: '建立"經常性支出"',
              link: "/employee/payment/create-payment-often/",
              children: [],
            },
            {
              text: '建立"國際匯款"',
              link: "/employee/payment/create-payment-international/",
              children: [],
            },
            {
              text: "自行取回再編輯",
              link: "/employee/payment/retrieve-payment/",
              children: [],
            },
            {
              text: "搜尋",
              link: "/employee/payment/search/",
              children: [],
            },
            {
              text: "待補單據",
              link: "/employee/payment/receipt/",
              children: [],
            },

            {
              text: "匯出EXCEL",
              link: "/employee/payment/excel/",
              children: [],
            },
          ],
        },
        {
          text: "發票",
          collapsable: true,
          children: [
            {
              text: "",
              children: [
                {
                  text: '申請"專案"發票',
                  link: "/employee/invoice/create-invoice-project/",
                  children: [],
                },
                {
                  text: '申請"非專案發票',
                  link: "/employee/invoice/create-invoice-none-project/",
                  children: [],
                },
                {
                  text: "自行取回",
                  link: "/employee/invoice/retrieve-invoice/",
                  children: [],
                },
                {
                  text: "搜尋",
                  link: "/employee/invoice/serach/",
                  children: [],
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
          text: "請款單",
          collapsable: true,
          children: [
            {
              text: "頁面介紹",
              link: "/finance/payment/basic/",
              children: [],
            },
            {
              text: '新增"請款單"',
              link: "/finance/payment/normal",
              children: [],
            },
            {
              text: '新增"財務單"',
              link: "/finance/payment/create-payment-finance",
              children: [],
            },
            {
              text: "填寫付款明細",
              link: "/finance/payment/detail",
              children: [],
            },
            {
              text: "確認付款",
              link: "/finance/payment/done",
              children: [],
            },
            {
              text: "搜尋",
              link: "/finance/payment/search",
              children: [],
            },
            {
              text: "退件",
              link: "/finance/payment/retrieve",
              children: [],
            },
            {
              text: "作廢",
              link: "/finance/payment/cancel",
              children: [],
            },
          ],
        },
        {
          text: "發票",
          collapsable: true,
          children: [
            {
              text: "開立發票",
              link: "/finance/invoice/invoice-pass",
              children: [],
            },
            {
              text: "發票入帳",
              link: "/finance/invoice/invoice-done",
              children: [],
            },
            {
              text: "退件",
              link: "/finance/invoice/invoice-retrieve",
              children: [],
            },
            {
              text: "搜尋",
              link: "/finance/invoice/search",
              children: [],
            },
            {
              text: "作廢",
              link: "/finance/invoice/cancel",
              children: [],
            },
            {
              text: "匯出Excel",
              link: "/finance/invoice/excel",
              children: [],
            },
          ],
        },
        {
          text: "財務",
          collapsable: true,
          children: [
            {
              text: "零用現金管理",
              link: "/finance/finance/petty-cash",
              children: [],
            },
            {
              text: "財務收支管理",
              link: "/finance/finance/variable-statement",
              children: [],
            },
            {
              text: "人事薪資",
              link: "/finance/finance/salary",
              children: [],
            },
            {
              text: '銀行帳戶設定"',
              link: "/finance/finance/bank-account",
              children: [],
            },
            {
              text: "收支項目設定",
              link: "/finance/finance/trade-statement",
              children: [],
            },
            {
              text: "營收目標設定",
              link: "/finance/finance/revenue-goal",
              children: [],
            },
            {
              text: "公司資訊設定",
              link: "/finance/finance/company-info",
              children: [],
            },
            {
              text: "匯款明細查詢",
              link: "/finance/finance/remittances",
              children: [],
            },
            {
              text: "發票字軌管理",
              link: "/finance/finance/invoice-serial-number",
              children: [],
            },
          ],
        },
      ],
      // ----------------------------------------
      // 老闆
      // ----------------------------------------
      "/boss/": [
        {
          text: "專案",
          collapsable: true,
          children: [
            {
              text: "建立專案",
              link: "/boss/project/create-project",
            },
          ],
        },
        {
          text: "分析",
          collapsable: true,
          children: [
            {
              text: "收支總覽",
              link: "/boss/analysis/overview",
              children: [],
            },
            {
              text: "存款總覽",
              link: "/boss/analysis/deposit",
              children: [],
            },
            {
              text: " 現金流量分析",
              link: "/boss/analysis/cash",
              children: [],
            },
            {
              text: " 收入分析",
              link: "/boss/analysis/income",
              children: [],
            },
            {
              text: "支出分析",
              link: "/boss/analysis/payout",
              children: [],
            },
            {
              text: " 財務收支分析",
              link: "/boss/analysis/financial-analysis-script",
              children: [],
            },
            {
              text: " 同期比較",
              link: "/boss/analysis/comparison",
              children: [],
            },
            ,
            {
              text: " 客戶貢獻",
              link: "/boss/analysis/vendor",
              children: [],
            },
            {
              text: "綜合損益表",
              link: "/boss/income-statement",
              children: [],
            },
          ],
        },
      ],
    },
  }),
};
