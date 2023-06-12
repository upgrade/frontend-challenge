import React, { useEffect, useMemo } from "react";
import { Title } from "../components/Title";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../hooks/useFormContext";
import { isEmailValid } from "../utils/validators";

export const HomeRoute = () => {
  const navigate = useNavigate();
  const { fields, initializeFields, updateField } = useFormContext();

  const isInvalid = useMemo(
    () =>
      fields?.firstName?.isInvalid ||
      fields?.email?.isInvalid ||
      fields?.password?.isInvalid,
    [fields]
  );

  useEffect(() => {
    initializeFields({
      firstName: {
        value: "",
        isInvalid: true,
      },
      email: {
        value: "",
        isInvalid: true,
      },
      password: {
        value: "",
        isInvalid: true,
      },
    });
  }, []);

  return (
    <>
      <Title>Sign-up</Title>
      <TextInput
        placeholder="First Name"
        onChange={(value: string) =>
          updateField?.("firstName", {
            isInvalid: value.length === 0,
            value,
          })
        }
      />
      <TextInput
        placeholder="E-Mail"
        onChange={(value: string) =>
          updateField?.("email", {
            isInvalid: !isEmailValid(value),
            value,
          })
        }
      />
      <TextInput
        placeholder="password"
        onChange={(value: string) =>
          updateField?.("password", { isInvalid: value.length === 0, value })
        }
      />
      <Button
        onClick={() => {
          navigate("/more-info");
        }}
        disabled={isInvalid}
      >
        Next
      </Button>
    </>
  );
};
