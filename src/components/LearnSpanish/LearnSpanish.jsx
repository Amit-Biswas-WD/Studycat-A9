import { useLoaderData } from "react-router-dom";

const LearnSpanish = () => {
    const data = useLoaderData();

    // Log the first item of the data array
    console.log("First item of data:", data[1]);

  return (
    <div>
      <h1>Learn English</h1>
      {data && data[1] ? (
        <div>
          <h2 className="text-2xl font-semibold">Name: {data[1].name || "No Title Available"}</h2>
          <p className="text-lg font-medium">Website: {data[1].website || "No Description Available"}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
}

export default LearnSpanish