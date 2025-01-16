import React from "react";

const SafeLearning = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 p-2">
      {/* Image Section */}
      <div className="order-1 w-full max-w-[740px] mx-auto">
        <img
          src="https://i.ibb.co.com/F3HrxY2/safe-for-kids.png"
          alt="Explore Languages"
          className="w-full bg-cover object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="order-2 px-4">
        <h2 className="text-4xl font-bold text-black sm:text-center sm:mt-8 sm:text-2xl lg:text-start">
          Safe and sound learning spaces
        </h2>
        <div className="mt-8">
          <p className="text-lg font-normal my-8 sm:text-center lg:text-start">
            Safe for kids and ad-free. In our
            <span className="text-lg font-semibold text-black mx-2">
              kidSAFE listed ad-free environment,
            </span>
            your child's safety and privacy are paramount.
          </p>
          <p className="text-lg font-normal sm:text-center lg:text-start">
            Enjoy peace of mind while they explore a world of language learning
            designed just for them! All content is appropriate for ages 3 and
            up.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafeLearning;
