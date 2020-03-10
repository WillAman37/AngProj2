export class Parts {
    public name: string;
    public description: string;
    public img_: string;
    price: any;

    constructor(name: string, desc: string, img_: string, price: string) {
        this.name = name;
        this.description = desc;
        this.img_ = img_;
        this.price = price;
    }
}
