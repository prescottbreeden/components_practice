export class Movie {

    constructor(private _name: string, private _rating?: number) {
    }

    get name() {
        return this._name;
    }

    get rating() {
        return this._rating;
    }

    set rating(rating: number) {
        this._rating = rating;
    }
}
