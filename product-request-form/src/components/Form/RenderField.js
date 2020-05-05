import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './fields/Dropdown';
import Input from './fields/Input';
import NumberInput from './fields/NumberInput';

const RenderField = (props) => {
  if (props.fieldDetails.type === 'dropdown') {
    return (
      <Dropdown
        label={props.fieldDetails.label}
        name={props.fieldDetails.name}
        subtitle={props.fieldDetails.subtitle}
        items={props.fieldDetails.items}
        type={props.fieldDetails.type}
        onChangeCallback={props.onChangeCallback}
      />
    );
  } if (props.fieldDetails.type === 'number') {
    return (
      <NumberInput
        label={props.fieldDetails.label}
        name={props.fieldDetails.name}
        subtitle={props.fieldDetails.subtitle}
        price={props.fieldDetails.price}
        onChangeCallback={props.onChangeCallback}
      />
    );
  }
  return (
    <Input
      label={props.fieldDetails.label}
      type={props.fieldDetails.type}
      name={props.fieldDetails.name}
      onChangeCallback={props.onChangeCallback}
    />
  );
};

RenderField.propTypes = {
  onChangeCallback: PropTypes.func.isRequired,
  fieldDetails: PropTypes.oneOfType([
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      subtitle: PropTypes.string,
      price: PropTypes.number.isRequired,
    }),
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      subtitle: PropTypes.string,
      items: PropTypes.array,
    }),
  ]).isRequired,
};

export default RenderField;
