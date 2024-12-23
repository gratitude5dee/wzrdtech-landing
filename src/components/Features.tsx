const Features = () => {
  return (
    <section className="relative bg-gradient-to-b from-jatt-darker via-black to-jatt-darker px-4 py-32" id="features">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.1)_0%,transparent_65%)]" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      
      <div className="container mx-auto relative">
        {/* Title with enhanced animation */}
        <div className="relative mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-center">
            <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#9b87f5,45%,#D946EF,55%,#9b87f5)] bg-[length:200%_100%] bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-jatt-neon-purple to-transparent" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Play Around Feature */}
          <div 
            className="group relative p-1 rounded-2xl transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(45deg, rgba(155,135,245,0.1), rgba(217,70,239,0.1))",
            }}
          >
            <div className="space-y-8 p-8 rounded-2xl bg-[#1A1F2C]/80 backdrop-blur-xl relative overflow-hidden
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#9b87f520] before:to-transparent before:translate-x-[-100%] before:animate-[shimmer_2s_infinite]
              group-hover:bg-[#1A1F2C]/90 transition-all duration-500"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                play around based on your needs
              </h3>
              <p className="text-gray-400 leading-relaxed">
                content creator? podcaster? run a faceless youtube channel? use the $PUSHPA playground to reutilize your previous content
              </p>
              <div className="bg-black/50 rounded-lg p-6 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-500">
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-black/50 to-purple-900/20 animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Dev Tools Feature */}
          <div 
            className="group relative p-1 rounded-2xl transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(45deg, rgba(217,70,239,0.1), rgba(155,135,245,0.1))",
            }}
          >
            <div className="space-y-8 p-8 rounded-2xl bg-[#1A1F2C]/80 backdrop-blur-xl relative overflow-hidden
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#d946ef20] before:to-transparent before:translate-x-[-100%] before:animate-[shimmer_2s_infinite]
              group-hover:bg-[#1A1F2C]/90 transition-all duration-500"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                dev tools
              </h3>
              <p className="text-gray-400 leading-relaxed">
                utilize our dev playground to supercharge your apps and implement $PUSHPA in your workflows
              </p>
              <div className="bg-black/50 rounded-lg p-6 shadow-lg shadow-pink-500/10 group-hover:shadow-pink-500/20 transition-all duration-500">
                <div className="font-mono text-sm text-pink-500 bg-black/50 p-4 rounded overflow-x-auto">
                  <pre className="opacity-75 group-hover:opacity-100 transition-opacity whitespace-pre-wrap">
                    <code className="text-jatt-neon-purple">// $PUSHPA implementation example</code>
                    {`\nconst pushpa = new PUSHPA({
  address: "0x9c143...",
  network: "mainnet",
  config: {
    autoConnect: true
  }
})`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Community Driven Feature */}
          <div 
            className="group relative p-1 rounded-2xl transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(45deg, rgba(155,135,245,0.1), rgba(217,70,239,0.1))",
            }}
          >
            <div className="space-y-8 p-8 rounded-2xl bg-[#1A1F2C]/80 backdrop-blur-xl relative overflow-hidden
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#9b87f520] before:to-transparent before:translate-x-[-100%] before:animate-[shimmer_2s_infinite]
              group-hover:bg-[#1A1F2C]/90 transition-all duration-500"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                community driven
              </h3>
              <p className="text-gray-400 leading-relaxed">
                join our growing community of creators and developers building the future of content monetization
              </p>
              <div className="bg-black/50 rounded-lg p-6 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-500">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className="aspect-square rounded-lg bg-gradient-to-br from-purple-900/30 to-black/30 animate-pulse 
                                group-hover:from-purple-900/40 group-hover:to-black/40 transition-all duration-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Powered Feature */}
          <div 
            className="group relative p-1 rounded-2xl transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(45deg, rgba(217,70,239,0.1), rgba(155,135,245,0.1))",
            }}
          >
            <div className="space-y-8 p-8 rounded-2xl bg-[#1A1F2C]/80 backdrop-blur-xl relative overflow-hidden
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#d946ef20] before:to-transparent before:translate-x-[-100%] before:animate-[shimmer_2s_infinite]
              group-hover:bg-[#1A1F2C]/90 transition-all duration-500"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AI powered
              </h3>
              <p className="text-gray-400 leading-relaxed">
                leverage cutting-edge AI technology to enhance your content creation and development workflow
              </p>
              <div className="bg-black/50 rounded-lg p-6 shadow-lg shadow-pink-500/10 group-hover:shadow-pink-500/20 transition-all duration-500">
                <div className="h-32 rounded-lg bg-black/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity animate-ping" />
                      <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-lg group-hover:blur-xl transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;