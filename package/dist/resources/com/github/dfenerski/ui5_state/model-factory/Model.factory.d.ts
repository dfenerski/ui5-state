/// <reference types="openui5" />
declare module "com/github/dfenerski/ui5_state/model-factory/Model.factory" {
    import JSONModel from 'sap/ui/model/json/JSONModel';
    import type { ICreateModel } from 'com\github\dfenerski\ui5_state\model-factory\interfaces\ICreateModel';
    class ModelFactory {
        /**
         * Factory method which creates a UI5 Model from given data payload.
         * @param data The payload
         * @param bindingMode The binding mode, defaults to `BindingMode.TwoWay`
         * @param sizeLimit The model size limit, defaults to `400`
         * @returns The created model
         */
        static createModel<T extends {}>({ data, bindingMode, sizeLimit, }: ICreateModel<T>): JSONModel;
    }
}
//# sourceMappingURL=Model.factory.d.ts.map