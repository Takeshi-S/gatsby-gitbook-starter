const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://hacka.me",
    gaTrackingId: null
  },
  header: {
    title: "HACKA",
    githubUrl: "https://github.com/Takeshi-S",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/codeblock"],
    collapsedNav: ["/codeblock"],
    links: [{ text: "Outro Projeto", link: "https://hacka.me" }],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Gatsby Gitbook Boilerplate | Hasura",
    description: "Documentation built with mdx. Powering learn.hasura.io ",
    ogImage: null,
    docsLocation:
      "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
    favicon: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: "Gatsby Gitbook Starter",
      short_name: "GitbookStarter",
      start_url: "/",
      background_color: "#ebedee",
      theme_color: "#6498ed",
      display: "standalone",
      crossOrigin: "use-credentials",
      icons: [
        {
          src: "src/pwa-512.png",
          sizes: `512x512`,
          type: `image/png`
        }
      ]
    }
  }
};

module.exports = config;
