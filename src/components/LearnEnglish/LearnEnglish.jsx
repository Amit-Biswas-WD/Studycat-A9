import { useLoaderData } from "react-router-dom";

const LearnEnglish = () => {
  const data = useLoaderData();

  // Log the first item of the data array
  console.log("First item of data:", data[0]);

  return (
    <div>
      <h1>Learn English</h1>
      {data && data[0] ? (
        <div>
          <h2>{data[0].name || "No Title Available"}</h2>
          <p>{data[0].website || "No Description Available"}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default LearnEnglish;
