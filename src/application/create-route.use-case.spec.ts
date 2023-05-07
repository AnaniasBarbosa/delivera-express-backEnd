import { LatLng, Route } from "../domain/route.entity"
import { RouteInMemory } from "../infra/route-in-memory.repository"
import { CreateRouteUseCase } from "./create-route.use-case"

describe("CreateRouteUseCase Test", () => {
  it("Create a new Route", async () => {
    type RouteProps = {
      title: string
      startPosition: LatLng
      endPosition: LatLng
      points?: LatLng[]
    }
    const routeProps: RouteProps = {
      title: "MA",
      startPosition: { lat: 30, lng: 30 },
      endPosition: { lat: 30, lng: 30 },
    }
    const repository = new RouteInMemory()
    const routeUseCase = new CreateRouteUseCase(repository)
    const routeJson = await routeUseCase.execute(routeProps)
    expect(routeJson).toEqual({
      title: "MA",
      startPosition: { lat: 30, lng: 30 },
      endPosition: { lat: 30, lng: 30 },
      points: [],
    })
  })
})
