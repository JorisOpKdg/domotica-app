import React from "react";

const FormElement = ({ title, changeHandler, optionValues, value, type }) => {
  return (
    <div className="form-group col-md-4 pr-3">
      <label className="mr-3 " htmlFor="start">
        {title}
      </label>
      <select
        className="form-control mr-5"
        id={type}
        name={type}
        onChange={changeHandler}
        value={value}
      >
        {optionValues &&
          optionValues.map((value) => <option key={value}>{value}</option>)}
      </select>
    </div>
  );
};

export default FormElement;
