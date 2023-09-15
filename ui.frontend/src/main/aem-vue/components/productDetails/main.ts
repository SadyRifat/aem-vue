import ProductDetailsTemplate from './template';
import AppStore from "../../store";
import {productDetail} from "../../external/hybris/productDetails/pd";

const {ref} = (window as any).Vue;
const {defineComponent} = (window as any).Vue;

const ProductDetails = defineComponent({
    template: ProductDetailsTemplate.template, props: {
        modelData: String
    }, setup() {
        const PDrating = {name: 34};
        const productDetailsInfo = async () => {
            const pdResponse = await productDetail();
            console.log(pdResponse);
            PDrating.name = pdResponse.averageRating;
            const availableForPickup = pdResponse.availableForPickup;
            //return PDrating;
            //console.log(PDrating.name);
            //cartList.value = cartResponse.entries;
            //grandTotal.value = cartResponse.totalPriceWithTax.formattedValue;
        };
        //console.log(PDrating.name);
        return {productDetailsInfo, PDrating};
    }, mounted() {
        this.productDetailsInfo();
    }
});

export default ProductDetails;