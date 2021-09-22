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
      <div className="weatherCard">
        <h3>Sunnyvale Forecast</h3>
        <img
          src="https://icons-for-free.com/iconfiles/png/512/forecast+partly+cloudy+weather+icon-1320196484400215944.png"
          alt="icon of sun and clouds"
        ></img>
        <p>{forecast.day}</p>
        <p>Time of data forecasted:{forecast?.dt}</p>
        <p>Description: {forecast?.weather?.[0]?.description}</p>
        <p>Temperature: {forecast?.main?.temp}</p>
      </div>
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
