const bcrypt = require("bcryptjs");

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};
