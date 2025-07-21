// 1. Numeric Enum (default)
enum role {
  User,
  Admin,
  SuperAdmin,
}

const myRole: role = role.Admin;
console.log(myRole);
console.log(role[1]);

// 2. Custom Number Values
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(Status.NotFound)

// 3. String Enums (Preferred in modern TS)
enum UserRole {
  User = "USER",
  Admin = "ADMIN",
  Guest = "GUEST"
}

function checkRole(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Welcome Admin");
  }
}

//  Enums in Objects
enum LogLevel {
  Info = "INFO",
  Error = "ERROR",
  Debug = "DEBUG"
}

type logEntry = {
    message : string,
    level : LogLevel
}

const logbook : logEntry = {
    message : 'Something Went Wrong',
    level : LogLevel.Error
}
console.log(logbook)

// Enum vs Union Literal (alternative)
// Sometimes, literal unions are preferred:
type Role = "ADMIN" | "USER" | "GUEST";
// This also gives autocomplete and strict type-checking — a lighter alternative to enums.
