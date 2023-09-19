import ProductDetailsTemplate from './template';
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
        const PDImg = ref('');
        const productDetailsInfo = async () => {
            const pdResponse = await productDetail();
            PDrating.value = pdResponse.averageRating;
            PDName.value = pdResponse.name;
            PDSummary.value = pdResponse.summary;
            PDCode.value = pdResponse.code;
            PDPrice.value = pdResponse.price;
            // PDImg.value = 'https://40.76.109.9:9002' + pdResponse.images[0].url;
            PDImg.value = 'https://40.76.109.9:9002/medias/?context=bWFzdGVyfGltYWdlc3wyMTk1MHxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJobU9TOW9PRFV2T0RjNU56STBNRFV5TkRnek1DNXFjR2N8NjZlMzZmMzk3ODk4M2Q0MDMwZGY4MGNiNTMxNGQ5YmQ2Y2ViYmFhNjk2ZTcyNjM5NzViYmNjNDljZjYxMmVmMg';
            console.log(pdResponse);
        };
        console.log('pass' + PDrating);
        return {PDrating, PDName, PDSummary, PDCode, PDPrice, PDImg, productDetailsInfo};
    }, mounted() {
        this.productDetailsInfo();
    }
});

export default ProductDetails;
