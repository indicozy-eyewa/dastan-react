import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/header.tsx", [
    index("routes/home.tsx"),
    layout("layouts/admin.tsx", [
      route("about", "routes/about.tsx"),
      route("locations", "routes/locations.tsx"),
      route("locations/:locationId", "routes/location.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
