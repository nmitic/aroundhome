import moment from "moment";

export const isValidIsoDate = (props, propName, componentName) => {
  const valid = moment(props[propName], moment.ISO_8601, true).isValid();

  if (!valid) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Date needs to be in ISO_8601 standard.'
    );
  }
};