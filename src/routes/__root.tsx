import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen w-screen">
      <div className="p-2 flex flex-col gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>{" "}
        <Link to="/counter" className="[&.active]:font-bold">
          Counter
        </Link>{" "}
        <Link to="/clients" className="[&.active]:font-bold">
          Client List
        </Link>
      </div>
      <div className=" flex p-2 w-full items-center justify-center">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
