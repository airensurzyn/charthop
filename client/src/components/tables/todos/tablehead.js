import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
/*

"id" : "5e211b4e6b587e6fcdc704f2",
    "entityId" : "form1",
    "orgId" : "demo",
    "status" : "PENDING",
    "targetId" : "test",
    "type" : "FORM_SUBMIT",
    "userId" : "1"

    */

const TodosTableHead = () => {
	return (
		<TableHead>
			<TableRow>
				<TableCell>User ID</TableCell>
				<TableCell>Type</TableCell>
				<TableCell>Target ID</TableCell>
				<TableCell>Status</TableCell>
				<TableCell>Org ID</TableCell>
				<TableCell>Entity ID</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default TodosTableHead;
