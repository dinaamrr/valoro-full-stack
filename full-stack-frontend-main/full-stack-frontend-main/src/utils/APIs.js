import Axios from "axios";
Axios.defaults.withCredentials = true;

// --------------------------------- CART ------------------------------------------

//data = {product_id: XXX}

export const addToCart = (data) =>
    Axios.post("http://localhost:5001/cart/get-cart").then(res => {

        if (!res.data.message) {

            let result = res.data.filter(item => {
                return item.product_id === data.product_id
            });

            if (result.length > 0) {
                data.quantity = result[0].quantity + 1;
                updateCart(data);
            }
            else {
                Axios.post("http://localhost:5001/cart/add-to-cart", data);
            }
        }
        else {
            Axios.post("http://localhost:5001/cart/add-to-cart", data);
        }

    })

export const getCart = () =>
    Axios.post("http://localhost:5001/cart/get-cart")

//data = {product_id: XXX}
export const deleteFromCart = (data) =>
    Axios.post("http://localhost:5001/cart/delete-from-cart", data)

export const deleteAllCart = () =>
    Axios.post("http://localhost:5001/cart/delete-cart")

//data = {product_id: XXX, quantity: XXX}
export const updateCart = (data) =>
    Axios.post("http://localhost:5001/cart/update-cart", data)


// --------------------------------- PROMO ------------------------------------------

//data = {promo_code: XXX, status: XXX}
export const updatePromo = (data) =>
    Axios.post("http://localhost:5001/promo/update-promo", data)

//data = {promo_code: XXX, discount: XXX}
export const addPromo = (data) =>
    Axios.post("http://localhost:5001/promo/add-promo", data)

export const checkPromo = (data) =>
    Axios.post("http://localhost:5001/promo/check-promo", data)


// --------------------------------- ORDER ------------------------------------------

//data = { promo_code: XXX }
export const addOrder = (data) =>
    Axios.post("http://localhost:5001/orders/add-order", data)

export const getAllOrders = () =>
    Axios.post("http://localhost:5001/orders/get-all-orders")

export const deleteOrder = () =>
    Axios.post("http://localhost:5001/orders/delete-order")

export const getMyOrder = (data) =>
    Axios.post("http://localhost:5001/orders/get-my-order", data)


// --------------------------------- USER ------------------------------------------

//data = {email, password, type, address, date_of_birth, full_name }
export const addUser = (data) =>
    Axios.post("http://localhost:5001/users/add-user", data)

export const isAuth = () =>
    Axios.get("http://localhost:5001/users/isAuth")

//data = {email, password}
export const login = (data) =>
    Axios.post("http://localhost:5001/users/login", data)

export const getAllUsers = () =>
    Axios.post("http://localhost:5001/users/get-all-users")

export const logout = () =>
    Axios.post("http://localhost:5001/users/logout")

// --------------------------------- PRODUCT ------------------------------------------

//data = {product_id}

export const getProduct = (data) =>
    Axios.post("http://localhost:5001/products/get-product", data)

export const getAllProducts = () =>
    Axios.post("http://localhost:5001/products/get-all-products")
