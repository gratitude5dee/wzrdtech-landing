const Features = () => {
  return (
    <section className="relative bg-gradient-to-b from-jatt-darker via-black to-jatt-darker px-4 py-32" id="features">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#9b87f5,45%,#D946EF,55%,#9b87f5)] bg-[length:200%_100%] bg-clip-text text-transparent">
            Features
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
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
              <p className="text-gray-400">
                content creator? podcaster? run a faceless youtube channel? use the $PUSHPA playground to reutilize your previous content
              </p>
              <div className="bg-black/50 rounded-lg p-6 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-500">
                <div className="aspect-video rounded-lg overflow-hidden bg-black/50 animate-pulse" />
              </div>
            </div>
          </div>
          
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
              <p className="text-gray-400">
                utilize our dev playground to supercharge your apps and implement $PUSHPA in your workflows
              </p>
              <div className="bg-black/50 rounded-lg p-6 shadow-lg shadow-pink-500/10 group-hover:shadow-pink-500/20 transition-all duration-500">
                <div className="font-mono text-sm text-pink-500 bg-black/50 p-4 rounded">
                  <pre className="opacity-75 group-hover:opacity-100 transition-opacity">// $PUSHPA implementation example
{`const pushpa = new PUSHPA({
  address: "0x9c143..."`}</pre>
                </div>
              </div>
            </div>
          </div>

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
              <p className="text-gray-400">
                join our growing community of creators and developers building the future of content monetization
              </p>
              <div className="bg-black/50 rounded-lg p-6 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-500">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square rounded-lg bg-black/50 animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          </div>

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
              <p className="text-gray-400">
                leverage cutting-edge AI technology to enhance your content creation and development workflow
              </p>
              <div className="bg-black/50 rounded-lg p-6 shadow-lg shadow-pink-500/10 group-hover:shadow-pink-500/20 transition-all duration-500">
                <div className="h-32 rounded-lg bg-black/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity animate-ping" />
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