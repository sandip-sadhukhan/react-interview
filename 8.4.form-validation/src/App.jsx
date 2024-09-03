import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = function () {
    var newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      // format: sandip@gmail.com
      // format: [string]@[string].[string]
      const emailRegex = /^\S+@\S+\.\S+$/;

      if (!formData.email.match(emailRegex)) {
        newErrors.email = "Invalid email";
      }
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else {
      if (formData.password.length < 8) {
        newErrors.password = "Password should be at least 8 characters long";
      }
      // Password is valid or not.
    }

    setErrors(newErrors);
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    validateForm();
  };

  const handleChange = function (e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
