import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';

import { CollectionListComponent } from '../collection-list/collection-list.component';
import { CollectionService } from './collection.service';
import { CollectionCreatorComponent } from '../collection-creator/collection-creator.component';

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
			},
			{
				path: 'create',
				component: CollectionCreatorComponent
			}
		]),
	],
	declarations: [
		CollectionCreatorComponent,
		CollectionListComponent
	],
	providers: [
		CollectionService
	]
})
export class CollectionModule { }
