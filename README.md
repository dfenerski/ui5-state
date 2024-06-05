# Native state management library for SAPUI5 / OpenUI5

# Intro

`ui5-state` is a simple ui5 state management library which aims to utilize TypeScript in order to provide typed and safe access to your `JSONModel` data.

# Features

-   fully type-safe read access
-   streamlined write access
-   `DeepReadonly` reference exposure

# Setup

1. `npm install ui5-state`
2. Enable dependency transpilation (relevant when `serve`ing the app)

```yaml
- name: ui5-tooling-transpile-middleware
  afterMiddleware: compression
  configuration:
      transpileDependencies: true
```

3. setup ui5-workspace.yaml (relevant when `serve`ing the app)

```yaml
specVersion: workspace/1.0
metadata:
    name: default
dependencyManagement:
    resolutions:
        - path: ./node_modules/ui5-state
```

4. Setup `tsconfig.json` as follows:

```typescript
{
    "compilerOptions": {
        "paths": {
            "ui5-state/*": [
                "./node_modules/ui5-state/src/com/github/dfenerski/ui5_state/*"
            ],
        }
    }
}
```

# Usage

### 1. Create a model by extending the `StateService`

```ts
import { StateService } from 'ui5-state/State.service';
import type { App } from './model/App';
import type { AppViewType } from './types/AppViewType';

export const APP_MODEL = 'app';

export class AppStateService extends StateService<App> {
    public setCurrentView(view: AppViewType) {
        return this._model.setProperty('/currentView', view);
    }
}
```

### 2. Instantiate your model

```ts
// Component.ts

this.appModel = new AppStateService({
    componentRef: this,
    data: new App(),
    registrationToken: APP_MODEL,
});
```

### 3. Enjoy type safety

```ts
// SomeController.ts

/**
 * @namespace com.someorg.myapp
 */
export default class SomeController {
    public onInit(){
        const component = getComponent();
        this.appModel = component.appModel.
    }

    public handleCurrentViewPromptRequest(){
        alert(this.appModel.state.currentView);
    }
}
```
