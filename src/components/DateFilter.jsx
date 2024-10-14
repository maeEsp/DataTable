import React from 'react';

const DateFilter = ({ minDate, setMinDate, maxDate, setMaxDate }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
      <label style={{ marginRight: '10px' }}>Min Date:</label>
      <input
        type="date"
        value={minDate}
        onChange={(e) => setMinDate(e.target.value)}
        style={{
          marginRight: '20px',
          width: '150px', // Adjusted width to match proportionally with date inputs
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />

      <label style={{ marginRight: '10px' }}>Max Date:</label>
      <input
        type="date"
        value={maxDate}
        onChange={(e) => setMaxDate(e.target.value)}
        style={{
          width: '150px', // Adjusted width to match proportionally with date inputs
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </div>
  );
};

export default DateFilter;
