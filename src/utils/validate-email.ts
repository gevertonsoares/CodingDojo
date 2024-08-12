import * as EmailValidator from "email-validator";

export function isEmailValid(email: string): boolean {
  
    if (!EmailValidator.validate(email)) {
        return false;
    }

    const atIndex = email.indexOf('@');
    if (atIndex < 3) {
        return false
    }

    const domains = ['gmail.com', 'hotmail.com', 'outlook.com']
    const emailDomain = email.split('@')[1]

    if(!domains.includes(emailDomain)) {
        return false
    }

  return true;
}