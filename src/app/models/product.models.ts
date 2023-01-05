export class Product{

    constructor(
        public id           : number=0,
        public categoryId   : number=0,
        public imageUrl     : string[]=[],
        public color        : number[]=[]
    ){

    }
}