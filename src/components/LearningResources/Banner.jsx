const LearnBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-16">
      {/* Text Section */}
      <div className="order-2 md:order-1 px-4">
        <h2 className="sm:text-center sm:mt-8 md:text-5xl sm:text-3xl text-black font-bold max-w-[468px]">
          Language learning resources for kids
        </h2>
        <div className="mt-8">
          <p className="lg:text-start sm:text-center text-lg font-normal my-8 text-[#000000] max-w-[468px]">
            Unlock a world of playful learning with Studycat's resources!
          </p>
          <p className="lg:text-start sm:text-center text-lg font-normal my-8 text-[#000000] max-w-[468px]">
            From animated stories that enchant, printable worksheets, engaging
            activities, and even songs that get tails wagging–we offer a variety
            of tools designed to make English language learning for kids an
            amazing adventure.
          </p>
        </div>
      </div>

      {/* image Section */}
      <div className="order-1 md:order-2 w-full max-w-[740px] mx-auto">
        <img
          className="w-full h-auto"
          src="https://i.ibb.co.com/28vyPkZ/resources-for-kids.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LearnBanner;
