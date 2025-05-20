// src/routes/clients.route.tsx
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchAllClients } from "../api/base";
import { type Client } from "../types/types";

export const Route = createFileRoute("/clients")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    data: allClientData = [],
    isFetching,
    isError,
    error,
  } = useQuery<Client[], Error>({
    queryKey: ["clients"],
    queryFn: fetchAllClients,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  if (isFetching) {
    return <div>Loading clients…</div>;
  }

  if (isError) {
    return <div>Error loading clients: {error.message}</div>;
  }
  return (
    <div className="p-2 border-2 border-blue-500">
      <ul>
        {allClientData.map((c) => (
          <li key={c.id}>
            {/* 👇 Use the literal path and put the real id into `params` */}
            <Link
              to={"/clients/$clientId"}
              params={{ clientId: c.id.toString() }} // ← force it to string
            >
              {c.first_name} {c.last_name}
            </Link>
          </li>
        ))}
      </ul>
       {/* ← This is where your <clients/$clientId> page will render */}
      <Outlet />
    </div>
  );
}
