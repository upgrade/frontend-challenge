import React, { useEffect } from "react";
import { Title } from "../components/Title";
import { Dropbox } from "../components/Dropbox";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useColors } from "../hooks/api/useColors";
import { Label } from "../components/Label";
import { useFormContext } from "../hooks/useFormContext";

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
      {isLoading && <Label>Loading...</Label>}
      {colors && (
        <Dropbox
          name="colors"
          id="colors"
          options={colors}
          onChange={(value: string) => updateField?.("color", { value })}
        />
      )}
      <Checkbox
        options={[<>I agree to terms and conditions.</>]}
        onChange={(value: string) => updateField?.("terms", { value })}
      />
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
        disabled={isLoading || !fields.terms.value}
      >
        Next
      </Button>
    </>
  );
};
