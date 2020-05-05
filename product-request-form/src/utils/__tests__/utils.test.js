import { getTotalPoints } from '..';
import { formFields } from '../../components/Form/data/formInputData.json';

describe('utils', () => {
  describe('getTotalPoints', () => {
    it('works', () => {
      const priceOfOneUnitOfAccelerate = formFields[6].price;
      const result = getTotalPoints(formFields, { apple: 3, accelerate: 1 });
      expect(result).toBe(priceOfOneUnitOfAccelerate);
    });

    it('works if products are all 0', () => {
      const result = getTotalPoints(formFields, { global: 0, accelerate: 0 });
      expect(result).toBe(0);
    });
  });
});
