import { CartProvider } from './contexts/CartContext';
import { DrugProvider } from 'contexts/DrugContext';

import Layout from './modules/Layout/Layout';

const App = () => {
  return (
    <CartProvider>
      <DrugProvider>
        <Layout />
      </DrugProvider>
    </CartProvider>
  );
};

export default App;
