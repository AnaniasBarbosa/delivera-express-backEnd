export type LatLng = {
  lat: number
  lng: number
}

export type RouteProps = {
  title: string
  startPosition: LatLng
  endPosition: LatLng
  points?: LatLng[]
}

export class Route {
  public props: RouteProps
  constructor(props: RouteProps) {
    this.props = {
      ...props,
      points: props.points || [],
    }
  }

  public get title(): string {
    return this.props.title
  }

  updateTitle(title: string) {
    this.props.title = title
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.props.startPosition = startPosition
    this.props.endPosition = endPosition
  }
  private set startPosition(value: LatLng) {
    this.props.startPosition = value
  }
  private set endPosition(value: LatLng) {
    this.props.endPosition = value
  }
  public get startPosition(): LatLng {
    return this.props.startPosition
  }
  public get endPosition(): LatLng {
    return this.props.endPosition
  }

  toJSON(): RouteProps {
    return this.props
  }
}
