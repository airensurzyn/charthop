import mongoose from 'mongoose';
import Job from './models/job';

const getJobAndDirectsByDepth = async function (jobId, depth) {
	let retrievedJob = await Job.findById(jobId);
	let currentLevelJobs = [];
	if (depth === 0) {
		return retrievedJob;
	}

	let listOfDirects = await Job.find({ reportsTo: jobId });

	for (let i = 0; i < listOfDirects.length; i++) {
		let directJob = getJobAndDirectsByDepth(listOfDirects[i], depth - 1);
		currentLevelJobs.push(directJob);
	}
	retrievedJob.directs = currentLevelJobs;
	return retrievedJob;
};

/*

{
    _id: 'c5c5c5c',
    department: 'Operations'
    directs : [{
        _id: 'c5c5c5c',
        department: 'Operations'
        directs : [{
            _id: 'c5c5c5c',
            department: 'Operations'
            reportsTo :
        }]
    }]
    }

}
*/

// get job with id 4, with depth 1
// take jobId
// retrieve list of jobs where reportTo is previosuly retrieved jobId
