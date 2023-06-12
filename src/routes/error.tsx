import React from "react";
import { Title } from "../components/Title";
import { Icon } from "../components/Icon";
import { Subtitle } from "../components/Subtitle";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const ErrorRoute = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title>Error!</Title>
      <Icon src="fail.png" size={256} />
      <Subtitle>Uh oh, something went wrong. Please try again later.</Subtitle>
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
