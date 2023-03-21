import axios from "axios";

export const AllProducts = () => async (dispatch) => {
    await axios
      .get("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then((res) => {
        dispatch({ type: "AllData", payload: res.data.products });
      });
  };




export const Singleproduct = (id) => async (dispatch) => {
    await axios
      .get("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then((res) => {
        res.data.products.map((r, i) => {
          if (r.id === +id) {
            dispatch({ type: "SingleProduct", payload: r });
          }
        });
      });
  };