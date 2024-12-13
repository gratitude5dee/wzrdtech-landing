import { useEffect, useRef } from "react";

const Timeline = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-draw");
          }
        });
      },
      { threshold: 0.1 }
    );

    const quarters = document.querySelectorAll(".quarter-point");
    quarters.forEach((quarter) => observer.observe(quarter));

    if (pathRef.current) {
      observer.observe(pathRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section className="relative py-32 overflow-hidden" id="timeline">
      <div className="container mx-auto px-4" ref={containerRef}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="text-gradient">Roadmap</span>
        </h2>

        <div className="relative">
          {/* SVG Path for the curved zig-zag */}
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
            style={{ maxWidth: "4px" }}
          >
            <path
              ref={pathRef}
              className="path-curve-right stroke-gradient"
              d="M2 0 C2 100, 100 150, 2 200 C2 300, 100 350, 2 400 C2 500, 100 550, 2 600 C2 700, 100 750, 2 800"
              fill="none"
              strokeWidth="4"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>

          <div className="relative z-10">
            {timelineData.map((item, index) => (
              <div
                key={item.quarter}
                className={`quarter-point flex items-center gap-8 mb-32 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-jatt-gold">
                      {item.quarter}
                    </h3>
                    <h4 className="text-xl font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-jatt-gold animate-glow" />
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;