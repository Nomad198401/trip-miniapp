import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  if (!email) {
    navigate('/login');
    return null;
  }
  const apps = JSON.parse(localStorage.getItem('applications') || '[]').filter(a => a.email === email);

  return (
    <div>
      <h2>Добро пожаловать, {email}!</h2>
      <button onClick={() => navigate('/apply')}>Подать новую анкету</button>
      <br />
      <h3>Ваши заявки:</h3>
      <ul>
        {apps.map(a => (
          <li key={a.id}>
            {a.fullName} — <button onClick={() => navigate(`/status/${a.id}`)}>Статус</button>
          </li>
        ))}
      </ul>
      <button onClick={() => { localStorage.removeItem('email'); navigate('/login'); }}>Выйти</button>
    </div>
  );
}

export default Dashboard;
