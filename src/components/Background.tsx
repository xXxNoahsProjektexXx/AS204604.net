export default function Background() {
  return (
    <>
      {/* Animated grid */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,212,255,.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'gridShift 20s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'fixed', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(0,100,255,.12), transparent 70%)',
        top: -150, right: -100,
        animation: 'float1 12s ease-in-out infinite',
      }} />
      <div style={{
        position: 'fixed', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,212,255,.08), transparent 70%)',
        bottom: 100, left: -100,
        animation: 'float2 15s ease-in-out infinite',
      }} />
      <div style={{
        position: 'fixed', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(0,255,136,.06), transparent 70%)',
        top: '50%', right: '20%',
        animation: 'float3 10s ease-in-out infinite',
      }} />

      <style>{`
        @keyframes gridShift { from{background-position:0 0} to{background-position:0 60px} }
        @keyframes float1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,40px)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(40px,-30px)} }
        @keyframes float3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,20px)} }
      `}</style>
    </>
  );
}
