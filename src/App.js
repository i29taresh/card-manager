import './App.css';
import CardDetails from './components/CardDetails.jsx';
import BankCard from './components/BankCard';
import BankCardBack from './components/BankCardBack.jsx';
import CatalogueItemCard from './components/CatalogueItemCard';
import CataloguePage from './components/CataloguePage';
import PaymentDetailsCard from './components/PaymentDetailsCard';
import TransactionHistoryPage from './components/TransactionHistoryPage';
import FrontPage from './components/FrontPage.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const cards = [
    {cardNumber:"1234 5678 9012 3456", expiryDate:"05/22"}, 
    {cardNumber:"3456 2257 2354 3456", expiryDate:"07/22"}, 
    {cardNumber:"2456 2268 6342 7563", expiryDate:"09/22"}, 
  ]
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontPage cards={cards} />,
    },
    {
      path: "/cardDetails",
      element: <CardDetails />
    },
    {
      path: "/catalogue",
      element: <CataloguePage />
    },
    {
      path: "/transactions",
      element: <TransactionHistoryPage />
    }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
