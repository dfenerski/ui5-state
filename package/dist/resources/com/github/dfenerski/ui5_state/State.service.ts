import type Component from 'sap/ui/core/Component';
import JSONModel from 'sap/ui/model/json/JSONModel';
import type { ICreateNamedModel } from './interfaces/ICreateNamedModel';
import { E_MODEL_EXISTS } from './misc/errors';
import { ModelFactory } from './model-factory/Model.factory';
import type { DeepPartial } from './types/DeepPartial';
import type { DeepReadonly } from './types/DeepReadonly';

export abstract class StateService<T extends {}> {
    /**
     * The registrationToken of the model. Must be unique, otherwise registration to the component in the constructor will fail.
     */
    private readonly _registrationToken: string;

    /**
     * The component reference.
     */
    protected readonly _component: Component;

    /**
     * The native model instance.
     */
    protected readonly _model: JSONModel;

    constructor({
        registrationToken,
        componentRef,
        skipRegistration,
        existingModelRef,
        ...rest
    }: ICreateNamedModel<T>) {
        // Create model trough factory method, save reference
        this._model = existingModelRef || ModelFactory.createModel(rest);
        // Save registration token reference
        this._registrationToken = registrationToken;
        //
        this._component = componentRef;
        skipRegistration || this.register();
    }

    /**
     * Generic getter for the model's data. Proxied call to the native model's getData method.
     */
    protected get _data(): T {
        return <T>this._model.getData();
    }

    /**
     * Generic getter for the model's data. Returns immutable ref to the data; setters should be used for modifications.
     */
    public get state(): DeepReadonly<T> {
        return <DeepReadonly<T>>this._data;
    }

    /**
     * Getter for the state service's registration token.
     */
    public get registrationToken(): string {
        return this._registrationToken;
    }

    /**
     * Returns a `Promise` of the current data-loading state. Every currently running `sap.ui.model.json.JSONModel#loadData` call is respected by the returned `Promise`.
     * This also includes a potential `loadData` call from the `JSONModel`'s constructor in case a URL was given. The data-loaded `Promise` will resolve once all running requests have finished.
     * Only request, which have been queued up to the point of calling this function will be respected by the returned `Promise`.
     * @returns — a `Promise`, which resolves if all pending data-loading requests have finished
     */
    public dataLoaded() {
        return this._model.dataLoaded();
    }

    /**
     * Utility hook for delayed model registration when such is requested in the constructor.
     */
    public register() {
        const component = this._component;
        const registrationToken = this.registrationToken;
        // Abort if model is already registered.
        if (component.getModel(registrationToken)) {
            throw E_MODEL_EXISTS;
        }
        // Register model to the component.
        component.setModel(this._model, registrationToken);
    }

    /**
     * Generic setter for the model's data. Merges the provided data with the existing data natively.
     */
    protected set(data: DeepPartial<T>): void {
        this._model.setData(data, true);
    }
}
