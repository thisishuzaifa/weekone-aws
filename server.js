const express = require("express");
const app = express();

app.use(express.json())
app.use(express.static("build"))

const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "electric ⚡️",
    level: 99,
    image: "/pikachu.webp"
  },
  {
    id: 2,
    name: "Bulbasaur",
    type: "grass 🌱",
    level: 1,
    image: "/bulbasaur.webp"
    },
  {
    id: 3,
    name: "Charmander",
    type: "fire 🔥",
    level: 1,
    image: "/charmander.webp"
  }
]


app.get("/api/pokemons", (req, res) => {
  res.send({pokemons: pokemons})
});

app.get('*', (req, res) => {
    res.sendFile('build/index.html')
})


app.post("/api/pokemons", (req, res) => {
  const data = req.body
  data.id = pokemons.length+1
  pokemons.push(data)
  res.send(data)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))