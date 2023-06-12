import React, { useEffect } from "react";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/Label";
import { useSubmit } from "../hooks/api/useSubmit";

export const ConfirmationRoute = () => {
  const navigate = useNavigate();

  const { mutate, isLoading, isSuccess, isError } = useSubmit({
    data: {
      name: "",
      email: "",
      password: "",
      color: "",
      terms: false,
    },
  });

  useEffect(() => {
    if (!isLoading) {
      if (isSuccess) {
        navigate("/success");
      } else if (isError) {
        navigate("/error");
      }
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <>
      {/**
       * TODO: Replace by context
       */}
      <Title>Confirmation</Title>
      <Label>First Name: {""}</Label>
      <Label>E-mail: {""}</Label>
      <Label>Password: {""}</Label>
      <Label>Favorite Color: {""}</Label>
      <Label>Terms and Conditions: {""}</Label>
      <Button
        onClick={() => {
          navigate("/more-info");
        }}
      >
        Back
      </Button>
      <Button
        onClick={() => {
          mutate();
        }}
        disabled={isLoading}
      >
        Submit
      </Button>
      {isLoading && <Label>Loading...</Label>}
    </>
  );
};
