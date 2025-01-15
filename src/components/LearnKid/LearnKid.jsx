const LearnKid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-16">
      {/* Text Section */}
      <div className="order-2 md:order-1 px-4">
        <h2 className="sm:text-center sm:mt-8 sm:text-2xl text-4xl text-black font-bold">
          Learn like a kid!
        </h2>
        <div className="mt-8">
          <p className="lg:text-start sm:text-center text-lg font-normal my-8 text-[#000000]">
            Step into a universe where learning and fun are one and the same!
          </p>
          <p className="lg:text-start sm:text-center text-lg font-normal">
            Our expertly crafted content, from whimsical games to enchanting
            stories, ignites curiosity and fosters a love of learning that
            stretches far beyond the classroom.
          </p>
          <p className="lg:text-start sm:text-center text-lg font-normal">
            When learning is a game, everybody wins.
          </p>
          <div className="flex justify-center mt-8">
            <button className="text-white font-bold text-xl w-80 h-14 bg-[#499DEC] border-b-[6px] border-[#0b7de7] rounded-2xl">
              Start learning today
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="order-1 md:order-2 w-full max-w-[740px] mx-auto">
        <img className="w-full h-auto object-cover bg-cover"
          src="https://i.ibb.co.com/wNLFvCM/homepage-learning-resources.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LearnKid;
