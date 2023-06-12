import React from "react";
import { Title } from "../components/Title";
import { Dropbox } from "../components/Dropbox";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const MoreInfoRoute = () => {
  const navigate = useNavigate();
  const colors = ["black", "white"]; // TODO: pull from API

  return (
    <>
      <Title>Additional Info</Title>
      <Dropbox name="colors" id="colors" options={colors} />
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
      >
        Next
      </Button>
    </>
  );
};
