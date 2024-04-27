import type Component from 'sap/ui/core/Component';
import type { ICreateModel } from '../model-factory/interfaces/ICreateModel';

export interface ICreateNamedModel<T extends {}> extends ICreateModel<T> {
    readonly registrationToken: string;
    readonly componentRef: Component;
}
