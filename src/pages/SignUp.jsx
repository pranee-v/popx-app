import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";

/**
 * SignUp
 * Account creation screen with full name, phone, email, password,
 * company name, and an "Are you an Agency?" radio choice.
 */
export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const requiredFilled =
    form.fullName.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.email.trim() !== "" &&
    form.password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!requiredFilled) return;
    navigate("/account", { state: { name: form.fullName, email: form.email } });
  };

  return (
    <div className="auth-screen">
      <h1 className="auth-screen__title">
        Create your
        <br />
        PopX account
      </h1>

      <form onSubmit={handleSubmit} noValidate>
        <FormField
          id="fullName"
          name="fullName"
          label="Full Name"
          required
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={handleChange}
        />
        <FormField
          id="phone"
          name="phone"
          label="Phone number"
          required
          type="tel"
          placeholder="Marry Doe"
          value={form.phone}
          onChange={handleChange}
        />
        <FormField
          id="email"
          name="email"
          label="Email address"
          required
          type="email"
          placeholder="Marry Doe"
          value={form.email}
          onChange={handleChange}
        />
        <FormField
          id="password"
          name="password"
          label="Password"
          required
          type="password"
          placeholder="Marry Doe"
          value={form.password}
          onChange={handleChange}
        />
        <FormField
          id="companyName"
          name="companyName"
          label="Company name"
          placeholder="Marry Doe"
          value={form.companyName}
          onChange={handleChange}
        />

        <fieldset className="agency-field">
          <legend className="agency-field__legend">
            Are you an Agency?<span className="form-field__asterisk">*</span>
          </legend>
          <div className="radio-row">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className={`btn ${requiredFilled ? "btn-primary" : "btn-disabled"}`}
          disabled={!requiredFilled}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
