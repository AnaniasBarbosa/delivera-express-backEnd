import { LatLng, Route } from "../domain/route.entity"
import { IRouteRepository } from "../domain/route.repository"

export class CreateRouteUseCase {
  constructor(private routeRepo: IRouteRepository) {}

  async execute(inputRoute: InputRoute): Promise<OutputRoute> {
    const route = new Route(inputRoute)
    await this.routeRepo.insert(route)
    return route.toJSON()
  }
}

type InputRoute = {
  title: string
  startPosition: LatLng
  endPosition: LatLng
  points?: LatLng[]
}

type OutputRoute = {
  title: string
  startPosition: LatLng
  endPosition: LatLng
  points?: LatLng[]
}
