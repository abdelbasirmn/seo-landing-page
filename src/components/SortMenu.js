import React from 'react';

const SortMenu = ({ onSortChange }) => {
  return (
    <div className="sort-menu">
      <button onClick={() => onSortChange('asc')}>Trier par titre (A-Z)</button>
      <button onClick={() => onSortChange('desc')}>Trier par titre (Z-A)</button>
    </div>
  );
};

export default SortMenu;
