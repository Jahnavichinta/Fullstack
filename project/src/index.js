import ReactDOM from "react-dom/client";
import ProductsReviews from "./productReviews";
import DataFetch from "./datafetching";

const obj = document.getElementById("root");
const ref = ReactDOM.createRoot(obj);

ref.render(<DataFetch />);