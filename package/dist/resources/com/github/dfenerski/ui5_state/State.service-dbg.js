"use strict";

sap.ui.define(["./misc/errors", "./model-factory/Model.factory"], function (___misc_errors, ___model_factory_Modelfactory) {
  "use strict";

  const E_MODEL_EXISTS = ___misc_errors["E_MODEL_EXISTS"];
  const ModelFactory = ___model_factory_Modelfactory["ModelFactory"];
  class StateService {
    /**
     * The registrationToken of the model. Must be unique, otherwise registration to the component in the constructor will fail.
     */

    /**
     * The component reference.
     */

    /**
     * The native model instance.
     */

    constructor(_ref) {
      let {
        registrationToken,
        componentRef,
        skipRegistration,
        existingModelRef,
        ...rest
      } = _ref;
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
    get _data() {
      return this._model.getData();
    }

    /**
     * Generic getter for the model's data. Returns immutable ref to the data; setters should be used for modifications.
     */
    get state() {
      return this._data;
    }

    /**
     * Getter for the state service's registration token.
     */
    get registrationToken() {
      return this._registrationToken;
    }
    register() {
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
    set(data) {
      this._model.setData(data, true);
    }
  }
  var __exports = {
    __esModule: true
  };
  __exports.StateService = StateService;
  return __exports;
});
//# sourceMappingURL=State.service-dbg.js.map
