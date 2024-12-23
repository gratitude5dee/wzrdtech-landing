const PoweredBy = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 backdrop-blur-sm" />
      
      {/* Animated gradient orbs */}
      <div className="absolute -top-12 -left-12 w-24 h-24 bg-jatt-neon-purple/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-jatt-neon-blue/30 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-2xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-jatt-gold via-jatt-neon-purple to-jatt-gold bg-clip-text text-transparent">
            Powered By
          </span>
        </h2>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className="w-32 h-16 bg-black/30 rounded-lg backdrop-blur-sm 
                        border border-white/10 hover:border-jatt-neon-blue/50
                        transition-all duration-300 hover:scale-105
                        flex items-center justify-center
                        group animate-card-float"
            >
              <div className="text-gray-500 group-hover:text-jatt-neon-blue transition-colors">
                Logo {i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;