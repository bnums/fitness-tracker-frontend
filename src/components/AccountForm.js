import React from "react";
import { useParams } from "react-router";

const AccountForm = () => {
  const params = useParams();
  let { method } = params;
  return (
    <div>
      <h1>Login /Register Page</h1>
      <h1>{method}</h1>
    </div>
  );
};

export default AccountForm;
