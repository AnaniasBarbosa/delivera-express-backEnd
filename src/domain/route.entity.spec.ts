import { RouteProps, Route, LatLng } from "./route.entity"

describe("Route Tests", () => {
  test("constructor", () => {
    const routeProps: RouteProps = {
      title: "MA",
      startPosition: { lat: 30, lng: 30 },
      endPosition: { lat: 30, lng: 30 },
    }

    const route = new Route(routeProps)
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    })
  })

  test("Updates title", () => {
    const newTitle = "New title"
    const route = new Route({
      title: "MY TITLE",
      startPosition: { lat: 30, lng: 30 },
      endPosition: { lat: 30, lng: 30 },
    })

    route.updateTitle(newTitle)
    expect(route.title).toEqual(newTitle)
  })

  test("Update position", () => {
    const route = new Route({
      title: "MY TITLE",
      startPosition: { lat: 30, lng: 30 },
      endPosition: { lat: 30, lng: 30 },
    })
    const newPosition: LatLng = { lat: 40, lng: 40 }
    route.updatePosition(newPosition, newPosition)

    expect(route.startPosition).toBe(newPosition)
    expect(route.endPosition).toBe(newPosition)
  })
})
