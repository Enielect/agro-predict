"use server";
import { LoginSchema, SignUpSchema } from "@/lib/definitions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

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

  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword(
    validatedFields.data
  );

  if(error) console.log('error from supabase', error);

  if (error) {
    // redirect("/error");
    console.log("there was an issue logging in user");
    console.error("errror", error);
  }

  revalidatePath("/", "layout");
  redirect("/");

  // console.log("Email", email);
}

export async function signUpAction(prev: any, formData: FormData) {
  //validate form firld]
  const validatedFields = SignUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    first_name: formData.get("first-name"),
    last_name: formData.get("last-name"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error?.flatten().fieldErrors };
  }
  const supabase = createClient();
  const { email, password, first_name, last_name } = validatedFields.data;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name,
        last_name,
      },
    },
  }); //You can assign metadata to users on sign up:

  //retrieving meta_data:
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let metadata = user?.user_metadata;

  console.log("user", metadata);
  if (error) {
    console.error("There was an issue signing user up");
    console.error(error)
  }

  revalidatePath("/", "layout");
  redirect("/");
}
