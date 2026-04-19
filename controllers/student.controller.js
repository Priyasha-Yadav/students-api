const { getStudentsCollection } = require("../config/db");

async function getAllStudents(req, res) {
	try {
		const students = getStudentsCollection();
		const allStudents = await students.find().toArray();
		res.status(200).json(allStudents);
	} catch (err) {
		res.status(500).send("Error fetching students: " + err.message);
	}
}

async function createStudent(req, res) {
	try {
		const students = getStudentsCollection();
		const newStudent = req.body;
		const result = await students.insertOne(newStudent);
		res.status(201).send(`Student added with ID: ${result.insertedId}`);
	} catch (err) {
		res.status(500).send("Error adding student: " + err.message);
	}
}

async function replaceStudent(req, res) {
	try {
		const students = getStudentsCollection();
		const rollNumber = Number.parseInt(req.params.rollNumber, 10);

		if (Number.isNaN(rollNumber)) {
			return res.status(400).send("Invalid roll number");
		}

		const updatedStudent = req.body;
		const result = await students.replaceOne({ rollNumber }, updatedStudent);
		res.status(200).send(`${result.modifiedCount} document(s) updated`);
	} catch (err) {
		res.status(500).send("Error updating student: " + err.message);
	}
}

async function patchStudent(req, res) {
	try {
		const students = getStudentsCollection();
		const rollNumber = Number.parseInt(req.params.rollNumber, 10);

		if (Number.isNaN(rollNumber)) {
			return res.status(400).send("Invalid roll number");
		}

		const updates = req.body;
		const result = await students.updateOne({ rollNumber }, { $set: updates });
		res.status(200).send(`${result.modifiedCount} document(s) updated`);
	} catch (err) {
		res.status(500).send("Error partially updating student: " + err.message);
	}
}

async function deleteByName(req, res) {
	try {
		const students = getStudentsCollection();
		const name = req.params.name;
		const result = await students.deleteOne({ name });
		res.status(200).send(`${result.deletedCount} document(s) deleted`);
	} catch (err) {
		res.status(500).send("Error deleting student: " + err.message);
	}
}

async function deleteByRollNumber(req, res) {
	try {
		const students = getStudentsCollection();
		const rollNumber = Number.parseInt(req.params.rollNumber, 10);

		if (Number.isNaN(rollNumber)) {
			return res.status(400).send("Invalid roll number");
		}

		const result = await students.deleteOne({ rollNumber });
		res.status(200).send(`${result.deletedCount} document(s) deleted`);
	} catch (err) {
		res.status(500).send("Error deleting student: " + err.message);
	}
}

async function deleteByYear(req, res) {
	try {
		const students = getStudentsCollection();
		const year = Number.parseInt(req.params.year, 10);

		if (Number.isNaN(year)) {
			return res.status(400).send("Invalid year");
		}

		const result = await students.deleteOne({ year });
		res.status(200).send(`${result.deletedCount} document(s) deleted`);
	} catch (err) {
		res.status(500).send("Error deleting student: " + err.message);
	}
}

async function deleteByDepartment(req, res) {
	try {
		const students = getStudentsCollection();
		const department = req.params.department;
		const result = await students.deleteOne({ department });
		res.status(200).send(`${result.deletedCount} document(s) deleted`);
	} catch (err) {
		res.status(500).send("Error deleting student: " + err.message);
	}
}

async function deleteBySubject(req, res) {
	try {
		const students = getStudentsCollection();
		const subjectsEnrolled = req.params.subjectsEnrolled;
		const result = await students.deleteOne({ subjectsEnrolled });
		res.status(200).send(`${result.deletedCount} document(s) deleted`);
	} catch (err) {
		res.status(500).send("Error deleting student: " + err.message);
	}
}

module.exports = {
	getAllStudents,
	createStudent,
	replaceStudent,
	patchStudent,
	deleteByName,
	deleteByRollNumber,
	deleteByYear,
	deleteByDepartment,
	deleteBySubject,
};
