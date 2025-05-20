// import { useState } from "react";
// import * as userApi from "../services/api";
// import { User } from "../schemas/userSchema";

// export function useUser() {
//   const [users, setUsers] = useState<User | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   async function fetchUser() {
//     setLoading(true);
//     try {
//       const data = await userApi.getUsers();
//       setUsers(data);
//     } catch (e: any) {
//       setError(e.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return { users, loading, error, fetchUser };
// }
