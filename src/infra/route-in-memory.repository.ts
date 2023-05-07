import { Route } from "../domain/route.entity"
import { IRouteRepository } from "../domain/route.repository"

export class RouteInMemory implements IRouteRepository {
  public items: Route[] = []
  async insert(route: Route): Promise<void> {
    this.items.push(route)
  }
}
