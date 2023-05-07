import app from "./app"

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("execution server: https://localhost:3000")
})
