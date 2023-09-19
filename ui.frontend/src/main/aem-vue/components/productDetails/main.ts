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
        const PDDetails = ref('');
        const PDStock = ref('');
        const PDCode = ref('');
        const PDPrice = ref('');
        const PDImg = ref('');
        const AllImg = ref([]);
        const imgURL = 'https://40.76.109.9:9002';
        const productDetailsInfo = async () => {
            const pdResponse = await productDetail();
            PDrating.value = pdResponse.averageRating;
            PDName.value = pdResponse.name;
            PDSummary.value = pdResponse.summary;
            PDCode.value = pdResponse.code;
            PDPrice.value = pdResponse.price;
            AllImg.value = pdResponse.images;
            PDImg.value = 'https://40.76.109.9:9002/medias/?context=bWFzdGVyfGltYWdlc3wyNjE4MXxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnM09DOW9NRGt2T0RjNU56SXpORFUyTVRBMU5DNXFjR2N8YzI4NjgzY2Y1ZjYyNmY0NzhjY2Y2ODZhN2U0MDhmMDFlNjdiOWMxOTk1NDkzODcwMzc5ZGYxM2ViZDg1ZWVkMA';
            //PDImg.value = pdResponse.images[0].url;
            PDDetails.value = pdResponse.description; 
            PDStock.value = pdResponse.stock; 
            console.log(pdResponse);
            console.log(AllImg.value);
        };
        console.log('pass' + PDrating);
        return {PDrating, PDName, PDSummary, PDCode, PDPrice, PDImg, AllImg, imgURL, PDDetails, PDStock, productDetailsInfo};
    }, mounted() {
        this.productDetailsInfo();
    }
});

export default ProductDetails;