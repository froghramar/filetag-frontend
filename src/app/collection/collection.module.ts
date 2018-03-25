import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, } from '@angular/router';
import {
	MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSlideToggleModule,
	MatStepperModule,
} from '@angular/material';

import { CollectionListComponent, } from '../collection-list/collection-list.component';
import { CollectionService, } from './collection.service';
import { CollectionCreatorComponent, } from '../collection-creator/collection-creator.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatSlideToggleModule,
		MatStepperModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{
				path: '',
				component: CollectionListComponent,
			},
			{
				path: 'create',
				component: CollectionCreatorComponent,
				data: {
					breadcrumbs: 'Create',
				},
			},
		]),
	],
	declarations: [
		CollectionCreatorComponent,
		CollectionListComponent,
	],
	providers: [
		CollectionService,
	],
})
export class CollectionModule { }
