function PerformanceCard({ title, value }) {
  return (
    <div style={{
      background: '#ffffff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      minWidth: '150px'
    }}>
      <p style={{ color: '#374151', fontSize: '14px' }}>
        {title}
      </p>

      <h2 style={{
        fontSize: '26px',
        fontWeight: 'bold',
        color: '#111827'  
      }}>
        {value}
      </h2>
    </div>
  );
}

export default PerformanceCard; 
