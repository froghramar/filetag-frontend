import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-collection-creator',
	templateUrl: './collection-creator.component.html',
	styleUrls: ['./collection-creator.component.scss']
})
export class CollectionCreatorComponent implements OnInit {

	collectionDetailsFormGroup: FormGroup;
	folderSelectionFormGroup: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.collectionDetailsFormGroup = this.formBuilder.group({
			collectionDetailsFormCtrl: ['', Validators.required]
		});
		this.folderSelectionFormGroup = this.formBuilder.group({
			folderSelectionFormCtrl: ['', Validators.required]
		});
	}
}
