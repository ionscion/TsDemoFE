import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen w-screen">
      <div className="p-2 flex flex-col gap-2">
        <Link
          to="/"
          className="[&active]:font-bold inline-block
          transition      
          duration-300     
          ease-in-out     
          hover:translate-x-2
          hover:text-blue-500"
          activeProps={{
            className: "font-bold",
          }}
        >
          Home
        </Link>{" "}
        <Link
          to="/about"
          className="inline-block
          transition      
          duration-300     
          ease-in-out     
          hover:translate-x-2
          hover:text-blue-500"
          activeProps={{
            className: "font-bold",
          }}
        >
          About
        </Link>{" "}
        <Link
          to="/counter"
          className="inline-block
          transition      
          duration-300     
          ease-in-out     
          hover:translate-x-2
          hover:text-blue-500"
          activeProps={{
            className: "font-bold",
          }}
        >
          Counter
        </Link>{" "}
        <Link
          to="/users"
          className="inline-block
          transition      
          duration-300     
          ease-in-out     
          hover:translate-x-2
          hover:text-blue-500"
          activeProps={{
            className: "font-bold",
          }}
        >
          Users
        </Link>
      </div>
      <div className=" flex p-2 w-full items-center justify-center">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
