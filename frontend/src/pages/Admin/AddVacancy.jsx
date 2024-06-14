import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddVacancy = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    requirments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.title.trim()) errors.title = "Title is required";
    if (!data.category.trim()) errors.category = "Category is required";
    if (!data.description.trim()) errors.description = "Description is required";
    if (!data.requirments.trim()) errors.requirments = "Requirements are required";
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorsObj = validateForm(formData);
    if (Object.keys(errorsObj).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:8000/api/vacancies", formData);
        console.log(response.data);
        toast.success('Vacancy added successfully!');
        setTimeout(() => {
          navigate("/admin");
        }, 1000);
      } catch (error) {
        console.error("Error adding vacancy:", error.response?.data || error.message);
        toast.error(`Error adding vacancy: ${error.response?.data?.message || error.message}`);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(errorsObj);
    }
  };

  return (
    <div className="container mt-5">
      <div style={{ marginBottom: '20px' }}>
        <FontAwesomeIcon icon={faArrowLeft} className="back-icon" onClick={() => navigate('/admin')} style={{ cursor: 'pointer' }} />
      </div>
      <h2 style={{ textAlign: 'center' }}>Add New Vacancy</h2>
      <Form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Form.Group controlId="title" style={{ marginBottom: '20px' }}>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            isInvalid={!!errors.title}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="category" style={{ marginBottom: '20px' }}>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            isInvalid={!!errors.category}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="description" style={{ marginBottom: '20px' }}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            isInvalid={!!errors.description}
            required
            rows={4}
          />
          <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="requirments" style={{ marginBottom: '20px' }}>
          <Form.Label>Requirements</Form.Label>
          <Form.Control
            as="textarea"
            name="requirments"
            value={formData.requirments}
            onChange={handleChange}
            isInvalid={!!errors.requirments}
            required
            rows={4}
          />
          <Form.Control.Feedback type="invalid">{errors.requirments}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} disabled={loading}>
          {loading ? 'Adding...' : 'Add Vacancy'}
        </Button>
      </Form><br/><br/>
    </div>
  );
};

export default AddVacancy;
