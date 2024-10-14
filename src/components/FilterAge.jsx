import React from 'react';

const AgeFilter = ({ ageFilter, setAgeFilter }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
      <label style={{ marginRight: '10px' }}>Filter by Age:</label>
      <input
        type="number"
        value={ageFilter}
        onChange={(e) => setAgeFilter(e.target.value)}
        placeholder="Search by Age"
        style={{ 
          marginRight: '20px', 
          width: '100px', 
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </div>
  );
};

export default AgeFilter;
