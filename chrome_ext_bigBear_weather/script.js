async function getWeatherReport() {
  const longitude = ",
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
