import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, } from '@angular/router';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {
	MatAutocompleteModule,
	MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSlideToggleModule,
	MatStepperModule,
} from '@angular/material';

import { CollectionListComponent, } from '../collection-list/collection-list.component';
import { CollectionService, } from './collection.service';
import { CollectionCreatorComponent, } from '../collection-creator/collection-creator.component';
import { ForbiddenDirective, } from '../../directives/validators/forbidden.directive';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatAutocompleteModule,
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
		ForbiddenDirective,
	],
	providers: [
		CollectionService,
	],
})
export class CollectionModule { }
