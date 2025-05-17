import { type Client } from "../types/types";

export async function fetchAllClients(): Promise<Client[]> {
  const res = await fetch("/api/users");
  if (!res.ok) throw new Error("Failed to fetch clients");
  return res.json();
}