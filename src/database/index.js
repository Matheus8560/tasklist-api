/* eslint-disable max-len */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Task from '../app/models/Task';

const models = [User, Task];

class Database {
	constructor() {
		this.init();
	}

	init() {
		// connexão do bd com os models
		this.connection = new Sequelize(databaseConfig);

		models
			// eslint-disable-next-line prettier/prettier
			.map(model => model.init(this.connection))
			// eslint-disable-next-line prettier/prettier
			.map(model => model.associate && model.associate(this.connection.models)
			);
	}
}

export default new Database();
