const express = require("express");
const router = express.Router();
const vacancyController = require("../controllers/vacancyController");

// Get all vacancies
router.get("/vacancies", vacancyController.getVacancies);

// Get a vacancy by ID
router.get("/vacancies/:id", vacancyController.getVacancyById);

// Get vacancies by category
router.get("/vacancies/category/:category", vacancyController.getVacanciesByCategory);

// Create a new vacancy
router.post("/vacancies", vacancyController.createVacancy);

// Update a vacancy by ID
router.put("/vacancies/:id", vacancyController.updateVacancy);

// Delete a vacancy by ID
router.delete("/vacancies/:id", vacancyController.deleteVacancy);

module.exports = router;
