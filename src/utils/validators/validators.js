export const required = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength}`;
  return undefined;
};

// export const minLength5 = (value) => {
//   if (value && value.length > 30) return "Max length is 30";
//   return undefined;
// };
