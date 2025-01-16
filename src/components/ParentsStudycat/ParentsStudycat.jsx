import bat from "../../assets/bat.dugKSlVH.svg";
import cotton from "../../assets/cotton.DKJfbCkM.svg";
import calico from "../../assets/calico.BrP1IIMZ.svg";

const ParentsStudycat = () => {
  return (
    <div className="mt-16 mb-2">
      <div>
        <img
          className="w-full h-auto bg-cover object-cover"
          src="https://i.ibb.co.com/5YF851K/Screenshot-10.png"
          alt=""
        />
      </div>
      <div className="bg-[#DEF0FA] py-16">
        <h2 className="text-5xl text-center font-semibold pb-10">
          Why do parents and kids love Studycat?
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-screen-lg mx-auto p-8">
          <div className="col-span-1 text-center rounded-2xl py-9 px-6 bg-slate-100 sm:w-full sm:max-w-full md:max-w-[370px]  mx-auto">
            <div className="flex justify-center">
              <img
                className="w-16 h-16 bg-white p-2 rounded-full"
                src={cotton}
                alt="Cotton"
              />
            </div>
            <p className="my-6 text-lg font-normal">
              "The kids are having fun. The games are intuitive and easy to
              understand, and even my 4-year-old child enjoys playing them."
            </p>
            <h2 className="text-2xl font-semibold">Japan</h2>
          </div>
          <div className="col-span-1 text-center rounded-2xl py-9 px-6 bg-slate-100 sm:w-full sm:max-w-full md:max-w-[370px]  mx-auto">
            <div className="flex justify-center">
              <img
                className="w-16 h-16 bg-white p-2 rounded-full"
                src={bat}
                alt="Bat"
              />
            </div>
            <p className="my-6 text-lg font-normal">
              "I teach English as a Foreign Language and I love this app because
              it uses both British and American accents. It's great!"
            </p>
            <h2 className="text-2xl font-semibold">Taiwan</h2>
          </div>
          <div className="col-span-1 text-center rounded-2xl py-9 px-6 bg-slate-100 sm:w-full sm:max-w-full md:max-w-[370px]  mx-auto">
            <div className="flex justify-center">
              <img
                className="w-16 h-16 bg-white p-2 rounded-full"
                src={calico}
                alt="Calico"
              />
            </div>
            <p className="my-6 text-lg font-normal">
              "I love it and my son learns super fast. The app is very good and
              learning English has become my 3-year-old son's favorite hobby."
            </p>
            <h2 className="text-2xl font-semibold">Colombia</h2>
          </div>
        </div>
      </div>
      <img
        className="w-full h-auto object-cover bg-cover"
        src="https://i.ibb.co.com/ZWfqLJz/Screenshot-11.png"
        alt=""
      />
    </div>
  );
};

export default ParentsStudycat;
