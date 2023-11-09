import React, { useEffect, useState } from "react";

const DropDown = ({ id }) => {
  console.log(id);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const newSelectedOption = event.target.value;
    localStorage.setItem(`selectedOption-${id}`, newSelectedOption);
    setSelectedOption(newSelectedOption);
    console.log(newSelectedOption);
  };

  
  useEffect(() => {
    const storedSelectedOption = localStorage.getItem(`selectedOption-${id}`);
    if (storedSelectedOption) {
      setSelectedOption(storedSelectedOption);
    }
  }, [id]);

  return (
    <div>
      <div>
        <label htmlFor="statusSelect">Service Status : </label>
        <select
          id="statusSelect"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default DropDown;
