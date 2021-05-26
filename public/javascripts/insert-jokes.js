let jokeObject = {};
const imageNames = [
  "baby-falling",
  "big-brother",
  "jerry",
  "jordan",
  "mike-tyson",
  "minions",
  "shaq",
  "will-ferrell",
];
async function showJoke() {
  $("#punchline").html("");
  $("#joke-gif").html("");
  const response = await fetch("http://localhost:3001/jokes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    jokeObject = await response.json();
    $(".joke").html("<p>" + jokeObject.setup + "</p>");
    $(".jokes-buttons").html(
      `<input onclick="showPunchline()" type="button" class="btn btn-primary" value="Show Punchline">`
    );
  }
}

function showPunchline() {
  $(".punchline").html("<p>" + jokeObject.punchline + "</p>");
  $(".jokes-buttons").html(
    `<input onclick="showJoke()" type="button" class="btn btn-primary" value="Click For Joke">`
  );
  const randomIndex = Math.floor(Math.random() * imageNames.length);
  const image = imageNames[randomIndex];
  $(".joke-gif").html(`<img src='../images/${image}.gif'>`);
}
