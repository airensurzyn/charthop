import React from 'react';
import { Grid, Table } from '@material-ui/core';
import TableHead from './tablehead';
import TableBody from './tablebody';

const TodosTable = ({ todos }) => {
	return (
		<Grid container>
			<Grid item>
				{todos ? (
					<Table>
						<TableHead />
						<TableBody todos={todos} />
					</Table>
				) : (
					'No data received'
				)}
			</Grid>
		</Grid>
	);
};

export default TodosTable;
