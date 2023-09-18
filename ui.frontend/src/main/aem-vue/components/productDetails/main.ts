import ProductDetailsTemplate from './template';
import AppStore from "../../store";
import {productDetail} from "../../external/hybris/productDetails/pd";

const {ref} = (window as any).Vue;
const {defineComponent} = (window as any).Vue;

const ProductDetails = defineComponent({
    template: ProductDetailsTemplate.template, props: {
        modelData: String
    }, setup() {
        const PDrating = ref('0');
        const PDName = ref('');
        const PDSummary = ref('');
        const PDCode = ref('');
        const PDPrice = ref('');
        const productDetailsInfo = async () => {
            const pdResponse = await productDetail();
            PDrating.value = pdResponse.averageRating;
            PDName.value = pdResponse.name;
            PDSummary.value = pdResponse.summary;
            PDCode.value = pdResponse.code;
            PDPrice.value = pdResponse.price;
            console.log(pdResponse);
        };
        console.log('pass' + PDrating);
        return {PDrating, PDName, PDSummary, PDCode, PDPrice, productDetailsInfo};
    }, mounted() {
        this.productDetailsInfo();
    }
});

export default ProductDetails;