import type { ProductDisplayProps } from "../../types";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    showDescription,
    showStockStatus,
    onAddToCart,
    children
}) => {
    return (
        <div className="mt-8">
            <img src={product.imageUrl} className="w-screen h-150"/>
            <h2 className="mt-8">{product.name}</h2>
            <h3>{product.price}</h3>
            {showDescription && <p>{product.description}</p>}
            {showStockStatus && <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>}
            <button onClick={() => onAddToCart?.(product.id)} className="bg-blue-500 p-2 w-sm text-white">Add to Cart</button>
            {children}
        </div>
    )
}