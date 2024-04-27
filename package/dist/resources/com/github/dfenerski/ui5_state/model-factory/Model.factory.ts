import JSONModel from 'sap/ui/model/json/JSONModel';
import type { ICreateModel } from './interfaces/ICreateModel';
import { DEFAULT_BINDING_MODE, DEFAULT_SIZE_LIMIT } from './misc/constants';

export class ModelFactory {
    /**
     * Factory method which creates a UI5 Model from given data payload.
     * @param data The payload
     * @param bindingMode The binding mode, defaults to `BindingMode.TwoWay`
     * @param sizeLimit The model size limit, defaults to `400`
     * @returns The created model
     */
    public static createModel<T extends {}>({
        data,
        bindingMode,
        sizeLimit,
    }: ICreateModel<T>): JSONModel {
        const model = new JSONModel(data);
        model.setDefaultBindingMode(bindingMode || DEFAULT_BINDING_MODE);
        model.setSizeLimit(sizeLimit || DEFAULT_SIZE_LIMIT);
        return model;
    }
}
