// import { bootstrapApplication } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app.module';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
platformBrowserDynamic().bootstrapModule(AppModule);
