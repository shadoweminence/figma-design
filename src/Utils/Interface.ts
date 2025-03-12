// interfaces or favItems start
export interface Fav {
  id: number;

  productId: number;
  name: string;
  price: number;
}

export interface FavState {
  items: Fav[];
  // productDescription : Cart |null;
}
// interfaces for favitems over

// interface for cartItems start
export interface Cart {
  id: number;
  productId: number;
  name: string;
  price: number | undefined;
}
export interface CartState {
  items: Cart[];
  // productDescription : Cart |null;
}

// interface for cart items over

// interface for products start
export interface Product {
  productId: number;
  image: string;
  alt?: string;
  discount: number;
  name: string;
  price: number;
  oldPrice: number;
  description: string;
  description1: string;
  stock: boolean;
}
export interface ProductProps {
  product: Product;
}
export interface MidNavProps {
  products: Product[];
}
// interface for products over

// interface for offers start
interface Offer {
  image: string;
  alt: string;
  discount: number;
  name: string;
}

export interface OfferProps {
  offer: Offer;
}
// interface for offers over

// interface for hints start
interface Hint {
  image: string;
  alt: string;

  name: string;
  description: string;
}

export interface HintProps {
  hint: Hint;
}
// interace for hints over

// interface for hamburger and navOptions start
export interface NavOption {
  title: string;
  options?: string[];
}
export interface NavOptionProps {
  nav: NavOption;
}
export interface HamProps {
  nav: NavOption[]; // Accepts an array now
}
//interface for hamburger and navOptions over

// interface for users start
interface User {
  name: string;
  surname: string;
  phone: string;
  messages: string;
  options: string;
}

export interface UserProps {
  user: User;
}
// interface for users over

// interface for top countries  start
interface Top {
  title: string;
  dropOptions: string[];
}

export interface TopProps {
  top: Top;
}
// interface for top countries over

// interface for utils start
interface Util {
  title: string;
  options: string[];
}

export interface UtilProps {
  util: Util;
}
// interface for utils over

// interface for events start
interface Event {
  image: string;
  alt: string;

  name: string;
  dateTime: string;
  description: string;
}

export interface EventProps {
  event: Event;
}
// interface for events over

// interface fro categories ostart
interface Category {
  image: string;
  alt?: string;
  name: string; // Product name
}
export interface CategoryProps {
  category: Category;
}
// interface for categories over

// interface for bundels start
interface Bundle {
  image?: string;
  alt?: string;
  description?: string;
  description1?: string;
}

export interface BundleProps {
  bundle: Bundle;
}
// interface for bundles over

// interface for ads start
interface Ad {
  image?: string;
  alt?: string;
  name?: string;
}

export interface AdProps {
  ad: Ad;
}
// interface for ads over
