const StudyCatWorks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-16">
      {/* Text Section */}
      <div className="order-2 md:order-1 px-4">
        <h2 className="sm:text-center sm:mt-8 sm:text-2xl text-4xl text-black font-bold">How Studycat works</h2>
        <div className="mt-8">
          <p className="lg:text-start sm:text-center text-lg font-normal my-8 text-[#000000]">
            Hundreds of interactive games help captivate children, turning
            language learning into an exciting adventure, day after day!
          </p>
          <p className="lg:text-start sm:text-center text-lg font-normal">
            Developed by language and teaching experts, Studycat combines
            educational research with playful engagement, deepening language
            understanding with each tap, swipe, and giggle!
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="order-1 md:order-2 w-full max-w-[740px] mx-auto">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-xl"
          src="https://studycat-public-videos.s3.ap-southeast-1.amazonaws.com/App+preview/Pre-Shop-video_v2.mp4"
        >
        </video>
      </div>
    </div>
  );
};

export default StudyCatWorks;
