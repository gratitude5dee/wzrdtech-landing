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
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px"
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
          {/* Curved Lines */}
          {milestones.map((_, index) => (
            <div 
              key={`curve-${index}`} 
              className="absolute left-4 md:left-1/2" 
              style={{
                top: `${(index * 24)}rem`,
                height: '24rem'
              }}
            >
              <svg 
                className="h-full w-40 -ml-20" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <path
                  d={index % 2 === 0 
                    ? "M50,0 Q60,50 50,100" 
                    : "M50,0 Q40,50 50,100"
                  }
                  className="stroke-red-500/20"
                  fill="none"
                  strokeWidth="2"
                />
              </svg>
            </div>
          ))}

          {/* Timeline Items */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 opacity-0 transition-all duration-1000`}
              >
                {/* Glowing Checkpoint */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 -ml-3 rounded-full bg-red-500 
                  shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-glow z-10 
                  before:absolute before:inset-0 before:rounded-full before:bg-red-500 
                  before:animate-ping before:opacity-75"
                />
                
                {/* Content */}
                <div className={`md:text-right ${index % 2 === 0 ? 'md:pr-16' : 'md:order-2 md:pl-16'}`}>
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