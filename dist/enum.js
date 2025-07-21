"use strict";
var role;
(function (role) {
    role[role["User"] = 0] = "User";
    role[role["Admin"] = 1] = "Admin";
    role[role["SuperAdmin"] = 2] = "SuperAdmin";
})(role || (role = {}));
const myRole = role.Admin;
console.log(myRole);
console.log(role[1]);
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
console.log(Status.NotFound);
var UserRole;
(function (UserRole) {
    UserRole["User"] = "USER";
    UserRole["Admin"] = "ADMIN";
    UserRole["Guest"] = "GUEST";
})(UserRole || (UserRole = {}));
function checkRole(role) {
    if (role === UserRole.Admin) {
        console.log("Welcome Admin");
    }
}
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "INFO";
    LogLevel["Error"] = "ERROR";
    LogLevel["Debug"] = "DEBUG";
})(LogLevel || (LogLevel = {}));
const logbook = {
    message: 'Something Went Wrong',
    level: LogLevel.Error
};
console.log(logbook);
