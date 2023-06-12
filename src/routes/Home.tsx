import React from "react";
import { Title } from "../components/Title";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const HomeRoute = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title>Sign-up</Title>
      <TextInput placeholder="First Name" />
      <TextInput placeholder="E-Mail" />
      <TextInput placeholder="Password" />
      <Button
        onClick={() => {
          navigate("/more-info");
        }}
      >
        Next
      </Button>
    </>
  );
};
