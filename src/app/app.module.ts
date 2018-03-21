import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatIconModule, MatTabsModule } from '@angular/material';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		MatTabsModule,
		MatIconModule,
		RouterModule.forRoot([
			{
				path: '',
				loadChildren: './home/home.module#HomeModule'
			},
			{
				path: 'collections',
				loadChildren: './collection/collection.module#CollectionModule'
			}
		])
	],
	declarations: [
		AppComponent,
		SidenavComponent
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
