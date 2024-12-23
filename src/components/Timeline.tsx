const Timeline = () => {
  const timelineData = [
    {
      quarter: "Q1 2024",
      title: "Launch Phase",
      description: "Initial token launch and community building",
    },
    {
      quarter: "Q2 2024",
      title: "Platform Development",
      description: "Beta release of core features and tools",
    },
    {
      quarter: "Q3 2024",
      title: "Ecosystem Growth",
      description: "Partnership expansion and feature enhancement",
    },
    {
      quarter: "Q4 2024",
      title: "Global Adoption",
      description: "Worldwide platform deployment and scaling",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-jatt-darker via-black to-jatt-darker" id="roadmap">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">Roadmap</span>
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600/50" />

          {/* Timeline Items */}
          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <div key={item.quarter} className="relative">
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-600 rounded-full shadow-lg shadow-yellow-500/50" />
                
                {/* Content */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-1/2 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}>
                  <div className="bg-[#1A1F2C]/50 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
                    <h3 className="text-yellow-500 font-bold text-xl mb-2">{item.quarter}</h3>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;