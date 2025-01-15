const ScienceAndFun = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-16 px-4">
      {/* Text Section */}
      <div className="order-2 md:order-1">
        <h2 className="text-4xl font-bold text-black lg:text-left sm:text-center sm:text-2xl sm:mt-8">
          Where science and fun collide!
        </h2>
        <div className="mt-8">
          <p className="text-lg font-normal my-8 text-[#000000] lg:text-left sm:text-center">
            Discover the magic behind Studycat's success—our innovative approach
            combines the latest educational research with engaging, interactive
            technology, making language learning an exciting adventure for kids.
          </p>
          <p className="text-lg font-normal text-[#000000] lg:text-left sm:text-center">
            Our games don,t stop at fun—they,re carefully built to strengthen
            language skills and make learning last.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="order-1 md:order-2 w-full max-w-[640px] mx-auto">
        <img
          src="https://i.ibb.co.com/X27Q8FN/homepage-science.png"
          alt="Science and Fun Illustration"
          className="w-[77%] h-auto"
        />
      </div>
    </div>
  );
};

export default ScienceAndFun;
