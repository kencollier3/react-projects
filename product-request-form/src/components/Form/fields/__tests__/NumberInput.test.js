import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NumberInput from '../NumberInput';
import { getByTestId } from '@testing-library/dom';

const requiredProps = {
  label: 'button',
  price: 0,
  subtitle: 'text',
};

describe('NumberInput', () => {
  it('should have the buttons disabled if the item count is 0', () => {
    const { container } = render(<NumberInput {...requiredProps} />);
    expect(getByTestId(container,'decrement-button-test')).toHaveAttribute('disabled');
  });
});
