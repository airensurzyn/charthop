const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	department: {
		type: String,
		required: true,
	},
	reportsTo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'job',
	},
	memberId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'member',
	},
});

module.exports = Job = mongoose.model('job', JobSchema);

// get Job with id 4, with depth 1
// get CTO and direct report references
// for evvery referencid , go db lookup for that job's information

// get job with id 4, with depth 1
// take jobId
// retrieve list of jobs where reportTo is previosuly retrieved jobId
