import React, { useEffect } from "react";
import { Title } from "../components/Title";
import { Dropbox } from "../components/Dropbox";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useColors } from "../hooks/api/useColors";
import { Label } from "../components/Label";
import { useFormContext } from "../hooks/useFormContext";
import { Loading, Spacer } from "@nextui-org/react";

export const MoreInfoRoute = () => {
  const navigate = useNavigate();
  const { fields, initializeFields, updateField } = useFormContext();
  const { data: colors, isLoading } = useColors();

  useEffect(() => {
    initializeFields({
      color: {
        value: colors?.[0],
      },
      terms: {
        value: false,
      },
    });
  }, [colors]);

  return (
    <>
      <Title>Additional Info</Title>
      {isLoading && <Loading />}
      {colors && (
        <Dropbox
          initialValue={colors?.[0]}
          options={colors}
          onChange={(value: string) => updateField?.("color", { value })}
        />
      )}
      <Spacer y={0.5} />
      <Checkbox
        options={[<>I agree to terms and conditions.</>]}
        onChange={(value: string | boolean) =>
          updateField?.("terms", { value })
        }
      />
      <Spacer y={0.5} />
      <Button
        color="secondary"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
      <Spacer y={0.5} />
      <Button
        onClick={() => {
          navigate("/confirmation");
        }}
        disabled={isLoading || !fields.terms.value}
      >
        Next
      </Button>
    </>
  );
};
