import React from 'react';

const Faculty = () => {
  return (
    <div className="bg-black text-white lg:h-[25vw] flex items-center justify-center py-[1vw]">
      <div className="border-2 border-white rounded-tr-[2vw] rounded-bl-[2vw]  lg:p-[1vw]  flex flex-col md:flex-row gap-[1vw] items-center lg:w-[80%] w-[80%]">
        {/* Left Section - Text Content */}
        <div className="flex-1 lg:px-[4vw] p-5">
          <h1 className="lg:text-[2.4vw] text-[7vw] font-bold  text-orange-300 mb-[1vw] uppercase">Faculty Message</h1>
          <p className="text-lg leading-relaxed ">"As Faculty Advisor of SAIC, I take immense pride in the team’s dedication to fostering alumni-student engagement. Their initiatives truly strengthen our institute’s legacy and inspire meaningful connections across generations of NIT Durgapur."<br /><span className='font-bold captailize lg:text-[1.5vw]'>-Shibendu Shekhar Roy</span>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className=" flex-shrink-0 lg:px-[3vw] lg:py-[1vw] py-[2vw] px-[4vw]">
          <img
            src="https://nitdgp.ac.in/uploads/4feb993568a8bdf321c10fa950f736e8.jpg"
            alt="Alumination Poster"
            className="lg:w-[15vw] rounded-xl border border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Faculty;
