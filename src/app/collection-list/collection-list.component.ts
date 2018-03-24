import { Component, OnInit, } from '@angular/core';
import { CollectionService, } from '../collection/collection.service';
import { Router, } from '@angular/router';

@Component({
	selector: 'app-collection-list',
	templateUrl: './collection-list.component.html',
	styleUrls: [
		'./collection-list.component.scss',
	],
})
export class CollectionListComponent implements OnInit {

	collections = [
		{
			name: 'Photos',
			updated: new Date('1/1/16'),
		},
		{
			name: 'Recipes',
			updated: new Date('1/17/16'),
		},
		{
			name: 'Work',
			updated: new Date('1/28/16'),
		},
		{
			name: 'Photos',
			updated: new Date('1/1/16'),
		},
		{
			name: 'Recipes',
			updated: new Date('1/17/16'),
		},
		{
			name: 'Work',
			updated: new Date('1/28/16'),
		},
	];

	constructor(private collectionService: CollectionService,
				private router: Router) { }

	ngOnInit() {
		this.collectionService.getCollections().toPromise().then(
			data => {
				console.log(data);
			},
			error => {
				console.error(error);
			}
		);
	}

	goToCollectionCreator() {
		this.router.navigate(['/collections/create', ]);
	}

}
