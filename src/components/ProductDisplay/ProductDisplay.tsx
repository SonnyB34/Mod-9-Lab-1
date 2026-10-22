import type { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}) => {
  return (
    <div className="flex justify-center items-center">
    <div className="mt-8">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48" />
      <h2 className="pt-5 text-center font-medium text-xl">{product.name}</h2>
        <h3 className="text-center text-xl">${product.price}</h3>
        {showDescription && <p className="text-center">{product.description}</p>}
        {showStockStatus && (
          <p className="text-center">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
        )}
        <div className="flex justify-center items-center">
        <button
          onClick={() => onAddToCart?.(product.id)}
          className="bg-blue-500 p-2 w-sm text-white rounded-sm">
          Add to Cart
        </button>
        </div>
        <span className="text-center">{children}</span>
        
      </div>
      </div>
  );
};
