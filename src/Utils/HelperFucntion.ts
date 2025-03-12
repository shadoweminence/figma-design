export const removeWhiteSpace = (str: string) => {
  return str.replace(/\s+/g, "");
};

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(
    /(\+\d{2})\((\d)\)(\d+)/,
    (_, countryCode, zero, num) =>
      `${countryCode} (${zero}) ${num.replace(/\d{2}(?=\d)/g, "$& ")}`
  );
};

export const makeUpperCase = (str: string) => {
  return str.toUpperCase();
};
