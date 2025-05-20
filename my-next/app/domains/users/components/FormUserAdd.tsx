"use client";

import React from "react";
import { createUser, deleteUser, updateUser } from "../services/api";

const FormUserAdd = () => {
  const handleSubmit = () => {
    // createUser({ id: "1" })
    //   .then((res) => {
    //     console.log("User created", res);
    //   })
    //   .catch((err) => {
    //     console.log("Error creating user", err);
    //   });

    // updateUser("1", { id: "1" })
    //   .then((res) => {
    //     console.log("User created", res);
    //   })
    //   .catch((err) => {
    //     console.log("Error creating user", err);
    //   });

    deleteUser("1")
      .then((res) => {
        console.log("User created", res);
      })
      .catch((err) => {
        console.log("Error creating user", err);
      });
  };

  return (
    <form>
      <button
        type="button"
        onClick={() => handleSubmit()}
        className="border bg-green-900 cursor-pointer hover:bg-green-700"
      >
        Create new
      </button>
    </form>
  );
};

export default FormUserAdd;
