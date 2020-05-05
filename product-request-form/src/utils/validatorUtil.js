export const validator = (value, type, dropdownItems) => {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const letterRegex = /^[A-Za-z]+$/;
  const dateRegex = /^(20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
  const departmentSet = new Set(dropdownItems);

  if (type === 'text') {
    if (!value.match(letterRegex)) {
      return 'Please enter a valid name.';
    }
  }
  if (type === 'email') {
    if (!value.match(emailRegex)) {
      return 'Please use a valid email.';
    }
  }
  if (type === 'date') {
    if (!value.match(dateRegex) || value === '') {
      return 'Please use a valid date.';
    }
  }
  if (type === 'dropdown') {
    if (!departmentSet.has(value)) {
      return 'Please select a department.';
    }
  }
  return null;
};

export default validator;
