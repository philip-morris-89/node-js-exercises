import session from "express-session";
import config from "../../config";

export function initSessionMiddleware() {
  return session({
    //@ts-ignore
    secret: "af0b573c291824790e1ab185c891bca2f4af6bf339b673cdb9b2e7ca306a07b9",
    resave: false,
    saveUninitialized: false,
  });
}
