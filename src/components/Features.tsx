const Features = () => {
  return (
    <section className="relative bg-gradient-to-b from-jatt-darker via-black to-jatt-darker px-4 py-32" id="features">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">Features</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">
              play around based on your needs
            </h3>
            <p className="text-gray-400">
              content creator? podcaster? run a faceless youtube channel? use the $PUSHPA playground to reutilize your previous content
            </p>
            <div className="bg-[#1A1F2C] rounded-lg p-6 shadow-lg shadow-red-500/20">
              <div className="aspect-video rounded-lg overflow-hidden bg-black/50 animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">
              dev tools
            </h3>
            <p className="text-gray-400">
              utilize our dev playground to supercharge your apps and implement $PUSHPA in your workflows
            </p>
            <div className="bg-[#1A1F2C] rounded-lg p-6 shadow-lg shadow-red-500/20">
              <div className="font-mono text-sm text-red-500 bg-black/50 p-4 rounded">
                <pre>// $PUSHPA implementation example
{`const pushpa = new PUSHPA({
  address: "0x9c143..."`}</pre>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">
              community driven
            </h3>
            <p className="text-gray-400">
              join our growing community of creators and developers building the future of content monetization
            </p>
            <div className="bg-[#1A1F2C] rounded-lg p-6 shadow-lg shadow-purple-500/20">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square rounded-lg bg-black/50 animate-pulse" />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">
              AI powered
            </h3>
            <p className="text-gray-400">
              leverage cutting-edge AI technology to enhance your content creation and development workflow
            </p>
            <div className="bg-[#1A1F2C] rounded-lg p-6 shadow-lg shadow-blue-500/20">
              <div className="h-32 rounded-lg bg-black/50 animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;