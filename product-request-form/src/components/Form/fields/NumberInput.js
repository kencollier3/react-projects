import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  state = {
    value: 0,
    error: '',
  };

  increment = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }), this.onChange);
  };

  decrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }), this.onChange);
  };

  onChange = () => {
    const { name, onChangeCallback } = this.props;
    onChangeCallback(
      name,
      this.state.value,
      this.state.error,
    );
  };


  render() {
    const { label, name, subtitle } = this.props;
    return (
      <>
        <label htmlFor={name}>
          {label}
        </label>
        {!!subtitle && <span className="subtitle">{subtitle}</span>}
        <br />
        <button
          className="decrement-button"
          onClick={this.decrement}
          type="button"
          data-testid={'decrement-button-test'}
          disabled={this.state.value === 0}
        >
          -
        </button>
        <span
          key={name}
          className="number-input"
        >
          {this.state.value}
        </span>
        <button
          className="increment-button"
          onClick={this.increment}
          type="button"
        >
          +
        </button>
      </>
    );
  }
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChangeCallback: PropTypes.func,
};

NumberInput.defaultProps = {
  name: '',
  onChangeCallback: () => {},
};

export default NumberInput;
