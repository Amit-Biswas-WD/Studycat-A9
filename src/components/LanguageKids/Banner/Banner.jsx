const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-16">
      {/* Text Section */}
      <div className="order-2 md:order-1 px-4">
        <h2 className="sm:text-center sm:mt-8 md:text-5xl sm:text-3xl text-black font-bold max-w-[468px]">
          A world where fun and learning speak the same language.
        </h2>
        <div className="mt-8">
          <p className="lg:text-start sm:text-center text-lg font-normal my-8 text-[#000000] max-w-[468px]">
            Jump into the playful paws of Studycat's language adventures! Every
            one of our apps is a sandbox of discovery, blending language
            learning with the kind of fun that has tails wagging!
          </p>
        </div>
      </div>

      {/* image Section */}
      <div className="order-1 md:order-2 w-full max-w-[740px] mx-auto">
        <img className="w-full h-auto" src="https://i.ibb.co.com/GTPsDjc/products-plane.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
