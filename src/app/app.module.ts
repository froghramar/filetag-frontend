import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatTabsModule } from '@angular/material';

import { HttpService } from '../services/http.service';
import { DbService } from '../services/db.service';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		HttpClientModule,
		MatTabsModule,
		MatIconModule,
		McBreadcrumbsModule.forRoot(),
		RouterModule.forRoot([
			{
				path: '',
				loadChildren: './home/home.module#HomeModule',
				data: {
					breadcrumbs: 'Home',
				},
			},
			{
				path: 'collections',
				loadChildren: './collection/collection.module#CollectionModule',
				data: {
					breadcrumbs: 'Collections',
				},
			},
		]),
	],
	declarations: [
		AppComponent,
		SidenavComponent,
	],
	providers: [
		DbService,
		HttpService,
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
