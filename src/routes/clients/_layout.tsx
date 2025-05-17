// src/routes/clients/__layout.tsx
import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { type JSX } from 'react';

export const Route = createFileRoute('/clients/_layout')({
  component: ClientsLayout,
});

function ClientsLayout(): JSX.Element {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">Clients</h2>
        <ul className="space-y-2">
          <li>
            <Link to={Route.path /* "/clients" */}>List All</Link>
          </li>
          <li>
            {/* Example static link; or generate new-client link */}
            <Link to={Route.path + '/new'}>Add New</Link>
          </li>
        </ul>
      </aside>

      {/* Main content area for nested routes */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
