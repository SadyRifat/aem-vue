const ProductDetailsTemplate = {
    /*html*/
    template: `<div class="product-details">
                    <div class="product-details__wrapper">
                        <div class="product-details__img">
                            <div>
                                <img :src='PDImg' />
                            </div>
                            <div> 
                                <ul class="product-details__img-gallery">
                                    <li v-for="item in AllImg">
                                        <div v-if='item.format == "thumbnail"'>
                                            <img :src='imgURL + item.url' />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-details__content">
                            <h5>Name: {{ PDName }}</h5>
                            <p><b>Rating: {{ PDrating }}</b></p>
                            <br>
                            <p><small>ID: {{ PDCode }}</small></p>
                            <h3>{{PDPrice.formattedValue}}</h3>
                            <br>
                            <p>{{PDSummary}}</p>
                            <br>
                            <p class="mb-2"><b>Qty<b></p>
                            <div class="flex">
                                <div class="product-details__add-to-cart">
                                    <button type="button" tabindex="0" aria-label="Remove one" @click="IncProductCount(productCount)"> - </button>
                                    <input type="number" step="1" tabindex="0" aria-label="Quantity" class="" min="1" max="50" v-model="productCount">
                                    <button type="button" tabindex="0" aria-label="Add one more" @click={DecProductCount}> + </button>
                                </div>
                                <div class="product-details__stock">
                                    <p>{{PDStock.stockLevelStatus}}</p>
                                </div>
                            </div>

                            <div class="product-details__ship-policy">
                                <form novalidate="" class="">
                                    <div class="form-check">
                                        <input type="radio" role="radio" data-pickup="delivery" value="delivery" aria-label="Ship It (Free Return)" aria-checked="true">
                                        <label for="delivery-id:0.4eff6644e569f"> Ship It (Free Return) </label>
                                    </div>
                                    <div class="form-check">
                                    <input type="radio" role="radio" data-pickup="pickup" value="pickup" aria-label="Free Pickup In Store" aria-checked="false">
                                    <label for="">
                                        <p> Free Pickup In Store</p>
                                    </label>
                                    </div>
                                </form>
                            </div> 

                            <div class="product-details__cart-adding">
                                <button @click="addToCartFunc({PDCode, productCount})" class="product-details__addtocart btn">Add to cart</button>
                                <button class="product-details__addtowishlist">
                                    <span class="material-symbols-outlined">favorite</span>Add to wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <h5 class="mb-4">Product details</h5>
                        <p v-html="PDDetails"></p>
                    </div>

                    <div class="">{{updateCart}}</div>
                </div>
                `,
    props: ['modelData']
};
export default ProductDetailsTemplate;
