const ExploreLanguages = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center my-16">
        {/* Image Section */}
        <div className="order-1 w-full max-w-[740px] mx-auto">
          <img
            src="https://i.ibb.co/RSm8FVj/homepage-5-languages-lion.png"
            alt="Explore Languages"
            className="w-full bg-cover object-cover"
          />
        </div>
  
        {/* Text Section */}
        <div className="order-2 px-4">
          <h2 className="sm:text-center sm:mt-8 sm:text-2xl text-4xl  text-black font-bold">
            Explore a world of words in five languages
          </h2>
          <div className="mt-8">
            <p className="sm:text-center text-lg font-normal my-8">
              Choose from
              <span className="text-lg font-semibold text-black mx-2">
                English, Spanish, French, German, or Chinese,
              </span>
              and let our engaging apps whisk your child away on a unique
              adventure!
            </p>
            <p className="sm:text-center text-lg font-normal">
              Watch your child pick up new language skills effortlessly, one
              exciting game at a time.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ExploreLanguages;
  