import React from "react";
import { Slider } from "@mui/material";

function valuetext(value) {
  return value;
}
const Filter = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div class="wrapper">
      <header>
        <h2>Filters</h2>
      </header>
      <div className="categories">
        <p>Categories</p>
        <div>
          <span>CASUAL</span>
          <input
            type="checkbox"
            className="form-check-input"
            style={{ backgroundColor: "none" }}
            name="casual"
          />
        </div>
        <div>
          <span>ETHNIC</span>
          <input type="checkbox" className="form-check-input" name="ethnic" />
        </div>
        <div>
          <span>SPORTS</span>
          <input type="checkbox" className="form-check-input" name="active" />
        </div>
        <div>
          <span>ACTIVE WEAR</span>
          <input type="checkbox" className="form-check-input" name="sports" />
        </div>
        <div>
          <span>WESTERN</span>
          <input type="checkbox" className="form-check-input" name="western" />
        </div>
        <div>
          <span>KIDS</span>
          <input type="checkbox" className="form-check-input" name="kids" />
        </div>
      </div>
      <div className="price-container">
        <p>Price</p>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>
    </div>
  );
};

export default Filter;
