import { getUsers } from "@/app/domains/users/services/api";
import { GetServerSideProps } from "next";
import React from "react";

export const metadata = {
  title: "Users",
  description: "This is the users page",
};

const Page = async () => {
  const data = await getUsers();
  return (
    <>
      <h1>Users</h1>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </>
  );
};

export default Page;
