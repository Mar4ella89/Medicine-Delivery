import { CartProvider } from './contexts/CartContext';

import Layout from './modules/Layout/Layout';

const App = () => {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
};

export default App;
