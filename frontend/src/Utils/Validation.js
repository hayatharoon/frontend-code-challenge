export const ValidationRules = {
  required: { required: true, message: 'This field is required' },
  number: { pattern: /^[0-9]+$/, message: 'Enter numeric value only!' },
  website: {
    pattern:
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
    message: 'This url is Invalid!',
  },
};
