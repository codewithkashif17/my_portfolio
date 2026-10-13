export default function SplashLogo({ src, alt = "Profile" }) {
  return (
    <div className="splash-logo-wrapper">
      <div className="splash-ring-outer">
        <div className="splash-ring-spin" />

        <div className="splash-ring-inner">
          <img src={src} alt={alt} className="splash-photo" />
        </div>
      </div>
    </div>
  );
}
