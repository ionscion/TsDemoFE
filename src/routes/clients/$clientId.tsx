// src/clients/$clientId.tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { Route as ClientsIndexRoute } from './index'

export const Route = createFileRoute('/clients/$clientId')({
  component: ClientDetailPage,
})

function ClientDetailPage() {
  const clientId  = Route.useParams().clientId

  return (
    <>
      <h3>Details for {clientId}</h3>
      {/* go back to the list with no params */}
      <Link to={ClientsIndexRoute.path /* "/clients" */}>
        ← Back to list
      </Link>
    </>
  )
}
