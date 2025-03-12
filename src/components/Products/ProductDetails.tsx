import { useParams } from "react-router-dom";
import { Product } from "../../Utils/Interface";
import { products } from "../../Utils/Items";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<string>();
  const productId = parseInt(id ?? "0");

  const product: Product | undefined = products.find(
    (prod) => prod.productId === productId
  );

  if (!product) {
    return <p>product not found</p>;
  }

  const handle = () => {
    dispatch(
      addItems({
        productId: product.productId,
        name: product.name,
        price: product.price,
      })
    );

    toast("🦄 Added to Cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="product-details">
        <h1>{product.name}</h1>

        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>{product.description1}</p>
      </div>
      <button onClick={handle}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
