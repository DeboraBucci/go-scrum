export const nameInitials = (fullName) => {
  const initialsArr = fullName.split(" ").map((n) => n[0]);
  return initialsArr[0] + initialsArr[initialsArr.length - 1];
};
