import PasswordValidator from "password-validator";

export function isPasswordValid(password: string) {
  const passwordRequirements = new PasswordValidator();
  passwordRequirements.is().min(5);

  if (!passwordRequirements.validate(password)) {
    return false;
  }
  return true;
}