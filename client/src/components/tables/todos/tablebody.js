import React from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

/*
"id" : "5e211b4e6b587e6fcdc704f2",
    "entityId" : "form1",
    "orgId" : "demo",
    "status" : "PENDING",
    "targetId" : "test",
    "type" : "FORM_SUBMIT",
    "userId" : "1"
*/

const TodosTableBody = ({ todos }) => {
	const mapTodos = () => {
		return todos.map((todo) => (
			<TableRow key={todo.id}>
				<TableCell>{todo.userId}</TableCell>
				<TableCell>{todo.type}</TableCell>
				<TableCell>{todo.targetId}</TableCell>
				<TableCell>{todo.status}</TableCell>
				<TableCell>{todo.orgId}</TableCell>
				<TableCell>{todo.entityId}</TableCell>
			</TableRow>
		));
	};

	return <TableBody>{todos ? mapTodos() : ''}</TableBody>;
};

export default TodosTableBody;
