import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';

import { CollectionListComponent } from '../collection-list/collection-list.component';

@NgModule({
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
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
