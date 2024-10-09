exports.generatePassword = (fullName) => {
  // Convert the name to lowercase and remove spaces
  const lowerCaseName = fullName.replace(/\s+/g, "").toLowerCase();

  // Create a password by appending a fixed string
  const password = `${lowerCaseName}@123`;

  return password;
};
