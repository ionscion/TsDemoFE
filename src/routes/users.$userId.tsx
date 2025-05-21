// src/routes/clients/$userId.tsx
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId")({
  component: ClientDetailPage,
});

function ClientDetailPage() {
  const userId = Route.useParams().userId;

  return (
    <div className="p-2 flex flex-col gap-2">
      <h3>Details for {userId}</h3>
      {/* go back to the list with no params */}
      <Link to="/users" className="[&.active]:font-bold">
        ← Back to list
      </Link>
    </div>
  );
}
