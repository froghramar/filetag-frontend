import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ICollection, } from '../../models/collection';

@Component({
	selector: 'app-collection-creator',
	templateUrl: './collection-creator.component.html',
	styleUrls: [
		'./collection-creator.component.scss',
	],
})
export class CollectionCreatorComponent implements OnInit {

	collectionDetailsFormGroup: FormGroup;
	folderSelectionFormGroup: FormGroup;

	existingCollections: ICollection[] = [
		{
			Directory: 'Photos Directory',
			Name: 'Photos Collection',
			UrlPath: 'photos',
		},
		{
			Directory: 'Photos Directory',
			Name: 'Photos Collection',
			UrlPath: 'photos',
		},
	];

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.initializeFormGroups();
	}

	initializeFormGroups() {
		this.collectionDetailsFormGroup = this.formBuilder.group({
			createNewDirectory: [true, [
				Validators.required,
			], ],
			Directory: ['', [
				Validators.required,
			], ],
		});
		this.folderSelectionFormGroup = this.formBuilder.group({
			folderSelectionFormCtrl: [ '', Validators.required, ],
		});
	}
}
