"use strict";

sap.ui.define([], function () {
  "use strict";

  const E_MODEL_EXISTS = new Error('Model registration failed: model already exists.');
  const E_UNINITIALIZED_GET = new Error('State service failed: invoked getter for uninitialized property.');
  const E_NO_VIRTUAL_SET = 'Modifications to the virtual property are not allowed.';
  const E_NO_VIRTUAL_DELETE = 'Deletion of the virtual property is not allowed.';
  var __exports = {
    __esModule: true
  };
  __exports.E_MODEL_EXISTS = E_MODEL_EXISTS;
  __exports.E_UNINITIALIZED_GET = E_UNINITIALIZED_GET;
  __exports.E_NO_VIRTUAL_SET = E_NO_VIRTUAL_SET;
  __exports.E_NO_VIRTUAL_DELETE = E_NO_VIRTUAL_DELETE;
  return __exports;
});
//# sourceMappingURL=errors-dbg.js.map
