import { StateService } from 'ui5-state/State.service';

class App {
	public data: number = 42;
}

export class AppStateService extends StateService<App> {
	//
	public setData(data: number) {
		this._model.setProperty('/data', data);
	}
}
