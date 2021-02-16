import React, { useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Table from '../components/tables/todos/table';
import axios from 'axios';

const Home = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const getTodos = async () => {
			let res = await axios.get('/todos');
			setTodos(res.data.data);
		};

		getTodos();
	}, []);

	return (
		<Grid container>
			<Grid item>
				<Table todos={todos} />
			</Grid>
		</Grid>
	);
};

export default Home;
