export default function StickyFooterCTA({ onSelect, loading }) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-6 pt-3"
      style={{
        background: 'linear-gradient(to top, #14100f 60%, transparent)',
      }}
    >
      <button
        className="btn-primary"
        onClick={() => onSelect('annual')}
        disabled={loading}
        style={{ background: 'linear-gradient(135deg, #c6a15f, #e2c281)', color: '#14100f', maxWidth: 400, margin: '0 auto' }}
      >
        {loading ? '⏳ Procesando...' : '👑 Ver planes VIP'}
      </button>
    </div>
  )
}
