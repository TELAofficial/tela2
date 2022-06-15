import UserServer from "./Modules/Users"

export class ServerTela {
	/** start modules */
	user: UserServer

	/** end modules */

	constructor() {
		// modules
		this.user = new UserServer()
	}
}

export const apiInstance = new ServerTela()