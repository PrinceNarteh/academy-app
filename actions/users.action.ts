"use servicer";

export async function register(formData: FormData) {
  const data = Object.fromEntries(formData);
  console.log(data);
}
