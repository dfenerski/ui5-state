"use strict";

sap.ui.define(["sap/ui/model/json/JSONModel", "./misc/constants"], function (JSONModel, ___misc_constants) {
  "use strict";

  const DEFAULT_BINDING_MODE = ___misc_constants["DEFAULT_BINDING_MODE"];
  const DEFAULT_SIZE_LIMIT = ___misc_constants["DEFAULT_SIZE_LIMIT"];
  class ModelFactory {
    /**
     * Factory method which creates a UI5 Model from given data payload.
     * @param data The payload
     * @param bindingMode The binding mode, defaults to `BindingMode.TwoWay`
     * @param sizeLimit The model size limit, defaults to `400`
     * @returns The created model
     */
    static createModel(_ref) {
      let {
        data,
        bindingMode,
        sizeLimit
      } = _ref;
      const model = new JSONModel(data);
      model.setDefaultBindingMode(bindingMode || DEFAULT_BINDING_MODE);
      model.setSizeLimit(sizeLimit || DEFAULT_SIZE_LIMIT);
      return model;
    }
  }
  var __exports = {
    __esModule: true
  };
  __exports.ModelFactory = ModelFactory;
  return __exports;
});
//# sourceMappingURL=Model.factory-dbg.js.map
