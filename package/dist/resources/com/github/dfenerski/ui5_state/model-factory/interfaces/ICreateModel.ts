import BindingMode from 'sap/ui/model/BindingMode';
import JSONModel from 'sap/ui/model/json/JSONModel';

export interface ICreateModel<T extends {}> {
    readonly data: T;
    readonly bindingMode?: BindingMode;
    readonly sizeLimit?: number;
    readonly skipRegistration?: boolean;
    readonly existingModelRef?: JSONModel;
}
