export default {
    template: `<div class="cmp-helloworld__item">
                    <p class="cmp-helloworld__item-label">Model message:</p>
                    <pre class="cmp-helloworld__item-output" data-cmp-hook-helloworld="model">Resource Path: {{ modelData.resourceType }}</pre>
                    <pre class="cmp-helloworld__item-output" data-cmp-hook-helloworld="model">Current Page Path: {{ modelData.currentPagePath }}</pre>
                    <div class="boxContainer">State Counter {{countNow}}</div>
                    <div class="boxContainer">
                        <div v-for="(entry, index) in cartList" :key="index">
                            <div>Product Name: {{ entry.product.name }}</div>
                            <div>Quantity: {{ entry.quantity }}</div>
                            <div>Base Price: {{ entry.basePrice.formattedValue }}</div>
                            <div>Total Price: {{ entry.totalPrice.formattedValue }}</div>
                        </div>
                    </div>
                    <div class="boxContainer">Grand Total: {{grandTotal}}</div>
                </div>`,
    props: ['modelData']
};
