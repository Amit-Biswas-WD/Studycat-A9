const WhatStudycat = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-16">
      {/* Text Section */}
      <div className="order-1 md:order-2 px-4">
        <h2 className="sm:text-center sm:mt-8 md:text-5xl sm:text-3xl text-black font-bold max-w-[468px]">
          Every child deserves the gift of language
        </h2>
        <div className="mt-8">
          <p className="lg:text-start sm:text-center text-lg font-normal my-8 text-[#000000] max-w-[468px]">
            Studycat is on a mission to make language learning irresistibly fun,
            accessible, and effective, ensuring every tap and swipe is a step
            towards a new world of words for your child.
          </p>
        </div>
      </div>

      {/* image Section */}
      <div className="order-2 md:order-1 w-full max-w-[740px] mx-auto">
        <img
          className="w-full h-auto"
          src="https://i.ibb.co.com/NnGrr7p/about-us-banner.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default WhatStudycat;
