const ProductDetailsTemplate = {
    template: `<div class="flex flex-row">
                    <div class="flex flex-col">
                        <img :src='PDImg' />
                    </div>
                    <div class="flex flex-col">
                        <p><b>Rating: {{ PDrating }}</b></p>
                        <p><b>ID: {{ PDCode }}</b></p>
                        <h5>Name: {{ PDName }}</h5>
                        <h4>{{PDPrice.formattedValue}}</h4>
                        <p>{{PDSummary}}</p>
                    </div>
                </div>
                `,
    props: ['modelData']
};
export default ProductDetailsTemplate;
