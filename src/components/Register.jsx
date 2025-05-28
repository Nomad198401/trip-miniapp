import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === form.email)) {
      alert('Пользователь уже существует');
      return;
    }
    users.push(form);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br/>
      <input name="password" type="password" placeholder="Пароль" value={form.password} onChange={handleChange} required /><br/>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default Register;
