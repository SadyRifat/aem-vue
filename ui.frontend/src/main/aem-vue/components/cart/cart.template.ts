const CartTemplate = {
    /*html*/
    template: `<div class="cart">
                    <div class="cart-details-wrapper">
                        <h2 class="cx-total"> Cart #{{currentCartID}} </h2>

                        <div class="flex justify-between">
                            <div class="mb-4" style="color: #38871f" v-for="promo in cartData.appliedOrderPromotions">
                                <p><strong>{{promo.description}}</strong></p>
                            </div>
                            <div class="flex mb-4">
                                <button class="btn" @click="getSaveCart(currentUserID, currentCartID)">Saved carts</button>
                                <button class="btn ml-4" @click="addSaveCart(currentUserID, currentCartID)">Save cart for later</button>
                            </div>
                        </div>
                        
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
                                <tr v-for="item in cartData.entries" :key="item.product.code" >
                                    <td>
                                        <div class="flex">
                                            <a tabindex="0" :href="item.product.url">
                                                <div v-for="productImg in item.product.images">
                                                    <img width="80" v-if="productImg.format == 'product'" :src= 'domainUrl + productImg.url' />
                                                </div>
                                            </a>
                                            <div class="ml-4">
                                                <div class="cx-name">
                                                    <a class="cx-link" :href="item.product.url">{{item.product.name}}</a>
                                                </div>
                                                <div class="cx-code"> ID {{item.product.code}}</div>
                                                <div class="cx-price">
                                                    <div class="cx-value">{{item.basePrice.formattedValue}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="product-details__add-to-cart">
                                            <button type="button" tabindex="0" aria-label="Remove one"  @click="updateProductCount(currentUserID, currentCartID, item.entryNumber, item.quantity, 'decrease')"> - </button>
                                            <input type="number" step="1" tabindex="0" aria-label="Quantity" class="" min="1" max="50" v-on:blur="updateProductCount(currentUserID, currentCartID, item.entryNumber, item.quantity, 'insert')" v-model="item.quantity">
                                            <button type="button" tabindex="0" aria-label="Add one more" @click="updateProductCount(currentUserID, currentCartID, item.entryNumber, item.quantity, 'increase')"> + </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-center">$ {{item.totalPrice.value}}</div>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-tertiary" aria-label="Remove Product from Cart" @click="deleteProductItem(currentUserID, currentCartID, item.entryNumber)"> Remove </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="4">
                                        <div class="text-right">
                                            <button class="btn btn-danger" aria-label="Remove Product from Cart" @click="deleteCart(currentUserID, currentCartID, item.entryNumber)"> Clear Cart </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="cart-summery">
                        <h5 class="mb-4">ORDER SUMMARY</h5>
                        <div class="cart-summery__item">
                            <span>Total Discounts:</span>
                            <span>{{cartData.totalDiscounts.formattedValue}}</span>
                        </div>
                        <div class="cart-summery__item">
                            <span>Subtotal after<br> discounts:</span>
                            <span>{{cartData.subTotal.formattedValue}}</span>
                        </div>
                        <div class="cart-summery__item">
                            <span>Total Tax:</span>
                            <span>{{cartData.totalTax.formattedValue}}</span>
                        </div>
                        <div class="cart-summery__item">
                            <span><strong>Total:</strong></span>
                            <span><strong>{{cartData.totalPrice.formattedValue}}</strong></span>
                        </div>
                    </div>
                </div>`,
    props: ['modelData']
};
export default CartTemplate;
