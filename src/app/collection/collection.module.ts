import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CollectionListComponent } from '../collection-list/collection-list.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: CollectionListComponent
			}
		])
	],
	declarations: [
		CollectionListComponent
	]
})
export class CollectionModule { }
