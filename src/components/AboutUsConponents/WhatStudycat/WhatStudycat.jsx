const WhatStudycat = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-16">
      {/* Text Section */}
      <div className="order-1 md:order-2 px-4">
        <h2 className="sm:text-center sm:mt-8 md:text-4xl sm:text-2xl text-black font-bold max-w-[468px]">
          The Studycat method
        </h2>
        <div className="mt-8">
          <p className="lg:text-start sm:text-center text-lg font-normal my-8 text-[#000000] max-w-[468px]">
            We've reimagined language learning by infusing it with play,
            ensuring every swipe and tap on our apps turns into a moment of
            discovery and delight.
          </p>
          <p className="lg:text-start sm:text-center text-lg font-normal my-8 text-[#000000] max-w-[468px]">
            Our unique approach combines the latest educational research with
            interactive games, catchy songs, and relatable stories, designed to
            engage young learners at their level.
          </p>
          <p className="lg:text-start sm:text-center text-lg font-normal my-8 text-[#000000] max-w-[468px]">
            This method not only makes learning more enjoyable but also more
            effective, fostering a deep, intuitive understanding of language.
          </p>
          <p className="lg:text-start sm:text-center text-lg font-normal my-8 text-[#000000] max-w-[468px]">
            By making education entertaining, we unlock the potential in every
            child, setting the foundation for a lifetime of learning and
            curiosity.
          </p>
        </div>
      </div>

      {/* image Section */}
      <div className="order-2 md:order-1 w-full max-w-[740px] mx-auto">
        <img
          className="w-full h-auto"
          src="https://i.ibb.co.com/FbgSv0f/about-us-method.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default WhatStudycat;
