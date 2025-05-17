// src/clients/index.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { Route as ClientDetailRoute } from "./$clientId";
import { useQuery } from "@tanstack/react-query";
import { fetchAllClients } from "../../api/base";
import { type Client } from "../../types/types";

export const Route = createFileRoute("/clients/")({
  component: ClientsPage,
});

function ClientsPage() {
  const { data: allClientData = [] } = useQuery<Client[], Error>({
    queryKey: ["clients"],
    queryFn: fetchAllClients,
    initialData: [],
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <ul>
      {allClientData.map((c) => (
        <li key={c.id}>
          {/* 👇 Use the literal path and put the real id into `params` */}
          <Link
            to={ClientDetailRoute.path /* "/clients/$clientId" */}
            params={{ clientId: c.id.toString() }} // ← force it to string
          >
            {c.first_name} {c.last_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
