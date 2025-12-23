import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("info");

  const handleReset = async () => {
    if (!newPassword || !confirmPassword) {
      setMessage("⚠️ Both fields are required.");
      setVariant("warning");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
      setVariant("danger");
      return;
    }

    try {
      const res = await axios.post(`https://api.avitrispices.in/api/customers/reset-password/${token}`, {
        newPassword,
        confirmPassword,
      });
      setVariant("success");
      setMessage(res.data.message);
      setTimeout(() => {
        window.location.href = "https://avitrispices.in/login"; 
      }, 5173);
    } catch (err) {
      setVariant("danger");
      setMessage(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <Container style={{ maxWidth: "500px", marginTop: "100px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Reset Your Password</h2>

      {message && <Alert variant={variant}>{message}</Alert>}

      <Form>
        <Form.Group controlId="newPassword" className="mb-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="confirmPassword" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleReset} className="w-100">
          Reset Password
        </Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;
