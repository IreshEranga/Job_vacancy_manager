// const Vacancy = require("../models/Vacancy");

// const vacancyController = {

//     //get all vacancies
//     getVacancies: async(req,res) => {
//         try{

//         }
//     }
// };

// module.exports = vacancyController;


const Vacancy = require("../models/Vacancy");

const vacancyController = {
    // Get all vacancies
    getVacancies: async (req, res) => {
        try {
            const vacancies = await Vacancy.find();
            res.status(200).json(vacancies);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a vacancy by ID
    getVacancyById: async (req, res) => {
        try {
            const vacancy = await Vacancy.findById(req.params.id);
            if (!vacancy) return res.status(404).json({ message: "Vacancy not found" });
            res.status(200).json(vacancy);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get vacancies by category
    getVacanciesByCategory: async (req, res) => {
        try {
            const vacancies = await Vacancy.find({ category: req.params.category });
            res.status(200).json(vacancies);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Create a new vacancy
    createVacancy: async (req, res) => {
        try {
            const newVacancy = new Vacancy(req.body);
            const savedVacancy = await newVacancy.save();
            res.status(201).json(savedVacancy);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Update a vacancy by ID
    updateVacancy: async (req, res) => {
        try {
            const updatedVacancy = await Vacancy.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedVacancy) return res.status(404).json({ message: "Vacancy not found" });
            res.status(200).json(updatedVacancy);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Delete a vacancy by ID
    deleteVacancy: async (req, res) => {
        try {
            const deletedVacancy = await Vacancy.findByIdAndDelete(req.params.id);
            if (!deletedVacancy) return res.status(404).json({ message: "Vacancy not found" });
            res.status(200).json({ message: "Vacancy deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = vacancyController;
