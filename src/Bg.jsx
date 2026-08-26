function Bg() {
  return (
    <div className="fixed h-full w-full inset-0 -z-10 bg-black overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_#4C1D95_0%,_transparent_45%)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,_#1D4ED8_0%,_transparent_40%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_85%,_#DB2777_0%,_transparent_50%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,_#4C1D95_0%,_transparent_45%)] opacity-30" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Vignette to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_35%,_#000000_100%)] opacity-70" />
    </div>
  );
}

export default Bg;
