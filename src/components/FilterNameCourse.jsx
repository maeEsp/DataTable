import React from 'react';

const FilterNameCourse = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (

    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
      <span style={{ marginRight: '10px', fontSize: '16px' }}>Search:</span>
      
      <input
        type="text"
        placeholder="Search by Last Name, First Name, or Course"
        value={searchTerm}
        onChange={handleChange}
        style={{
            width: '270px', 
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
      />
    </div>
  );
};

export default FilterNameCourse;

