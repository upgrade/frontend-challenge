import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { FieldErrorsImpl } from "react-hook-form";
import { SignUpStartInputs } from "src/views/SignUpStart";

interface PasswordValidationListItemProps {
  isError: boolean;
  children: React.ReactNode;
}

const PasswordValidationListItem: React.FC<PasswordValidationListItemProps> = ({
  isError,
  children,
}) => {
  return (
    <ListItem color={isError ? "red.500" : "green.700"} display="flex">
      {isError ? <ListIcon as={CloseIcon} /> : <ListIcon as={CheckIcon} />}
      {children}
    </ListItem>
  );
};

interface PasswordValidationListProps {
  errors: FieldErrorsImpl<SignUpStartInputs>;
}

const PasswordValidationList: React.FC<PasswordValidationListProps> = ({
  errors,
}) => {
  return (
    <Card width="100%">
      <CardHeader>
        <Text fontWeight={600} as="label">Passwords must:</Text>
      </CardHeader>
      <CardBody pt={0}>
        <List spacing={0.5}>
          <PasswordValidationListItem
            isError={
              !!(
                errors.password?.types?.minLength ||
                errors.password?.types?.required
              )
            }
          >
            Be at least 8 characters long
          </PasswordValidationListItem>
          <PasswordValidationListItem
            isError={!!errors.password?.types?.passwordUppercase}
          >
            Contain a uppercase letter
          </PasswordValidationListItem>
          <PasswordValidationListItem
            isError={!!errors.password?.types?.passwordLowercase}
          >
            Contain a lowercase letter
          </PasswordValidationListItem>
          <PasswordValidationListItem
            isError={!!errors.password?.types?.passwordNumber}
          >
            Contain a number
          </PasswordValidationListItem>
          <PasswordValidationListItem
            isError={!!errors.password?.types?.passwordSpecial}
          >
            Contain a special character
          </PasswordValidationListItem>
        </List>
      </CardBody>
    </Card>
  );
};

export default PasswordValidationList;
