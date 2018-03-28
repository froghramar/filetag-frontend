export interface ICollection {
	_id?: string;
	Directory?: string;
	Name?: string;
	UrlPath?: string;
}

export class Collection implements ICollection {
	_id?: string;
	Directory?: string;
	Name?: string;
	UrlPath?: string;

	constructor(collection: ICollection) {
		if (collection._id) {
			this._id = collection._id;
		}
		this.Directory = collection.Directory;
		this.Name = collection.Name;
		this.UrlPath = collection.UrlPath;
	}
}
