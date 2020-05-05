import React from 'react';
import { keyBy, mapValues } from 'lodash';
import { formFields } from './data/formInputData.json';
import './form.css';
import RenderField from './RenderField';
import { getTotalPoints } from '../../utils/utils';

class Form extends React.Component {
  state = {
    // get form fields into shape of {firstName: ''}
    // where the value is '' for input types that aren't number and 0 for nums
    // the state object represents the form's schema
    // takes value of name json val and make it the key of the new object upon submit
    ...mapValues(keyBy(formFields, 'name'), ({ type }) => type === 'number' ? 0 : ''),
    isDirty: false,
    error: '',
  };

  onSubmit = (TOTAL_POINTS, e) => {
    e.preventDefault();
    if (this.state.error !== '' && this.state.isDirty) {
      console.log(JSON.stringify(this.state, null, 2), `Total Points: ${TOTAL_POINTS}`);
    } else {
      console.log('ERROR ON SUBMIT');
    }
  };

  onChange = (fieldName, fieldValue, error) => {
    this.setState({
      [fieldName]: fieldValue,
      isDirty: true,
      error,
    });
  };

  render() {
    const TOTAL_POINTS = getTotalPoints(formFields, this.state);
    return (
      <div className="form-wrapper">
        <h1>Xyngular Product Request Form</h1>
        <h3>Product Request Rules</h3>
        <ul>
          <li>
            Receipt of products each month is dependent on current inventory and
            is not guaranteed to be available.
          </li>
          <li>Employees may request up to 300 points per calendar month.</li>
          <li>Employees may receive a full Ultimate Kit every 6 months</li>
          <li>
            The employee product must be used only by Xyngular employees or their
            immediate household and cannot be used for resale.
          </li>
        </ul>
        <hr />
        <form action="">
          <div id="runningTotalBox">
            <h4>Total Points:</h4>
            <h4>{`${TOTAL_POINTS}`}</h4>
            <button
              className="submit-button"
              type="submit"
              disabled={TOTAL_POINTS === 0}
              onClick={(e) => this.onSubmit(TOTAL_POINTS, e)}
            >
              SUBMIT
            </button>
          </div>
          {formFields.map((fields, index) => (
            <RenderField
              key={index}
              fieldDetails={fields}
              onChangeCallback={
                (fieldName, fieldValue, error) => {
                  this.onChange(fieldName, fieldValue, error);
                }
              }
            />
          ))}
        </form>
      </div>
    );
  }
}

export default Form;
