const UnlockingFluency = () => {
  return (
    <div className="my-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-16">
          {/* Text Section */}
          <div className="order-2 md:order-1 px-4">
            <h2 className="md:text-4xl sm:text-2xl font-bold">
              Unlocking fluency, one game at a time
            </h2>
            <div className="my-6 text-lg font-normal">
              <p className="text-lg">
                Pounce into the nuts and bolts of how Studycat transforms
                language learning into a series of fun-filled adventures. Our
                method is simple yet powerful, designed to engage young learners
                at every step of their journey towards fluency.
              </p>
              <li className="my-6">
                <span className="pr-4 font-bold">Interactive lessons:</span>
                Tailored games that adapt to your child's learning pace, making
                every session unique.
              </li>
              <li>
                <span className="font-bold pr-4">
                  Comprehensive language skills:
                </span>
                Beyond basic vocabulary, we immerse kids in beginner grammar and
                sentence structure through playful interaction.
              </li>
              <li>
                <span className="font-bold pr-4">Immersive environment:</span>
                Learn a language, in that language! All our activities focus on
                language immersion, which means your child engages only with the
                language they're studying.
              </li>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 md:order-2 w-full max-w-[740px] mx-auto">
            <img
              src="https://i.ibb.co.com/L0mQ0K8/products-screenshot-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockingFluency;
