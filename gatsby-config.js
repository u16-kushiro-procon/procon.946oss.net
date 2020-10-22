module.exports = {
  siteMetadata: {
    title: `U-16プログラミングコンテスト釧路大会`,
    author: {
      name: `釧路OSSコミュニティ`,
      summary: `釧路地域で活動している、技術系コミュニティです`,
    },
    description: `U-16プログラミングコンテストは、パソコンやプログラミングが好きな16歳以下の学生の皆さんに、IT に対する興味を深めてもらい、将来の IT エンジニア養成につなぐことを目的として開催しています。プログラミング言語 Ruby を使って、プログラム作法を学び、チェイサーというゲームの中で相手のプログラムと対戦します。`,
    siteUrl: `https://procon.946oss.net/`,
    social: {
      twitter: `946procon`,
    },
    sponsors: [
      { name: `（株）オイコス` },
      { name: `（株）プライムネス` },
      { name: `（株）山一佐藤紙店` },
      { name: `トーワ計装（株）` },
      { name: `濱野販促企画（株）` },
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/staff`,
        name: `staff`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-line-breaks`,
        ],
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-53249074-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `U-16プログラミングコンテスト釧路大会`,
        short_name: `U16プロコン釧路`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#214da8`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
