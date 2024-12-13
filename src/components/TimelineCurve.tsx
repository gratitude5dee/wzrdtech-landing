interface TimelineCurveProps {
  index: number;
  top: number;
}

const TimelineCurve = ({ index, top }: TimelineCurveProps) => {
  return (
    <div 
      className="absolute left-4 md:left-1/2" 
      style={{
        top: `${top}rem`,
        height: index === 7 ? '0' : '24rem' // Remove height for last curve completely
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
  );
};

export default TimelineCurve;