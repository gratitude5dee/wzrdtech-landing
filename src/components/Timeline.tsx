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
            
            // Add active state to timeline point
            const point = entry.target.querySelector('.timeline-point');
            point?.classList.add('scale-125', 'bg-red-400');
            
            // Animate the line connecting to the next point
            const line = entry.target.querySelector('.timeline-line');
            line?.classList.add('scale-x-100');
          } else {
            // Remove active state when out of view
            const point = entry.target.querySelector('.timeline-point');
            point?.classList.remove('scale-125', 'bg-red-400');
            
            // Reset line animation
            const line = entry.target.querySelector('.timeline-line');
            line?.classList.remove('scale-x-100');
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
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-px bg-red-500/20 transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 opacity-0 transition-all duration-1000`}
              >
                {/* Timeline Point */}
                <div className="timeline-point absolute left-4 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-red-500 
                  transition-all duration-500 transform -translate-x-1/2 z-10"
                />
                
                {/* Timeline Line - Animated connection to next point */}
                {index < milestones.length - 1 && (
                  <div className="timeline-line absolute left-4 md:left-1/2 w-px h-24 bg-red-500 
                    transform -translate-x-1/2 origin-top scale-x-0 transition-transform duration-1000"
                    style={{ top: '2rem' }}
                  />
                )}
                
                {/* Content */}
                <div className={`${
                  index % 2 === 0 
                    ? 'md:text-right md:pr-16' 
                    : 'md:order-2 md:pl-16'
                }`}>
                  <h3 className="text-2xl font-bold text-red-500 mb-2">{milestone.date}</h3>
                  <h4 className="text-xl font-bold text-white mb-2">{milestone.title}</h4>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
                <div className={index % 2 === 0 ? 'md:pl-16' : 'md:order-1 md:pr-16'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;