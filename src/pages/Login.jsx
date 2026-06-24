import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";

/**
 * Login
 * Sign in screen. Login button enables once both fields are filled.
 */
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValid = form.email.trim() !== "" && form.password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    navigate("/account");
  };

  return (
    <div className="auth-screen">
      <h1 className="auth-screen__title">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="auth-screen__subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <FormField
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={handleChange}
        />
        <FormField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className={`btn ${isValid ? "btn-primary" : "btn-disabled"}`}
          disabled={!isValid}
        >
          Login
        </button>
      </form>
    </div>
  );
}
