import express, { Express, Request, Response } from "express"
import { CreateRouteUseCase } from "../../../application/create-route.use-case"
import { RouteInMemory } from "../../route-in-memory.repository"

const app: Express = express()
const repository = new RouteInMemory()

app.use(express.json())

app.post("/routes", async (req: Request, res: Response) => {
  const createUserCase = new CreateRouteUseCase(repository)
  const output = await createUserCase.execute(req.body)
  return res.status(201).json(output)
})

export default app
