export class Product{

    constructor(
        public id           : number=0,
        public categoryId   : number=0,
        public name         : string='',
        public imgUrlList  : string[]=[]
    ){

    }
}