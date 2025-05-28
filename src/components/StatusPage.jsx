import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function StatusPage() {
  const { applicationId } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const applications = JSON.parse(localStorage.getItem('applications') || '[]');
    const app = applications.find(a => a.id === applicationId);
    setData(app);
  }, [applicationId]);

  if (!data) return <div>Загрузка...</div>;

  return (
    <div>
      <h2>Статус заявки: {data.status}</h2>
      <button onClick={() => navigate(`/qr/${applicationId}`)}>Посмотреть QR-код</button>
      <pre style={{ textAlign: 'left', margin: 'auto', maxWidth: 400 }}>
        {JSON.stringify(data, null, 2)}
      </pre>
      <button onClick={() => navigate('/dashboard')}>На главную</button>
    </div>
  );
}

export default StatusPage;
