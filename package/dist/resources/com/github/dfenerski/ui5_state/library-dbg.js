"use strict";

sap.ui.define(["sap/ui/core/Lib"], function (Lib) {
  "use strict";

  sap.ui.loader.config({
    map: {
      '*': {
        'ui5-state': 'com/github/dfenerski/ui5_state'
      }
    }
  });

  // Delegate further initialization of this library to the Core
  const thisLib = Lib.init({
    name: 'com.github.dfenerski.ui5_state',
    version: '${version}',
    dependencies: [],
    types: [],
    interfaces: [],
    controls: [],
    elements: [],
    noLibraryCSS: true
  });

  // Export the library namespace
  return thisLib;
});
//# sourceMappingURL=library-dbg.js.map
