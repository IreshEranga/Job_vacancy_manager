const mongoose = require("mongoose");
//const USER_ROLES = require("../constants/roles");

const vacancySchema = new mongoose.Schema(
    {
        vacancyid: { type: String, unique: true },
        title: { type: String, required: true },
        category: { type: String, required: true },
        description:{type:String, required: true},
        requirments:{type:String, required: true},
    },
    {
        timestamps: true,
    }
);



vacancySchema.pre("save", async function (next) {
    const Vacancy = this.constructor;
    const lastVacancy = await Vacancy.findOne({}, {}, { sort: { vacancyid: -1 } });
    let newVacancyId;
    if (lastVacancy) {
        const lastVacancyId = parseInt(lastVacancy.vacancyid.slice(-2)); // Extract the numerical part from the last employeeid
        newVacancyId = `Vacancy${(lastVacancyId + 1).toString().padStart(2, "0")}`; // Increment and format the new employeeid
    } else {
        newVacancyId = "Vacancy01"; // If there are no riders yet, start from 01
    }
    this.vacancyid = newVacancyId;
    next();
});

module.exports = mongoose.model("Vacancy", vacancySchema);
