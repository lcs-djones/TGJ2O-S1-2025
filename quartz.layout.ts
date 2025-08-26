import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
    title: "Navigate this site",
    folderClickBehavior: "link",
    filterFn: (node) => {
      // CQ4T-OMIT-ANCHOR: do not remove this line; build script overwrites this Set
const omit = new Set(["Grove Time", "Learning Goals", "Private Notes", "Scratch Page", "Key Links", "Media"])
      if (node.isFolder) {
        return !omit.has(node.fileSegmentHint);
      } else {
        return !omit.has(node.data.title);
      }
    },
  }),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
    title: "Navigate this site",
    folderClickBehavior: "link",
    filterFn: (node) => {
      // CQ4T-OMIT-ANCHOR: do not remove this line; build script overwrites this Set
const omit = new Set(["Grove Time", "Learning Goals", "Private Notes", "Scratch Page", "Key Links", "Media"])
      if (node.isFolder) {
        return !omit.has(node.fileSegmentHint);
      } else {
        return !omit.has(node.data.title);
      }
    },
  }),
  ],
  right: [],
}
