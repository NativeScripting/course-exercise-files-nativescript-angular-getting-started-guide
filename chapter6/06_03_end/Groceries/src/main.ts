import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";
import { setStatusBarColors } from './app/utils/status-bar-util';

setStatusBarColors();

platformNativeScriptDynamic().bootstrapModule(AppModule);
