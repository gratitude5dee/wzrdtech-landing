interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  index: number;
}

const TimelineItem = ({ date, title, description, index }: TimelineItemProps) => {
  return (
    <div className="timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 opacity-0 transition-all duration-1000">
      {/* Glowing Checkpoint */}
      <div className="absolute left-4 md:left-1/2 w-6 h-6 -ml-3 rounded-full bg-red-500 
        shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-glow z-10 
        before:absolute before:inset-0 before:rounded-full before:bg-red-500 
        before:animate-ping before:opacity-75"
      />
      
      {/* Content */}
      <div className={`md:text-right ${index % 2 === 0 ? 'md:pr-16' : 'md:order-2 md:pl-16'}`}>
        <h3 className="text-2xl font-bold text-red-500 mb-2">{date}</h3>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className={index % 2 === 0 ? 'md:pl-16' : 'md:order-1 md:pr-16'} />
    </div>
  );
};

export default TimelineItem;