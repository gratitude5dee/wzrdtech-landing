import { useEffect, useRef } from "react";

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'opacity-100');
            entry.target.classList.remove('opacity-0');
            
            // Add active state and glow to timeline point
            const point = entry.target.querySelector('.timeline-point');
            point?.classList.add('scale-125', 'animate-glow');
            
            // Animate the curved line
            const line = entry.target.querySelector('.timeline-curve');
            line?.classList.add('animate-draw');
          } else {
            // Remove active state when out of view
            const point = entry.target.querySelector('.timeline-point');
            point?.classList.remove('scale-125', 'animate-glow');
            
            // Reset line animation
            const line = entry.target.querySelector('.timeline-curve');
            line?.classList.remove('animate-draw');
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-100px"
      }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems?.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const milestones = [
    {
      date: "Q1 2024",
      title: "Launch Phase",
      description: "Initial token launch and community building"
    },
    {
      date: "Q2 2024",
      title: "Development",
      description: "Platform development and partnership announcements"
    },
    {
      date: "Q3 2024",
      title: "Integration",
      description: "Major exchange listings and tool integrations"
    },
    {
      date: "Q4 2024",
      title: "Expansion",
      description: "Global expansion and new feature releases"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-jatt-darker via-black to-jatt-darker px-4 py-32" id="timeline">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="text-gradient">Roadmap</span>
        </h2>

        <div className="relative" ref={timelineRef}>
          {/* Timeline Items */}
          <div className="space-y-32">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 opacity-0 transition-all duration-1000`}
              >
                {/* Timeline Point with Glow */}
                <div 
                  className={`timeline-point absolute ${
                    index % 2 === 0 ? 'md:left-[25%]' : 'md:left-[75%]'
                  } w-6 h-6 -ml-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
                  shadow-[0_0_30px_rgba(236,72,153,0.7)] transition-all duration-500 z-20`}
                />
                
                {/* Curved Connection Line */}
                {index < milestones.length - 1 && (
                  <div className="timeline-curve absolute w-full h-32 overflow-visible z-10"
                       style={{ top: '2rem' }}>
                    <svg className="w-full h-full" preserveAspectRatio="none">
                      <path
                        className={`stroke-[3] stroke-gradient fill-none ${
                          index % 2 === 0 
                            ? 'path-curve-right' 
                            : 'path-curve-left'
                        }`}
                        d={index % 2 === 0 
                          ? `M ${window.innerWidth * 0.25} 0 C ${window.innerWidth * 0.4} 50, ${window.innerWidth * 0.6} 50, ${window.innerWidth * 0.75} 100`
                          : `M ${window.innerWidth * 0.75} 0 C ${window.innerWidth * 0.6} 50, ${window.innerWidth * 0.4} 50, ${window.innerWidth * 0.25} 100`
                        }
                        style={{
                          stroke: 'url(#gradient)',
                          strokeDasharray: '1000',
                          strokeDashoffset: '1000'
                        }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#8B5CF6' }} />
                          <stop offset="50%" style={{ stopColor: '#D946EF' }} />
                          <stop offset="100%" style={{ stopColor: '#F97316' }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                
                {/* Content */}
                <div className={`${
                  index % 2 === 0 
                    ? 'md:text-right md:pr-16 md:col-start-1' 
                    : 'md:text-left md:pl-16 md:col-start-2'
                }`}>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
                    {milestone.date}
                  </h3>
                  <h4 className="text-xl font-bold text-white mb-2">{milestone.title}</h4>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
                <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;