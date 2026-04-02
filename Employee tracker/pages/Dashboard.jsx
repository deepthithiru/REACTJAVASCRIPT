import { useState } from 'react';
import PerformanceCard from '../components/PerformanceCard';
import Charts from '../components/Charts';
import Filters from '../components/Filters';

function Dashboard({ employees, setEmployees }) {

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(e => e.id !== id));
  };

  const filtered = employees.filter(e =>
    (filter === 'All' || e.department === filter) &&
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  const avg = filtered.length
    ? (filtered.reduce((sum, emp) => sum + emp.score, 0) / filtered.length).toFixed(1)
    : 0;

  const top = filtered.length
    ? Math.max(...filtered.map(e => e.score))
    : 0;

  return (
    <div style={{
      padding:'40px',
      background:'linear-gradient(to right, #dbeafe, #bfdbfe)',
      minHeight:'100vh'
    }}>

      <h1 style={{marginBottom:'20px', color:"black"}}>Employee Dashboard</h1>

      {/* 🔍 Search Box */}
      <input
        placeholder="Search employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
           padding:'20px',
  background:'linear-gradient(to right, #dbeafe, #bfdbfe)',
  minHeight:'5vh',
  color:'#111827'
        }}
      />

      {/* 🎯 Filter */}
      <Filters filter={filter} setFilter={setFilter} />

      {/* 📊 Cards */}
      <div style={{
        display:'flex',
        gap:'20px',
        margin:'20px 0',
        
      }}>
        <PerformanceCard title="Total Employees" value={filtered.length} />
        <PerformanceCard title="Average Score" value={avg + '%'} />
        <PerformanceCard title="Top Performer" value={top + '%'} />
      </div>

      {/* 📋 Employee List */}
      {filtered.length === 0 ? (
        <p style={{marginTop:'20px'}}>No employees found 😢</p>
      ) : (
        <ul>
          {filtered.map(emp => (
            <li key={emp.id} style={{margin:'10px 0'}}>
              {emp.name} ({emp.department}) - {emp.score}%
              <button
                onClick={() => deleteEmployee(emp.id)}
                style={{
                  marginLeft:'10px',
                  background:'red',
                  color:'white',
                  border:'none',
                  padding:'5px 10px',
                  borderRadius:'5px'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* 📊 Chart */}
      {filtered.length > 0 && <Charts data={filtered} />}

    </div>
  );
}

export default Dashboard;
