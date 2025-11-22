import * as yup from "yup";

export const loginSchema = yup.object({
  login_email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  login_password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required")
    .matches(/\d/, "Password must have one digit")
    .matches(/[A-Z]/, "Password must have one capital letter")
    .matches(/[a-z]/, "Password must have one lowercase letter")
    .matches(
      /^(?=.*[~`!@#$%^&*()_\-+=\[\]{};:'"\\|,.<>/?]).+$/,
      "Password must have one special character"
    ),
});

export type LoginSchemaType = yup.InferType<typeof loginSchema>;

export const signupSchema = yup.object({
  signup_username: yup
    .string()
    .min(3, "Username must be 3 character long.")
    .required("Username is required")
    .matches(/^[a-zA-Z]+$/, "Username must have alphabates only."),
  signup_dob: yup
    .date()
    .required("Birthdate is required")
    .max(
      new Date(Date.now() - 14 * 365 * 24 * 60 * 60 * 1000),
      "User must be 14 year old."
    )
    .min(
      new Date("1900-01-01"),
      "Birth date cannot be in the before 1900-01-01"
    ),
  signup_gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Gender must be either Male or Female"),
  signup_email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  signup_password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required")
    .matches(/\d/, "Password must have one digit")
    .matches(/[A-Z]/, "Password must have one capital letter")
    .matches(/[a-z]/, "Password must have one lowercase letter")
    .matches(
      /^(?=.*[~`!@#$%^&*()_\-+=\[\]{};:'"\\|,.<>/?]).+$/,
      "Password must have one special character"
    ),
  signup_cpassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("signup_password")], "Passwords must match"),
});

export type SignupSchemaType = yup.InferType<typeof signupSchema>;
