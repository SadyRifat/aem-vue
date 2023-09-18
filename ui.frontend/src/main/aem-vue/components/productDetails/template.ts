const ProductDetailsTemplate = {
    template: `<div class="flex flex-col">
                    <h6>Product Details:</h6>
                    <h5>Name: {{ PDName }}</h5>
                    <p><b>Code: {{ PDCode }}</b></p>
                    <p><b>Rating: {{ PDrating }}</b></p>
                    <p><b>Summary: {{PDSummary}}</b></p>
                    <p><b>Price: {{PDPrice.formattedValue}}</b></p>
                </div>`,
    props: ['modelData']
};
export default ProductDetailsTemplate;
