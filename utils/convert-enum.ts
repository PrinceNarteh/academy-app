import { Role } from "@prisma/client";

export function roleStringToEnum(userRole: string): Role {
  let role: Role = Role.User;
  switch (userRole) {
    case "User":
      role = Role.User;
      break;
    case "Admin":
      role = Role.Admin;
      break;
    case "Instructor":
      role = Role.Instructor;
      break;
  }
  return role;
}

export function roleEnumToString(userRole: Role): string {
  let role: string = "";
  switch (userRole) {
    case Role.User:
      role = "User";
      break;
    case Role.Admin:
      role = "Admin";
      break;
    case Role.Instructor:
      role = "Instructor";
      break;
  }
  return role;
}
