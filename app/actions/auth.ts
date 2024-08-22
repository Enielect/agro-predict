"use server";
import { LoginSchema, SignUpSchema } from "@/lib/definitions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginAction(prev: any, formData: FormData) {
  console.log("LoginAction", formData);
  //validate form
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }
  console.log("run boundary");

  const { email, password } = validatedFields.data;
  console.log("Email", email);
}

export async function signUpAction(prev: any, formData: FormData) {
  //validate form firld]
  const validatedFields = SignUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    first_name: formData.get("first-name"),
    last_name: formData.get("last-name")
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error?.flatten().fieldErrors };
  }
}
