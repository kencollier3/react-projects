import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../Input';
import { getByTestId } from '@testing-library/dom';

const requiredProps = {
  label: 'First Name',
  type: 'text',
  name: 'text',
  onChange: jest.fn(),
};

describe('Input', () => {

  it('renders with required props passed', () => {
    const { container } = render(<Input {...requiredProps} />);
    expect(getByTestId(container,'label-test')).not.toBeNull();
    expect(getByTestId(container,'input-test')).not.toBeNull();
  });

  it('handles onChange user input', () => {
    const onChange = jest.fn();
    const { queryByLabelText } = render(<Input {...requiredProps} onChange={onChange} />);
    expect(onChange).not.toHaveBeenCalled();
    const actualInput = queryByLabelText(requiredProps.label);
    fireEvent.change(actualInput, { target: { value: 'Charmander' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
