export default function HeroBanner({ src }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '260px' }}>
      {/* Hero image — real photo when src is provided, gradient placeholder otherwise */}
      {src ? (
        <img
          src={src}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="eager"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1c1613 0%, #2a201d 40%, #1c1613 100%)',
          }}
        />
      )}

      {/* Decorative bokeh spots (only shown on placeholder) */}
      {!src && (
        <>
          <div
            className="absolute rounded-full opacity-20 blur-3xl"
            style={{ width: 200, height: 200, background: '#c88596', top: -60, right: -40 }}
          />
          <div
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{ width: 150, height: 150, background: '#c6a15f', bottom: -30, left: 20 }}
          />
        </>
      )}

      {/* Gradient fade at the bottom so the avatar blends */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 120, background: 'linear-gradient(to top, #14100f 10%, transparent)' }}
      />
    </div>
  )
}

