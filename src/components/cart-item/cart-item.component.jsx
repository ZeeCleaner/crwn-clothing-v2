

import { CartItemContainer, ItemsDetails } from "./cart-item.styles"

const CartItem = ({cartItem}) =>{

    const {name, imageUrl, price, quantity } = cartItem
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemsDetails>
            <span >{name}</span>
            <span >{quantity} x ${price}</span>
            </ItemsDetails>

        </CartItemContainer>
    )
}

export default CartItem