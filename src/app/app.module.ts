import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
	declarations: [
		AppComponent,
		SidenavComponent
	],
	imports: [
		BrowserAnimationsModule,
		MatSidenavModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
