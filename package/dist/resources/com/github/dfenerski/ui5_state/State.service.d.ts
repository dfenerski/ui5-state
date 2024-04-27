declare module "com/github/dfenerski/ui5_state/State.service" {
    import type Component from 'sap/ui/core/Component';
    import JSONModel from 'sap/ui/model/json/JSONModel';
    import type { ICreateNamedModel } from 'com\github\dfenerski\ui5_state\interfaces\ICreateNamedModel';
    import type { DeepPartial } from 'com\github\dfenerski\ui5_state\types\DeepPartial';
    import type { DeepReadonly } from 'com\github\dfenerski\ui5_state\types\DeepReadonly';
    abstract class StateService<T extends {}> {
        /**
         * The registrationToken of the model. Must be unique, otherwise registration to the component in the constructor will fail.
         */
        private readonly _registrationToken;
        /**
         * The component reference.
         */
        protected readonly _component: Component;
        /**
         * The native model instance.
         */
        protected readonly _model: JSONModel;
        constructor({ registrationToken, componentRef, skipRegistration, existingModelRef, ...rest }: ICreateNamedModel<T>);
        /**
         * Generic getter for the model's data. Proxied call to the native model's getData method.
         */
        protected get _data(): T;
        /**
         * Generic getter for the model's data. Returns immutable ref to the data; setters should be used for modifications.
         */
        get state(): DeepReadonly<T>;
        /**
         * Getter for the state service's registration token.
         */
        get registrationToken(): string;
        register(): void;
        /**
         * Generic setter for the model's data. Merges the provided data with the existing data natively.
         */
        protected set(data: DeepPartial<T>): void;
    }
}
//# sourceMappingURL=State.service.d.ts.map