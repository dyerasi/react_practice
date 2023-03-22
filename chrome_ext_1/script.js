async function getConcerts() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Los%20Angeles&minDate=2023-02-22&maxDate=2023-03-30&page=1",
    options
  ).catch((err) => console.error(err));

  const records = await res.json();
  console.log("records", records);

  document.getElementById("concerts").innerHTML = records.data
    .map((item) => `<li>${item.name}</li>`)
    .join("");
}

getConcerts();
