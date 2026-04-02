function Filters({ filter, setFilter }) {
  return (
    
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      style={{
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #3b82f6',
        background: '#eff6ff',
        color: '#111827',   // ✅ DARK TEXT
        marginLeft: '10px'
      }}
    >
      <option value="All">All</option>
      <option value="Engineering">Engineering</option>
      <option value="Marketing">Marketing</option>
      <option value="Sales">Sales</option>
    </select>
  );


}

export default Filters;
