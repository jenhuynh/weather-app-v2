import * as React from "react";

import * as apiClient from "./apiClient";

const Forecast = () => {
  const [forecasts, setForecasts] = React.useState([]);
  const loadForecast = async () => {
    const result = await apiClient.getForecast();
    setForecasts(result);
  };
  // const [tasks, setTasks] = React.useState([]);
  const getWeather = () => {
    loadForecast();
    // fetch(
    //   "https://api.openweathermap.org/data/2.5/forecast?q=${uriEncodedCity}&units=${unit}&cnt=33&appid=2a0d2423a6b833f34886eef2eb9b0175",
    // )
    //   .then((response) => {
    //     //returns a promise
    //     return response.json();
    //   })
    //then when I verify it is 200, we wait for the actual data. Once data is ready, you can setResponseObj
    // .then((response) => {
    //   setApiResponse(response);
    // });
  };
  // const loadTasks = async () => setTasks(await apiClient.getTasks());
  // const addTask = (task) => apiClient.addTask(task).then(loadTasks);

  React.useEffect(() => {
    loadForecast();
  }, []);
  console.log(forecasts);
  return (
    <section>
      {forecasts.map((forecast, index) => {
        return <ForecastDay forecast={forecast} key={index} />;
      })}
      {/* <TaskList tasks={tasks} />
      <AddTask {...{ addTask }} /> */}
    </section>
  );
};

const ForecastDay = ({ forecast }) => {
  return (
    <>
      <h3>Day</h3>
      <p>{forecast.day}</p>
      <p>Time of data forecasted:{forecast?.dt}</p>
      <p>Description: {forecast?.weather?.[0]?.description}</p>
      <p>Temperature: {forecast?.main?.temp}</p>
    </>
  );
};

// const TaskList = ({ tasks }) => (
//   <ul>
//     {tasks.map(({ id, name }) => (
//       <li key={id}>{name}</li>
//     ))}
//   </ul>
// );

export default Forecast;
