export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-black z-50">
      
      <div className="flex flex-col items-center gap-6">
        
        {/* Animated Spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
          <div className="absolute inset-0 rounded-full border-t-4 border-cyan-400 animate-spin"></div>
        </div>

        {/* Text */}
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          Loading Country Data...
        </p>
      </div>
    </div>
  );
}
