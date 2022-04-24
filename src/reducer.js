export const initialState = {
    cart: [],
    user: null,
};

export const getCartTotal = (cart) => {
    var total = 0;
    for (var i = 0; i < cart?.length; i++) {
        total += cart[i].price;
    }
    return total;
    // return cart?.reduce(
    //     (total, item) => parseInt(total) + parseInt(item.price),
    //     parseInt(0)
    // );
    // console.log(total);
};

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case "DELETE_FROM_CART":
            // const index = state.cart.findIndex(
            //     (cartItem) => cartItem.key === action.key
            // );
            var index = -1;
            for (var i = 0; i < state.cart?.length; i++) {
                if (state.cart[i].id === action.id) {
                    index = i;
                    break;
                }
            }
            let newCart = [...state.cart];
            let newNewCart = [];
            // console.log(index + "m");

            if (index >= 0) {
                // newCart.splice(index, 1);
                for (var j = 0; j < newCart.length; j++) {
                    if (j !== index) {
                        newNewCart.push(newCart[j]);
                    }
                }
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as it is not in the cart!`
                );
            }
            // console.log(newNewCart);
            return {
                ...state,
                cart: newNewCart,
            };

        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "EMPTY_CART":
            return {
                ...state,
                cart: [],
            };

        default:
            return state;
    }
};

export default reducer;
