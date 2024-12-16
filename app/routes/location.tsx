import type { Route } from "../+types/root";

export default function Home({ params }: Route.ComponentProps) {
  return <div>LOCATION PAGE {params.locationId}</div>;
}
