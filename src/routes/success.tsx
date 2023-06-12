import React from "react";
import { Title } from "../components/Title";
import { Icon } from "../components/Icon";
import { Subtitle } from "../components/Subtitle";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const SuccessRoute = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title>Success!</Title>
      <center>
        <Icon src="success.png" alt="Success Image" size={256} />
        <Subtitle>You should receive a confirmation email soon.</Subtitle>
      </center>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Restart
      </Button>
    </>
  );
};
