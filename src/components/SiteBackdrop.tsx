import { siteAtmosphere } from "@/data/visuals";

export default function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden>
      {siteAtmosphere.map((layer) => (
        <div
          key={layer.id}
          className={layer.className}
          style={{ backgroundImage: `url(${layer.src})` }}
        />
      ))}
      <div className="site-backdrop__scrim" />
      <div className="site-backdrop__vignette" />
    </div>
  );
}
