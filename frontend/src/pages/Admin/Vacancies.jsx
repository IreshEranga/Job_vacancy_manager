import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Table, Form, Modal } from "react-bootstrap";
import { IoMdAddCircleOutline, IoMdCreate, IoMdTrash } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import axios from "axios";


const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVacancies, setFilteredVacancies] = useState([]);
  const [editVacancy, setEditVacancy] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [vacancyToDelete, setVacancyToDelete] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    requirments: "",
  });

  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/vacancies");
      setVacancies(response.data);
      setFilteredVacancies(response.data);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCloseForm = () => {
    setEditVacancy(null);
    setFormData({
      title: "",
      category: "",
      description: "",
      requirments: "",
    });
    setErrors({});
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.title.trim()) errors.title = "Title is required";
    if (!data.category.trim()) errors.category = "Category is required";
    if (!data.description.trim()) errors.description = "Description is required";
    if (!data.requirments.trim()) errors.requirments = "Requirments are required";
    return errors;
  };

  const handleEdit = (vacancy) => {
    setEditVacancy(vacancy);
    setFormData({
      title: vacancy.title,
      category: vacancy.category,
      description: vacancy.description,
      requirments: vacancy.requirments,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorsObj = validateForm(formData);
    if (Object.keys(errorsObj).length === 0) {
      if (editVacancy) {
        try {
          const updatedVacancy = { ...editVacancy, ...formData };
          await axios.put(`http://localhost:8000/api/vacancies/${editVacancy._id}`, updatedVacancy);
          toast.success('Vacancy updated successfully!');
          setEditVacancy(null);
          fetchVacancies();
          handleCloseForm();
        } catch (error) {
          console.error("Error updating vacancy:", error);
          toast.error('Error updating vacancy!');
        }
      }
    } else {
      setErrors(errorsObj);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/vacancies/${id}`);
      fetchVacancies();
      toast.success('Vacancy deleted successfully!');
    } catch (error) {
      console.error("Error deleting vacancy:", error);
      toast.error('Error deleting vacancy!');
    }
  };

  const handleOpenConfirmationModal = (id) => {
    setVacancyToDelete(id);
    setShowConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
    setVacancyToDelete(null);
  };

  const handleConfirmDeletion = () => {
    handleDelete(vacancyToDelete);
    setShowConfirmationModal(false);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredData = vacancies.filter((vacancy) => {
      return (
        vacancy.title.toLowerCase().includes(query.toLowerCase()) ||
        vacancy.category.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredVacancies(filteredData);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-5" style={{ textAlign: "center" }}>Vacancies</h1>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Link to="/add-vacancy">
          <Button variant="primary" className="m-1">
            <IoMdAddCircleOutline className="mb-1" /> <span>Add Vacancy</span>
          </Button>
        </Link>
        <Form className="mb-1">
          <Form.Group controlId="searchQuery">
            <Form.Control
              type="text"
              placeholder="Search by Title or Category"
              value={searchQuery}
              onChange={handleSearch}
              style={{ width: "400px", border: '1px solid gray', padding: '20px', borderRadius: '30px', position: 'relative', marginLeft: '50px', zIndex: '1', height: '20px', marginRight: '0px' }}
            />
          </Form.Group>
        </Form>
      </div>
      <Table striped bordered hover className="mt-2">
        <thead>
          <tr align='center'>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Requirments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredVacancies.map((vacancy) => (
            <tr key={vacancy._id}>
              <td>{vacancy.title}</td>
              <td>{vacancy.category}</td>
              <td>{vacancy.description}</td>
              <td>{vacancy.requirments}</td>
              <td style={{ display: 'flex' }}>
                <Button variant="info" className="mr-2" onClick={() => handleEdit(vacancy)} style={{ marginRight: '10px', marginLeft: '15px' }}>
                  <IoMdCreate />
                </Button>
                <Button variant="danger" onClick={() => handleOpenConfirmationModal(vacancy._id)} style={{ marginRight: '15px' }}>
                  <IoMdTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {editVacancy && (
        <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faArrowLeft} className="back-icon" onClick={handleCloseForm} style={{ cursor: 'pointer' }} />
            <h2 style={{ textAlign: 'center', flexGrow: 1 }}>Edit Vacancy</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>Title:</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              {errors.title && <span className="error" style={{ color: 'red' }}>{errors.title}</span>}
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>Category:</label>
              <input type="text" name="category" value={formData.category} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              {errors.category && <span className="error" style={{ color: 'red' }}>{errors.category}</span>}
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>Description:</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              {errors.description && <span className="error" style={{ color: 'red' }}>{errors.description}</span>}
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>Requirements:</label>
              <textarea name="requirments" value={formData.requirments} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              {errors.requirments && <span className="error" style={{ color: 'red' }}>{errors.requirments}</span>}
            </div>
            <Button variant="primary" type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px' }}>
              Update Vacancy
            </Button>
          </form>
        </div>
      )}

      <Modal show={showConfirmationModal} onHide={handleCloseConfirmationModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this vacancy?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmationModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDeletion}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Vacancies;