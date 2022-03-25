

//send data and add to stroe localstroge
const addToDb = (id) => {
  const storCart = getCart();
  const quantity = storCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    storCart[id] = newQuantity;
  } else {
    storCart[id] = 1;
  }
  localStorage.setItem("user-order", JSON.stringify(storCart));
};
// create a local stroge object
const getCart = () => {
  let stortCart = {};
  const setCart = localStorage.getItem("user-order");
  if (setCart) {
    stortCart = JSON.parse(setCart);
  }
  return stortCart;
};
export { addToDb, getCart };

