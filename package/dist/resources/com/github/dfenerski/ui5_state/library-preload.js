//@ui5-bundle com/github/dfenerski/ui5_state/library-preload.js
sap.ui.require.preload({
	"com/github/dfenerski/ui5_state/State.service.js":function(){
"use strict";sap.ui.define(["./misc/errors","./model-factory/Model.factory"],function(t,e){"use strict";const o=t["E_MODEL_EXISTS"];const r=e["ModelFactory"];class s{constructor(t){let{registrationToken:e,componentRef:o,skipRegistration:s,existingModelRef:i,...n}=t;this._model=i||r.createModel(n);this._registrationToken=e;this._component=o;s||this.register()}get _data(){return this._model.getData()}get state(){return this._data}get registrationToken(){return this._registrationToken}dataLoaded(){return this._model.dataLoaded()}register(){const t=this._component;const e=this.registrationToken;if(t.getModel(e)){throw o}t.setModel(this._model,e)}set(t){this._model.setData(t,true)}}var i={__esModule:true};i.StateService=s;return i});
},
	"com/github/dfenerski/ui5_state/interfaces/ICreateNamedModel.js":function(){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});
},
	"com/github/dfenerski/ui5_state/library.js":function(){
"use strict";sap.ui.define(["sap/ui/core/Lib"],function(e){"use strict";sap.ui.loader.config({map:{"*":{"ui5-state":"com/github/dfenerski/ui5_state"}}});const i=e.init({name:"com.github.dfenerski.ui5_state",version:"${version}",dependencies:[],types:[],interfaces:[],controls:[],elements:[],noLibraryCSS:true});return i});
},
	"com/github/dfenerski/ui5_state/manifest.json":'{"_version":"1.21.0","sap.app":{"id":"com.github.dfenerski.ui5_state","type":"library","embeds":[],"applicationVersion":{"version":"0.0.2"},"title":"com.github.dfenerski.ui5_state","description":"Native state management library for SAPUI5 / OpenUI5","resources":"resources.json","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":[]},"sap.ui5":{"dependencies":{"minUI5Version":"1.120","libs":{}},"library":{"i18n":false,"css":false,"content":{"controls":[],"elements":[],"types":[],"interfaces":[]}}}}',
	"com/github/dfenerski/ui5_state/misc/errors.js":function(){
"use strict";sap.ui.define([],function(){"use strict";const e=new Error("Model registration failed: model already exists.");const t=new Error("State service failed: invoked getter for uninitialized property.");const r="Modifications to the virtual property are not allowed.";const o="Deletion of the virtual property is not allowed.";var i={__esModule:true};i.E_MODEL_EXISTS=e;i.E_UNINITIALIZED_GET=t;i.E_NO_VIRTUAL_SET=r;i.E_NO_VIRTUAL_DELETE=o;return i});
},
	"com/github/dfenerski/ui5_state/model-factory/Model.factory.js":function(){
"use strict";sap.ui.define(["sap/ui/model/json/JSONModel","./misc/constants"],function(e,t){"use strict";const s=t["DEFAULT_BINDING_MODE"];const i=t["DEFAULT_SIZE_LIMIT"];class n{static createModel(t){let{data:n,bindingMode:o,sizeLimit:c}=t;const a=new e(n);a.setDefaultBindingMode(o||s);a.setSizeLimit(c||i);return a}}var o={__esModule:true};o.ModelFactory=n;return o});
},
	"com/github/dfenerski/ui5_state/model-factory/interfaces/ICreateModel.js":function(){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});
},
	"com/github/dfenerski/ui5_state/model-factory/misc/constants.js":function(){
"use strict";sap.ui.define(["sap/ui/model/BindingMode"],function(e){"use strict";const s=e.TwoWay;const t=400;var i={__esModule:true};i.DEFAULT_BINDING_MODE=s;i.DEFAULT_SIZE_LIMIT=t;return i});
},
	"com/github/dfenerski/ui5_state/types/DeepMutable.js":function(){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});
},
	"com/github/dfenerski/ui5_state/types/DeepPartial.js":function(){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});
},
	"com/github/dfenerski/ui5_state/types/DeepReadonly.js":function(){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});
}
});
//# sourceMappingURL=library-preload.js.map
