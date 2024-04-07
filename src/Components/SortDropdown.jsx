import React from 'react';

const SortDropdown = ({ handleSort }) => {
  const handleChange = (e) => {
    handleSort(e.target.value);
  };

  return (
    <>
      <select onChange={handleChange}>
        <optgroup label="Sort by Name">
          <option value="name_ASC">A-Z</option>
          <option value="name_DESC">Z-A</option>
        </optgroup>
        <optgroup label="Sort by Group">
          <option value="group_ASC">A-Z</option>
          <option value="group_DESC">Z-A</option>
        </optgroup>
        <optgroup label="Sort by Weight">
          <option value="weight_ASC">Low to High</option>
          <option value="weight_DESC">High to Low</option>
        </optgroup>
      </select>
    </>
  );
};

export default SortDropdown;
