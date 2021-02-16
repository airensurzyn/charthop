const express = require('express');
const router = express.Router();

const todosList = [
	{
		id: '5e211b4e6b587e6fcdc704f2',
		entityId: 'form1',
		orgId: 'demo',
		status: 'PENDING',
		targetId: 'test',
		type: 'FORM_SUBMIT',
		userId: '1',
	},
	{
		id: '5e211b4e6b587e6fcdc704fc',
		entityId: 'form1',
		orgId: 'demo',
		status: 'DONE',
		targetId: '5a13d80ccfed7957fe6c0491',
		type: 'FORM_SUBMIT',
		userId: '2',
	},
	{
		id: '5e211b4e6b587e6fcdc704fe',
		entityId: 'change1',
		orgId: 'demo',
		status: 'PENDING',
		targetId: '5ca94e5569c8aa03fe864d22',
		type: 'CHANGE_APPROVE',
		userId: '1',
	},
	{
		id: '5e211b4e6b587e6fcdc70504',
		entityId: 'form1',
		orgId: 'demo',
		status: 'DONE',
		targetId: '5a13d80ccfed7957fe6c0482',
		type: 'FORM_SUBMIT',
		userId: '2',
	},
];

router.get('/todos', (req, res) => {
	const todoResponse = { data: todosList };
	res.status(200).send(todoResponse);
});

module.exports = router;
