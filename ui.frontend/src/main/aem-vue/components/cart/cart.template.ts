const CartTemplate = {
    /*html*/
    template: `<div class="cart">
                    <div class="cart-details-wrapper">
                        <h2 class="cx-total"> Cart #{{currentCartID}} </h2>
                        <table class="w-full" role="table" border="1">
                            <thead>
                                <tr role="row" class="cx-item-list-header">
                                    <th width="40%" role="columnheader" class="cx-item-list-desc"> Description </th>
                                    <th role="columnheader" class="text-center"> Qty </th>
                                    <th role="columnheader" class="text-center"> Total </th>
                                    <th role="columnheader" class="text-center"> Actions </th>
                                </tr>
                            </thead>

                            <tbody >
                                <tr v-for="item in cartData.orderEntries">
                                    <td>
                                        <div class="flex">
                                            <a tabindex="0" :href="item.product.url">
                                                <img width="80" src="https://spartacus-demo.eastus.cloudapp.azure.com:8443/medias/?context=bWFzdGVyfGltYWdlc3wxNDYyfGltYWdlL2pwZWd8YVcxaFoyVnpMMmd5TUM5b1pqWXZPRGM1TnpNeE1qYzNPREkzTUM1cWNHY3wyMzE2ZGRiNDhhM2RhODIxYmIwMWNiYTJhYTE1NzAxZmYxNjJkNDU3NWNjYzg0ODgyYTRhZWZiNDU5YzZmNDk2" srcset="https://spartacus-demo.eastus.cloudapp.azure.com:8443/medias/?context=bWFzdGVyfGltYWdlc3wxNDYyfGltYWdlL2pwZWd8YVcxaFoyVnpMMmd5TUM5b1pqWXZPRGM1TnpNeE1qYzNPREkzTUM1cWNHY3wyMzE2ZGRiNDhhM2RhODIxYmIwMWNiYTJhYTE1NzAxZmYxNjJkNDU3NWNjYzg0ODgyYTRhZWZiNDU5YzZmNDk2 65w" alt="DSC-N1">
                                            </a>
                                            <div class="ml-4">
                                                <div class="cx-name">
                                                    <a class="cx-link" :href="item.product.url">{{item.product.name}}</a>
                                                </div>
                                                <div class="cx-code"> ID {{item.product.code}}</div>
                                                <div class="cx-price">
                                                    <div class="cx-value"> $ {{item.totalPrice.value/item.quantity}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="product-details__add-to-cart">
                                            <button type="button" tabindex="0" aria-label="Remove one" @click="item.quantity--"> - </button>
                                            <input type="number" step="1" tabindex="0" aria-label="Quantity" class="" min="1" max="50" v-model="item.quantity">
                                            <button type="button" tabindex="0" aria-label="Add one more" @click="item.quantity++"> + </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-center">$ {{item.totalPrice.value}}</div>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-tertiary" aria-label="Remove Product from Cart"> Remove </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="cart-summery">
                        <h5 class="mb-4">ORDER SUMMARY</h5>
                        <div class="cart-summery__item">
                            <span>Subtotal after<br> discounts:</span>
                            <span>$ {{totalPrice}}</span>
                        </div>
                        <div class="cart-summery__item">
                            <span>Estimated shipping:</span>
                            <span>TBD</span>
                        </div>
                        <div class="cart-summery__item">
                            <span><strong>Total:</strong></span>
                            <span>$ {{totalPrice}}</span>
                        </div>
                    </div>
                </div>`,
    props: ['modelData']
};
export default CartTemplate;
