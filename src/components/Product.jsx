import { useLocation } from "react-router-dom";


const Product = () => {
    const location = useLocation();
    
    return (
        <div>
            {location?.state?.productName}
        </div>
    )
}

export default Product;
