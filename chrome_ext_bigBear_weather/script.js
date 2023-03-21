async function getWeatherReport() {
  const longitude = "34.2439";
  const latitude = "-116.9114";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7151defa0cmsh3e9a8ebec89a299p19542ajsn47a48351b578",
      "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
    },
  };

  fetch(
    `https://forecast9.p.rapidapi.com/rapidapi/forecast/${latitude}/${longitude}/summary/`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

getWeatherReport();
