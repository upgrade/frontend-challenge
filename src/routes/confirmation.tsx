import React from "react";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/Label";

export const ConfirmationRoute = () => {
  const navigate = useNavigate();

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
          // TODO: Add submission logic
          navigate("/success");
        }}
      >
        Submit
      </Button>
    </>
  );
};
