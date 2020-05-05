import React from 'react';
import PropTypes from 'prop-types';
import { validator } from '../../../utils/validatorUtil';
import './fields.scss';

class Input extends React.Component {
  state = {
    value: '',
    error: '',
  };

  // fires when keydown - keydown value equals e.target.value
  onChange = (e) => {
    const { name, onChangeCallback } = this.props;
    const error = validator(e.target.value, this.props.type);
    this.setState({
      value: e.target.value,
      error,
    }, () => {
      onChangeCallback(name, this.state.value, error);
    });
  };

  render() {
    const { name, label, type } = this.props;
    const id = name;
    return (
      <>
        <label htmlFor={id} data-testid={'label-test'}>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          value={this.state.value}
          onChange={this.onChange}
          onBlur={this.onChange}
          data-testid={'input-test'}
        />
        {this.state.error !== '' && (
          <span className="error-message">
            <br />
            {this.state.error}
          </span>
        )}
      </>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
};

export default Input;
