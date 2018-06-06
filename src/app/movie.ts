export class Movie {
    // tslint:disable-next-line:max-line-length
    description = 'Lorem ipsum dolor amet shoreditch drinking vinegar twee, taxidermy YOLO next level pour-over. Elit pabst sed everyday carry, williamsburg occupy prism kickstarter iceland. Woke typewriter tote bag est, next level ad duis single-origin coffee mumblecore williamsburg cliche. Cray everyday carry quis unicorn beard ennui bitters YOLO actually neutra poutine banjo lumbersexual umami. Hella pok pok nisi marfa etsy fugiat slow-carb iPhone banh mi. Nostrud typewriter intelligentsia, chia craft beer everyday carry non organic flannel VHS mlkshk.';

    constructor(private _name: string, private _rating?: number, private _like?: boolean) {
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

    get like() {
        return this._like;
    }

    set like(like: boolean) {
        this._like = like;
    }
}
