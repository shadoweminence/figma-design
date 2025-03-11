// lolcalStorage for favorites over here

interface Fav {
  id: number;

  productId: number;
  name: string;
  price: number;
}

export const getLocalFavItems = (): Fav[] => {
  const data = localStorage.getItem("favItem");
  return data ? JSON.parse(data) : [];
};

export const setLocalfavItems = (items: Fav[]): void => {
  localStorage.setItem("favItem", JSON.stringify(items));
};

// localStorage for carts over here
interface Cart {
  id: number;
  productId: number;
  name: string;
  price: number | undefined;
}

export const getLocalCart = (): Cart[] => {
  const data = localStorage.getItem("cartItem");
  return data ? JSON.parse(data) : [];
};

export const setLocalCart = (items: Cart[]): void => {
  localStorage.setItem("cartItem", JSON.stringify(items));
};
