// src/routes/clients/$clientId.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/clients/$clientId")({
  component: ClientDetailPage,
});

function ClientDetailPage() {
  const clientId = Route.useParams().clientId;

  return (
    <div className="p-2">
      <h3>Details for {clientId}</h3>
    </div>
  );
}
