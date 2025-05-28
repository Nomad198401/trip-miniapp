import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';

function QrPage() {
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
      <h2>Ваш QR-код</h2>
      <QRCode value={JSON.stringify(data)} size={256} />
      <pre style={{ textAlign: 'left', margin: 'auto', maxWidth: 400 }}>
        {JSON.stringify(data, null, 2)}
      </pre>
      <button onClick={() => navigate('/dashboard')}>На главную</button>
    </div>
  );
}

export default QrPage;
