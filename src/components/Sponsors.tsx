const Sponsors = () => {
  return (
    <section className="relative bg-gradient-to-b from-jatt-darker via-black to-jatt-darker px-4 py-32" id="sponsors">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">Partners</span>
        </h2>

        {/* Title Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-red-500">
            Title Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-16 bg-[#1A1F2C] rounded-lg animate-pulse" />
            ))}
          </div>
        </div>

        {/* Gold Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-500">
            Gold Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-28 h-14 bg-[#1A1F2C] rounded-lg animate-pulse" />
            ))}
          </div>
        </div>

        {/* Silver Partners */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-400">
            Silver Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-6 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="w-24 h-12 bg-[#1A1F2C] rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;