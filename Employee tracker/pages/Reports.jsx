import { useState } from 'react';

function Reports({ employees }) {

  const [search, setSearch] = useState('');

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Export CSV
  const exportCSV = () => {
    const csv = [
      'Name,Department,Score',
      ...filtered.map(e => `${e.name},${e.department},${e.score}`)
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'employee-report.csv';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
  padding:'40px',
  background:'#dcfce7',
  minHeight:'100vh',
  color:'#064e3b' 
}}>

      <h1 style={{color:"black"}}>Reports</h1>

      <input
        placeholder="Search employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={exportCSV} style={{marginLeft:'10px'}}>
        Export CSV
      </button>

      <table style={{width:'100%', marginTop:'20px'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.score}%</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
 
}

export default Reports;   
