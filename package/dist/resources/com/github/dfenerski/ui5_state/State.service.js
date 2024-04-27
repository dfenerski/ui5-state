"use strict";sap.ui.define(["./misc/errors","./model-factory/Model.factory"],function(t,e){"use strict";const o=t["E_MODEL_EXISTS"];const s=e["ModelFactory"];class r{constructor(t){let{registrationToken:e,componentRef:o,skipRegistration:r,existingModelRef:i,...n}=t;this._model=i||s.createModel(n);this._registrationToken=e;this._component=o;r||this.register()}get _data(){return this._model.getData()}get state(){return this._data}get registrationToken(){return this._registrationToken}register(){const t=this._component;const e=this.registrationToken;if(t.getModel(e)){throw o}t.setModel(this._model,e)}set(t){this._model.setData(t,true)}}var i={__esModule:true};i.StateService=r;return i});
//# sourceMappingURL=State.service.js.map