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

interface Image{
    altText: string;
    format: string;
    imageType: string;
    url: string;
}

interface Stock {
    isValueRounded: boolean;
    stockLevel: number;
    stockLevelStatus: string;
}

interface Product {
    availableForPickup: boolean;
    averageRating: number;
    code: string;
    images: Image[];
    manufacturer: string;
    name: string;
    purchasable: boolean;
    stock: Stock;
    url: string; 
}

interface BasePrice {
    formattedValue: string;
    value: number;
}

interface Price extends BasePrice{
    currencyIso : string;
    priceType: string;
    formattedValue: string;
}

interface Entry {
    basePrice: Price;
    entryNumber: number;
    product: Product;
    quantity: number;
    totalPrice: Price;
}

interface PaymentType{
    code:string;
    displayName: string;
}

interface Cart {
    type: string;
    code: string;
    deliveryItemsQuantity: number;
    entries: Entry[];
    pickupItemsQuantity: number;
    productDiscounts: BasePrice;
    subTotal: Price;
    totalDiscounts: Price;
    totalItems: number;
    totalPrice: Price;
    totalPriceWithTax: Price;
    totalTax: Price;
    paymentType:PaymentType;
    totalUnitCount: number;
}

export { Cart, CartModel, productCode, ProductModel, cartDetailsModel, entriesModel };
