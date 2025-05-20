import { fetcher } from "@/app/shared/lib/fetches";
import { User } from "../schemas/userSchema";

export async function getUsers() {
  const data = fetcher<User>(`https://jsonplaceholder.typicode.com/todos`);
  return data;
}

export async function getUser(id: string) {
  const data = fetcher<User>(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return data;
}

export async function createUser(user: Partial<User>) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  return { status: response.status, data };
}

export async function updateUser(id: string, user: Partial<User>) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }
  );

  const data = await response.json();
  return { status: response.status, data };
}

export async function deleteUser(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: "DELETE",
    }
  );

  return { status: response.status };
}
