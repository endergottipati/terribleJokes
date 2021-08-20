const jokeEl = document.getElementById('joke')
const jBtn = document.getElementById('jBtn')

jBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })
}
