import React, { useEffect, useMemo } from "react";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/Label";
import { useSubmit } from "../hooks/api/useSubmit";
import { useFormContext } from "../hooks/useFormContext";

export const ConfirmationRoute = () => {
  const navigate = useNavigate();
  const { fields } = useFormContext();

  const formData = useMemo(() => {
    return {
      name: fields?.firstName?.value,
      email: fields?.email?.value,
      password: fields?.password?.value,
      color: fields?.color?.value,
      terms: !!fields?.terms?.value,
    };
  }, []);

  const { mutate, isLoading, isSuccess, isError } = useSubmit({
    data: formData,
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
      <Title>Confirmation</Title>
      <Label>First Name: {formData.name}</Label>
      <Label>E-mail: {formData.email}</Label>
      <Label>Password: {formData.password}</Label>
      <Label>Favorite Color: {formData.color}</Label>
      <Label>
        Terms and Conditions: {formData.terms ? "Agreed" : "Not Agreed"}
      </Label>
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
