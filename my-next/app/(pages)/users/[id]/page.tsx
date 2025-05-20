import { getUser } from "@/app/domains/users/services/api";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const data = await getUser(id);

  return (
    <div>
      <h1>Users: {id}</h1>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </div>
  );
};
export default Page;
