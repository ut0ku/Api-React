import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../LoginPage/LoginPage.scss';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    setLoading(true);
    try {
      await register(form.email, form.first_name, form.last_name, form.password);
      navigate('/');
    } catch (err) {
      const msg =
        err?.response?.data?.error || err?.message || 'Ошибка регистрации';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-card__title">Регистрация</h1>
        <p className="auth-card__subtitle">Магазин электроники</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-label">
            Имя
            <input
              className="auth-input"
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              required
              placeholder="Иван"
              autoComplete="given-name"
            />
          </label>

          <label className="auth-label">
            Фамилия
            <input
              className="auth-input"
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              required
              placeholder="Иванов"
              autoComplete="family-name"
            />
          </label>

          <label className="auth-label">
            Email
            <input
              className="auth-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="example@mail.com"
              autoComplete="email"
            />
          </label>

          <label className="auth-label">
            Пароль
            <input
              className="auth-input"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Придумайте пароль"
              autoComplete="new-password"
            />
          </label>

          <label className="auth-label">
            Подтвердите пароль
            <input
              className="auth-input"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Повторите пароль"
              autoComplete="new-password"
            />
          </label>

          <button className="auth-btn" type="submit" disabled={loading}>
            {loading ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
        </form>

        <p className="auth-footer">
          Уже есть аккаунт?{' '}
          <Link to="/login" className="auth-link">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
