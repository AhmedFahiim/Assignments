let check = (zName, status, salary) => {
  return status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Available`;
};
console.log(check("Osama", "Available", 4000)); // My Salary Is 4000
console.log(check("Ahmed", "Not Available")); // Iam Not Avaialble
