import { fetcher } from "@/app/shared/lib/fetches";
import { User } from "../schemas/userSchema";

export async function getUsers() {
  const data = fetcher<User>(`https://jsonplaceholder.typicode.com/todos`);
  return data;
}
