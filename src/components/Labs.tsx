import { ScrubbableVideo } from './animations/ScrubbableVideo';

export function Labs() {
  return (
    <section id="labs" className="relative h-screen bg-black overflow-hidden flex flex-col justify-center">
      <ScrubbableVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-16 pointer-events-none">
        <div className="max-w-xl pointer-events-auto">
          <p className="text-[#E1E0CC]/70 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-6 animate-pulse">
            Interactive Showcase //
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-[5rem] font-serif italic text-white leading-[0.95] tracking-tight mb-8">
            Welcome to<br />my laboratory.
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-10 font-light max-w-lg">
            I'm Atharv Mane, a Full-Stack Developer and AI Engineer. This space is dedicated to exploring the intersection of creative design, decentralized architecture, and artificial intelligence. Code is more than logic—it's a medium for creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
             <div className="liquid-glass rounded-2xl p-5 flex-1 border border-white/5">
               <h4 className="text-white font-medium text-lg tracking-tight mb-2">AI Models</h4>
               <p className="text-white/60 text-xs leading-relaxed">Experimenting with custom RAG pipelines and adaptive conversational agents.</p>
             </div>
             <div className="liquid-glass rounded-2xl p-5 flex-1 border border-white/5">
               <h4 className="text-white font-medium text-lg tracking-tight mb-2">Web3 DApps</h4>
               <p className="text-white/60 text-xs leading-relaxed">Prototyping secure smart contracts and next-gen decentralized architectures.</p>
             </div>
          </div>

          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-3 h-3 rounded-full bg-green-400 opacity-40 animate-ping" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <span className="text-white/90 text-xs tracking-widest uppercase font-medium">
              Scrub horizontally to interact
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
