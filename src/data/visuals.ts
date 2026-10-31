/** Ambient photography — used only as blurred site backdrop, not inline content. */
export const siteAtmosphere = [
  {
    id: "base",
    src: "/portfolio/images/dev-workspace.jpg",
    className: "site-backdrop__layer site-backdrop__layer--base",
  },
  {
    id: "hero",
    src: "/portfolio/images/dev-code.jpg",
    className: "site-backdrop__layer site-backdrop__layer--hero",
  },
  {
    id: "depth",
    src: "/portfolio/images/dev-backend.jpg",
    className: "site-backdrop__layer site-backdrop__layer--depth",
  },
] as const;
