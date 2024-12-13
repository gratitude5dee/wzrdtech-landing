import { useEffect, useRef } from "react";
import TimelineItem from "./TimelineItem";
import TimelineCurve from "./TimelineCurve";

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
    },
    {
      date: "Q1 2025",
      title: "Innovation",
      description: "Advanced features and technological breakthroughs"
    },
    {
      date: "Q2 2025",
      title: "Ecosystem Growth",
      description: "Expanding ecosystem and partnerships network"
    },
    {
      date: "Q3 2025",
      title: "Global Adoption",
      description: "Worldwide adoption and market penetration"
    },
    {
      date: "Q4 2025",
      title: "Future Vision",
      description: "Next generation developments and roadmap expansion"
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
            <TimelineCurve 
              key={`curve-${index}`}
              index={index}
              top={index * 24}
            />
          ))}

          {/* Timeline Items */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <TimelineItem 
                key={index}
                {...milestone}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;