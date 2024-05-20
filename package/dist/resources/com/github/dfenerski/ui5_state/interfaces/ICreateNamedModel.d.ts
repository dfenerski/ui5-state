/// <reference types="openui5" />
declare module "com/github/dfenerski/ui5_state/interfaces/ICreateNamedModel" {
    import type Component from 'sap/ui/core/Component';
    import type { ICreateModel } from 'com\github\dfenerski\ui5_state\model-factory\interfaces\ICreateModel';
    interface ICreateNamedModel<T extends {}> extends ICreateModel<T> {
        readonly registrationToken: string;
        readonly componentRef: Component;
    }
}
//# sourceMappingURL=ICreateNamedModel.d.ts.map