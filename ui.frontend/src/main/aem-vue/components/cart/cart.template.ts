const CartTemplate = {
    /*html*/
    template: `<div class="cart">
                    <div class="cart-details-wrapper">
                        <p>Items added: {{cartLength}}</p>
                        <h2 class="cx-total"> Cart #{{currentCartID}} </h2>
                        <p>Buy over $200.00 get $20.00 discount on cart</p>
                        <table class="w-full" role="table" border="1">
                            <caption class="cx-visually-hidden"> Shopping cart contents. </caption>
                            <thead>
                                <tr role="row" class="cx-item-list-header">
                                    <th role="columnheader" class="cx-item-list-desc"> Description </th>
                                    <th role="columnheader" class="cx-item-list-qty"> Qty </th>
                                    <th role="columnheader" class="cx-item-list-total"> Total </th>
                                    <th role="columnheader" class="cx-item-list-actions"> Actions </th>
                                </tr>
                            </thead>

                            <tbody >
                                <tr role="row">
                                    <td>
                                        <div class="flex">
                                            <a tabindex="0" href="/electronics-spa/en/USD/product/358639/DSC-N1">
                                                <img width="80" src="https://spartacus-demo.eastus.cloudapp.azure.com:8443/medias/?context=bWFzdGVyfGltYWdlc3wxNDYyfGltYWdlL2pwZWd8YVcxaFoyVnpMMmd5TUM5b1pqWXZPRGM1TnpNeE1qYzNPREkzTUM1cWNHY3wyMzE2ZGRiNDhhM2RhODIxYmIwMWNiYTJhYTE1NzAxZmYxNjJkNDU3NWNjYzg0ODgyYTRhZWZiNDU5YzZmNDk2" srcset="https://spartacus-demo.eastus.cloudapp.azure.com:8443/medias/?context=bWFzdGVyfGltYWdlc3wxNDYyfGltYWdlL2pwZWd8YVcxaFoyVnpMMmd5TUM5b1pqWXZPRGM1TnpNeE1qYzNPREkzTUM1cWNHY3wyMzE2ZGRiNDhhM2RhODIxYmIwMWNiYTJhYTE1NzAxZmYxNjJkNDU3NWNjYzg0ODgyYTRhZWZiNDU5YzZmNDk2 65w" alt="DSC-N1">
                                            </a>
                                            <div class="ml-4">
                                                <div class="cx-name">
                                                    <a class="cx-link" href="/electronics-spa/en/USD/product/358639/DSC-N1">{{cartPDName}}</a>
                                                </div>
                                                <div class="cx-code"> ID {{cartPDID}}</div>
                                                <div class="cx-price">
                                                    <div class="cx-value"> $485.57 </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="cx-cart-addons">
                                        </div>
                                    </td>
                                    <td>
                                        <div class="product-details__add-to-cart">
                                            <button type="button" tabindex="0" aria-label="Remove one"> - </button>
                                            <input type="number" step="1" tabindex="0" aria-label="Quantity" class="" min="1" max="50" v-model="cartPDQty">
                                            <button type="button" tabindex="0" aria-label="Add one more"> + </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="cx-mobile-header"> Total </div>
                                        <!--div class="cx-value">$cartPDTotal}}</div-->
                                        <div class="cx-value">{{cartPDTotal}}</div>
                                    </td>
                                    <td>
                                        <button class="btn btn-tertiary cx-remove-btn" aria-label="Remove Product from Cart"> Remove </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                `,
    props: ['modelData']
};
export default CartTemplate;
