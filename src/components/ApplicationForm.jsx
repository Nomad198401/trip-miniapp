import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ApplicationForm() {
  const [form, setForm] = useState({
    fullName: '',
    passport: '',
    dateOfBirth: '',
    nationality: 'Kazakhstan',
    phone: '',
    email: localStorage.getItem('email') || ''
  });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const applications = JSON.parse(localStorage.getItem('applications') || '[]');
    const id = Math.random().toString(36).slice(2);
    const status = 'pending';
    applications.push({ ...form, id, status });
    localStorage.setItem('applications', JSON.stringify(applications));
    navigate(`/status/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Анкета для въезда в Казахстан</h2>
      <input name="fullName" placeholder="ФИО" value={form.fullName} onChange={handleChange} required /><br/>
      <input name="passport" placeholder="Паспорт" value={form.passport} onChange={handleChange} required /><br/>
      <input name="dateOfBirth" type="date" placeholder="Дата рождения" value={form.dateOfBirth} onChange={handleChange} required /><br/>
      <input name="nationality" placeholder="Гражданство" value={form.nationality} readOnly /><br/>
      <input name="phone" placeholder="Телефон" value={form.phone} onChange={handleChange} required /><br/>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default ApplicationForm;
