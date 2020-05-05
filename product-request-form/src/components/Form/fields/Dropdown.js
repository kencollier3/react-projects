import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';
import classNames from 'classnames';
import { validator } from '../../../utils/validatorUtil';
import './fields.scss';
import { formFields } from '../data/formInputData.json';
import _ from 'lodash';

const departments = _.filter(formFields, { "label": "Department" })[0].items;

class Dropdown extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: '',
    error: '',
  };

  dropDown = () => {
    this.setState((prevState) => ({
      showItems: !prevState.showItems,
    }));
  };

  selectItem = (item) => {
    const { name, onChangeCallback } = this.props;
    const error = validator(item, this.props.type, departments);
    this.setState({
      selectedItem: item,
      showItems: false,
      error,
    }, () => {
      onChangeCallback({ [name]: item }, error);
    });
  };

  render() {
    const { label, name, subtitle } = this.props;
    const id = name;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        {!!subtitle && <span className="subtitle">{subtitle}</span>}
        <div className="dropdown-box">
          <div className="dropdown-container">
            <div className="selected-item" onClick={this.dropDown} onKeyDown={this.dropDown}>
              {this.state.selectedItem}
            </div>
            <div className="dropdown-arrow" onClick={this.dropDown} onKeyDown={this.dropDown}>
              <span className={`${this.state.showItems ? 'arrow-up' : 'arrow-down'}`} />
            </div>
            <div className={classNames('dropdown-items', { 'hidden': !this.state.showItems })}>
              {
                this.state.items.map((item) => (
                  <div
                    key={item}
                    onClick={() => this.selectItem(item)}
                    onKeyDown={() => this.selectItem(item)}
                  >
                    {item}
                  </div>
                ))
              }
            </div>
          </div>
        {this.state.error !== '' && (
          <span className="error-message">
            <br />
            {this.state.error}
          </span>
        )}
        </div>
      </div>
    );
  }
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  items: PropTypes.array,
  subtitle: PropTypes.string,
  onChangeCallback: PropTypes.func,
};

Dropdown.defaultProps = {
  onChangeCallback: () => {},
  items: '',
  subtitle: '',
};

export default Dropdown;
