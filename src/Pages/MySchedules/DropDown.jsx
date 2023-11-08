import React, { useState } from "react";

const DropDown = () => {

  
  const [selectedOption, setSelectedOption] = useState('Pending');


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    // console.log(selectedOption)
  };

  return (
    <div>
      <div>
      <label>Status : </label>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
    </div>
  );
};

export default DropDown;
