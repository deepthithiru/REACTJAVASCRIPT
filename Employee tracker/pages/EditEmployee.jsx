import { useState } from 'react';

function EditEmployee({ employees, setEmployees }) {

  const [form, setForm] = useState({
    name: '',
    department: 'Engineering',
    score: ''
  });

  const addEmployee = () => {
    if (!form.name || !form.score) return;

    const newEmp = {
      id: Date.now(),
      ...form,
      score: Number(form.score)
    };

    setEmployees(prev => [...prev, newEmp]);
    setForm({ name: '', department: 'Engineering', score: '' });
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(e => e.id !== id));
  };

  return (
    <div style={ {  padding:'40px',
  background:'#fef3c7',
  minHeight:'100vh',
  color:'#78350f'}}>
      <h1 style={{color:"black"}}>Edit Employee</h1>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value})}
      />

      <select
        value={form.department}
        onChange={(e) => setForm({...form, department: e.target.value})}
      >
        <option>Engineering</option>
        <option>Marketing</option>
        <option>Sales</option>
      </select>

      <input
        type="number"
        placeholder="Score"
        value={form.score}
        onChange={(e) => setForm({...form, score: e.target.value})}
      />

      <button onClick={addEmployee}>Add Employee</button>

      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.department} - {emp.score}%
            <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditEmployee; 
