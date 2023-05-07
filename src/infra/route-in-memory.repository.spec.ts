import { LatLng, Route } from "../domain/route.entity"
import { RouteInMemory } from "./route-in-memory.repository"

describe("RouteInMemory Test", () => {
  type RouteProps = {
    title: string
    startPosition: LatLng
    endPosition: LatLng
    points?: LatLng[]
  }

  it("Insert a new route", async () => {
    const routeProps: RouteProps = {
      title: "MA",
      startPosition: { lat: 30, lng: 30 },
      endPosition: { lat: 30, lng: 30 },
    }

    const repository = new RouteInMemory()
    const route = new Route(routeProps)

    await repository.insert(route)
    expect(repository.items).toHaveLength(1)
    expect(repository.items).toStrictEqual([route])
  })
})
