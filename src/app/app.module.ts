import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatTabsModule } from '@angular/material';

import { HttpService } from '../services/http.service';
import { DbService } from '../services/db.service';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		HttpClientModule,
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
	providers: [
		DbService,
		HttpService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
