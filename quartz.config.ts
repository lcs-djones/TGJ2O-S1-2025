import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
  pageTitle: "📚 TGJ2O S1",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Helvetica, Arial",
        body: "Helvetica, Arial",
        code: "IBM Plex Mono",
      },
                                    colors: {
        lightMode: {
          light: "#fcf7f1",
          lightgray: "#eadfce",
          gray: "#c2b29f",
          darkgray: "#6e5b48",
          dark: "#3f2f22",
          secondary: "#c06c43",
          tertiary: "#2f7366",
          highlight: "rgba(192, 108, 67, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1a1410",
          lightgray: "#3a3027",
          gray: "#756557",
          darkgray: "#e1d6c7",
          dark: "#f1e8dd",
          secondary: "#f0a277",
          tertiary: "#5bc7b3",
          highlight: "rgba(192, 108, 67, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
//      Plugin.CustomOgImages(),
    ],
  },
}

export default config
