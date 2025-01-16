const OurAchivement = () => {
  const items = [
    {
      id: 1,
      title: "million kids learning",
      value: 16,
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "language apps",
      value: 5,
      bgColor: "bg-green-500",
    },
    {
      id: 3,
      title: "words & phrases",
      value: 1200,
      bgColor: "bg-yellow-500",
    },
    {
      id: 4,
      title: "games & activities",
      value: 500,
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className="my-16">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="md:text-4xl sm:text-2xl font-bold">
          Our achievements and awards
        </h2>
        <p className="text-lg font-normal my-4">
          We’re pretty proud of what we’ve accomplished so far – but we’re just
          getting started!
        </p>
      </div>

      {/* Achievements Section */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-8 max-w-screen-lg mx-auto p-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`text-center max-w-[270px] max-h-[250px] rounded-full mx-auto text-white px-14 py-16 ${item.bgColor}`}
          >
            <h2 className="text-3xl font-bold">{item.value}+</h2>
            <p className="text-2xl font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAchivement;
