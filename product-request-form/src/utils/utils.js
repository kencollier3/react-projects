import {
  filter, keyBy, map, mapValues, sum,
} from 'lodash';

// args of method should be the vars of the method I don't have access to
/**
 * @description use method with form values and schema to get total points
 * @param fields {Object.<string, any>} form input json data blob
 * @param formValueMap {Object.<string, string | number>} state object in form component
 */
export const getTotalPoints = (fields, formValueMap) => {
  const priceFields = filter(fields, 'price');
  // keyBy converts array into object where key equals a fieldName (from priceFields)
  const priceFieldMap = keyBy(priceFields, 'name');
  // priceMap takes formfields and takes only objects with the property of price:
  const priceMap = mapValues(priceFieldMap, 'price');

  // changed value of every item in the object to be the price of the product
  const totalPerProduct = map(priceMap, (value, fieldName) => {
    if (formValueMap[fieldName]) {
      return formValueMap[fieldName] * value;
    }
    return null;
  });
  return sum(totalPerProduct) || 0;
};

export default getTotalPoints;
