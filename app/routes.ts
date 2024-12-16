import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layouts/admin.tsx", [route("about", "routes/about.tsx")]),
] satisfies RouteConfig;
