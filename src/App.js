import './App.css';
import CardDetails from './components/CardDetails.jsx';
import BankCard from './components/BankCard';
import BankCardBack from './components/BankCardBack.jsx';
import CatalogueItemCard from './components/CatalogueItemCard';
import CataloguePage from './components/CataloguePage';
import PaymentDetailsCard from './components/PaymentDetailsCard';
import TransactionHistoryPage from './components/TransactionHistoryPage';


function App() {
  return (
    <>
      {/* <BankCard cardNumber="1234 5678 9012 3456" expiryDate="05/22" /> */}
      {/* <BankCardBack cvv={'123'} /> */}
    {/* <TransactionHistoryPage /> */}
    <CardDetails />
    </>
  );
}

export default App;
