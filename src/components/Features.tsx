const Features = () => {
  return (
    <section className="relative bg-gradient-to-b from-jatt-darker via-black to-jatt-darker px-4 py-32" id="features">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="text-gradient">Features</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">
              play around based on your needs
            </h3>
            <p className="text-gray-400">
              content creator? podcaster? run a faceless youtube channel? use the $JATT playground to reutilize your previous content
            </p>
            <div className="bg-jatt-dark rounded-lg p-6 shadow-lg shadow-red-500/20">
              <div className="aspect-video rounded-lg overflow-hidden bg-black/50 animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">
              dev tools
            </h3>
            <p className="text-gray-400">
              utilize our dev playground to supercharge your apps and implement $JATT in your workflows
            </p>
            <div className="bg-jatt-dark rounded-lg p-6 shadow-lg shadow-red-500/20">
              <div className="font-mono text-sm text-red-500 bg-black/50 p-4 rounded">
                <pre>// $JATT implementation example
{`const jatt = new JATT({
  address: "0x9c143..."`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
