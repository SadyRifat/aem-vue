interface CartModel {
    PDData: object;
    PDrating: number;
    PDName: string;
    PDSummary: string;
    PDCode: string;
    PDPrice: number;
    PDImg: string;
    AllImg: string;
    imgURL: string;
    PDDetails: string;
    PDStock: number;
    productCount: number;
    productID: number;
    PDCount: number;
}

type productCode = {
    code: number;
};

class ProductModel {
    quantity: number;
    product: productCode;

    constructor(quantity: number, code: number) {
        this.quantity = quantity;
        this.product = {
            code: code
        };
    }
}

type cartDetailsModel = { 
    entry: object,
    quantity: number
}

type entriesModel = { 
    entryNumber: number
}

export { CartModel, productCode, ProductModel, cartDetailsModel, entriesModel };
