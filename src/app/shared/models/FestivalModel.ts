export class FestivalModel {
    error:     boolean;
    festivals: Festival[];
}

export class Festival {
    _id:        string;
    name:       string;
    year:       string;
}