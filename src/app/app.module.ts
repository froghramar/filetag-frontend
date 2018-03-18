import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserAnimationsModule,
		MatSidenavModule,
		MatButtonModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
