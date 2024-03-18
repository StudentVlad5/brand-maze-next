"use server";
export async function createUser(prevState, formData) {
  // ...
  console.log("BLA_BLA");
  return res.status(200).json({ message: "Please enter a valid email" });
}
