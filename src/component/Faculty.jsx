import React from 'react';

const Faculty = () => {
  return (
    <div className="bg-black text-white py-12 flex items-center justify-center">
      <div className="flex flex-col items-center w-[90%] max-w-6xl">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-orange-300 mb-8 md:mb-12 uppercase text-center">
          MEET OUR FACULTY ADVISERS
        </h1>
        
        {/* Faculty Cards Container */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center w-full">
          {/* First Faculty Card */}
          <div className="relative group">
            <div className="overflow-hidden rounded-xl border-2 border-white">
              <img
                src="https://nitdgp.ac.in/uploads/4feb993568a8bdf321c10fa950f736e8.jpg"
                alt="Faculty Adviser"
                className="w-64 h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
              <h3 className="text-white text-xl font-bold">Shibendu Shekhar Roy</h3>
            </div>
          </div>
          
          {/* Second Faculty Card */}
          <div className="relative group">
            <div className="overflow-hidden rounded-xl border-2 border-white">
              <img
                src="https://via.placeholder.com/256x288"  // Replace with actual image URL
                alt="Faculty Adviser"
                className="w-64 h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
              <h3 className="text-white text-xl font-bold">Faculty Name</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;