import icon from "../../assets/cta_body_illustration_2.BluYc9Pn.svg";

const StudycatFree = () => {
  return (
    <div className="bg-[#499DEC] max-w-[960px] mx-auto rounded-2xl text-white py-12 px-6 relative mt-80 my-16">
      <div className="flex justify-center mb-10">
        <img src={icon} alt="StudyCat Illustration" className="max-w-[320px] h-auto absolute -top-44" />
      </div>
      <h2 className="text-4xl font-bold text-center mb-6">
        Try Studycat for free
      </h2>
      <div className="mb-6">
        <p className="text-lg font-normal mb-4 text-center sm:text-center">
          Try Studycat for free and see the difference engaging, interactive
          language learning can make.
        </p>
        <p className="text-lg font-normal mx-auto max-w-[480px] text-center sm:text-center">
          No payment is required today, and you can cancel anytime within the
          free trial period.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="text-[#499DEC] text-xl w-80 h-14 bg-[#ffffff] border-b-[6px] border-[#0b7de7] rounded-2xl hover:bg-[#e6f2ff] active:bg-[#d9eaff] transition-all">
          Start learning today
        </button>
      </div>
    </div>
  );
};

export default StudycatFree;
