const ExpertisePlay = () => {
  return (
    <div className="my-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-16">
          {/* Text Section */}
          <div className="order-1 md:order-2 px-4">
            <h2 className="md:text-4xl sm:text-2xl font-bold">
              Expertise meets play in every lesson
            </h2>
            <div className="my-6 text-lg font-normal">
              <p className="text-lg">
                Choosing Studycat means embarking on a language learning journey
                designed by educational experts who know how to make learning
                stick—and how to make it fun.
              </p>
              <li className="my-6">
                <span className="pr-4 font-bold">Designed by educators:</span>
                Created with the latest research in teaching and learning,
                ensuring a solid educational foundation.
              </li>
              <li>
                <span className="font-bold pr-4">Aligned to standards:</span>
                Our curriculum aligns with international learning standards,
                preparing kids for success both in and out of the classroom.
              </li>
              <li>
                <span className="font-bold pr-4">Safe, ad-free learning: </span>
                A kidSAFE listed, distraction-free environment lets your child
                focus on learning without interruptions.
              </li>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-2 md:order-1 w-full max-w-[740px] mx-auto">
            <img
              src="https://i.ibb.co.com/VSYf18F/products-screenshot-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertisePlay;
