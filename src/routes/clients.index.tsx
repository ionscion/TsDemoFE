// src/routes/clients/index.tsx
import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/clients/")({
  component: ClientsPage,
});

function ClientsPage() {
  return <div>Select a client.</div>;
}
