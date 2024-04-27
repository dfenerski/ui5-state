declare module "com/github/dfenerski/ui5_state/model-factory/interfaces/ICreateModel" {
    import BindingMode from 'sap/ui/model/BindingMode';
    import JSONModel from 'sap/ui/model/json/JSONModel';
    interface ICreateModel<T extends {}> {
        readonly data: T | string;
        readonly bindingMode?: BindingMode;
        readonly sizeLimit?: number;
        readonly skipRegistration?: boolean;
        readonly existingModelRef?: JSONModel;
    }
}
//# sourceMappingURL=ICreateModel.d.ts.map