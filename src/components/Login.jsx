import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === form.email && u.password === form.password);
    if (user) {
      localStorage.setItem('email', form.email);
      navigate('/dashboard');
    } else {
      alert('Ошибка входа');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Вход</h2>
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br/>
      <input name="password" type="password" placeholder="Пароль" value={form.password} onChange={handleChange} required /><br/>
      <button type="submit">Войти</button>
    </form>
  );
}

export default Login;
