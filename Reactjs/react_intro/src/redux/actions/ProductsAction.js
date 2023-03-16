import axios from "axios";

export const AllProducts = () => async (dispatch) => {
    await axios
      .get("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then((res) => {
        dispatch({ type: "AllData", payload: res.data.products });
      });
  };