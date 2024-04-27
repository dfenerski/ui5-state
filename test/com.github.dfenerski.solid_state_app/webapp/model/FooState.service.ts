import { StateService } from 'ui5-state/State.service';

export class Foo {
	public bar: string;
}

export class FooStateService extends StateService<Foo> {
	public setBar(bar: string) {
		this._model.setProperty('/bar', bar);
	}
}
