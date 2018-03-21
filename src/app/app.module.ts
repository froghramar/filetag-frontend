import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material';

@NgModule({
	declarations: [
		AppComponent,
		SidenavComponent,
		CollectionListComponent,
		HomeComponent
	],
	imports: [
		BrowserAnimationsModule,
		MatTabsModule,
		RouterModule.forRoot([
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'collections',
				component: CollectionListComponent
			}
		])
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
