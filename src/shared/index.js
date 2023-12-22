import { object, string } from "yup";

export function passwordMatch(arg) {
  const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm;
  return pattern.test(arg);
}

export const loginSchema = object({
  userName: string().email().required(),
  password: string()
    .required("Password is required")
    .min(8)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm,
      "Password doesn't meet requirement"
    ),
});
