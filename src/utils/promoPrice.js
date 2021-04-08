export const promoPrice = ( price, discount ) => {
  return price - (price / 100 * discount);
};