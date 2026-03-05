import { useMemo,useState } from 'react'
import type { Product } from "../src/Types/index";
import './App.css'

const PRODUCTS: Product[] = [
  {id: 1, name: "Pizza", price: 10, quantity: 5},
  {id: 2, name: "Burger", price: 12, quantity: 3},
];

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
    
  function addToCart(product: Product) {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }
   function changequantity(id: number, delta: number) {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  }

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return(
    <div className="Top">
      <h2>TRY LANG</h2>
      <div className="card">
        
      </div>
    </div>
  );
}

