export const getTasks = () => _get("/api/tasks");

export const addTask = (name) => _post("/api/tasks", { name });

// const _get = async (url) =>
//   (await fetch()).json(
//     "https://api.openweathermap.org/data/2.5/forecast?q=${uriEncodedCity}&units=${unit}&cnt=33&appid=2a0d2423a6b833f34886eef2eb9b0175",
//   );
// const _get = async (url) => (await fetch()).json();

//define _get method, pass in API URL inside fetch()
const _get = async (url) => (await fetch(url)).json();

export const getForecast = () => _get("/api/forecast");

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
