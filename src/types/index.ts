export type  AlertType = 'success' | 'error' | 'warning' | 'info';
//ALERTBOX INTERFACE
export interface AlertBoxProps {
    type: AlertType;
    message: string;
    onClose?: () => void;
    children?: React.ReactNode;
}

// USER INTERFACE
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
}

// USER PROFILE CARD PROP INTERFACE
export interface UserProfileCardProps {
    user: User;
    showEmail?: boolean;
    showRole?: boolean;
    onEdit?: (userId: string) => void;
    children?: React.ReactNode;
}

// PRODUCT INTERFACE
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
    inStock: boolean;
}

// PRODUCT DISPLAY PROP INTERFACE
export interface ProductDisplayProps {
    product: Product;
    showDescription?: boolean;
    showStockStatus?: boolean;
    onAddToCart?: (productId: string) => void;
    children?: React.ReactNode;
}