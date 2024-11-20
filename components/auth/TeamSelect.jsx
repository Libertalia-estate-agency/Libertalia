import React from 'react';
import Select from 'react-select';

const teams = [
    { value: 'admin', label: 'Midrand Branch Team' },
    
  ];

const TeamSelect = ({ onChange, selectedOption }) => {
  return (
    <Select
      options={teams}
      onChange={onChange}
      value={selectedOption}
      placeholder="Midrand Branch Team"
      className="text-base bg-amber-500 text-gray-900"
      
    />
  );
};

export default TeamSelect;
