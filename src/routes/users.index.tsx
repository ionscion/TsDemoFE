// src/routes/clients/index.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchAllClients } from "../api/base";
import { type User } from "../types/types";

export const Route = createFileRoute("/users/")({
  component: UsersPage,
});

function UsersPage() {
  const {
    data: allClientData = [],
    isFetching,
    isError,
    error,
  } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchAllClients,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  if (isFetching) {
    return <div>Loading users...</div>;
  }

  if (isError) {
    return <div>Error loading users: {error.message}</div>;
  }
  return (
    <div className="p-2 ">
      <ul>
        {allClientData.map((c) => (
          <li key={c.id}>
            {/* 👇 Use the literal path and put the real id into `params` */}
            <Link
              to={"/users/$userId"}
              params={{ userId: c.id.toString() }} // ← force it to string
            >
              {c.first_name} {c.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
