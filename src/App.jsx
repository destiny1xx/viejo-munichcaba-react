import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Packs from "./components/Packs";
import ComoComprar from "./components/ComoComprar";
import Delivery from "./components/Delivery";
import About from "./components/About";
import Contact from "./components/Contact";
import Carrito from "./components/Carrito";
import Transicion from "./components/Transicion";
import BotonWhatsapp from "./components/BotonWhatsapp";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  const removeOneFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeAllFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
  };

  const clearCart = () => setCart([]);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-clip">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      <Hero />

      <Transicion>
        <Products onAddToCart={addToCart} />
      </Transicion>

      <Transicion>
        <Packs onAddToCart={addToCart} />
      </Transicion>

      <Transicion>
        <ComoComprar />
      </Transicion>

      <Transicion>
        <Delivery />
      </Transicion>

      <Transicion>
        <About />
      </Transicion>

      <Transicion>
        <Contact />
      </Transicion>

      <BotonWhatsapp
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <Carrito
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onAdd={addToCart}
        onRemoveOne={removeOneFromCart}
        onRemoveAll={removeAllFromCart}
        onClear={clearCart}
      />
    </div>
  );
}

export default App;
