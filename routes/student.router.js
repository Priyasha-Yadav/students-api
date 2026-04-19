const express = require("express");
const {
	getAllStudents,
	createStudent,
	replaceStudent,
	patchStudent,
	deleteByName,
	deleteByRollNumber,
	deleteByYear,
	deleteByDepartment,
	deleteBySubject,
} = require("../controllers/student.controller");

const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.post("/", createStudent);
studentRouter.put("/:rollNumber", replaceStudent);
studentRouter.patch("/:rollNumber", patchStudent);
studentRouter.delete("/delname/:name", deleteByName);
studentRouter.delete("/:rollNumber", deleteByRollNumber);
studentRouter.delete("/delyear/:year", deleteByYear);
studentRouter.delete("/deldep/:department", deleteByDepartment);
studentRouter.delete("/delsub/:subjectsEnrolled", deleteBySubject);

module.exports = studentRouter;
