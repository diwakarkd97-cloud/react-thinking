import React from 'react'

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <form action="">
      <input 
        type="text" 
        onChange={(e) => onFilterTextChange(e.target.value)}
        value={filterText} 
        placeholder='Search...' 
        className='search-bar' 
      />
      <div>
        <input 
          type="checkbox" 
          id='checkBox' 
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)} 
        />
        <label htmlFor="checkBox">Only show products in stock</label>
      </div>
    </form>
  )
}

export default SearchBar
