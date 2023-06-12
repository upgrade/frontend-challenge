import React from "react";
import { Title } from "../components/Title";
import { Dropbox } from "../components/Dropbox";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useColors } from "../hooks/api/useColors";
import { Label } from "../components/Label";

export const MoreInfoRoute = () => {
  const navigate = useNavigate();
  const { data: colors, isLoading } = useColors();

  return (
    <>
      <Title>Additional Info</Title>
      {isLoading && <Label>Loading...</Label>}
      {colors && <Dropbox name="colors" id="colors" options={colors} />}
      <Checkbox options={[<>I agree to terms and conditions.</>]} />
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
      <Button
        onClick={() => {
          navigate("/confirmation");
        }}
        disabled={isLoading}
      >
        Next
      </Button>
    </>
  );
};
