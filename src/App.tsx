// src/App.tsx
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';
import Header from './components/Header';
import PageTransition from './components/PageTransition';

// Pages
import Login from './pages/login';
import Auth from './pages/register';
import Dashboard from './pages/dashboard';
import Transactions from './pages/transactions';
import AddTransaction from './pages/newTransactions';
import Categories from './pages/categories';
import NotFound from './pages/notFound';

const MainLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <PageTransition>
      <main className="flex-grow overflow-hidden"> {/* 👈 key change */}
        <Outlet />
      </main>
    </PageTransition>
    <Footer />
  </div>
);


export default function App() {
  const location = useLocation();

  return (
    <>
      <Toaster />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Auth />} />
          
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/add-transaction" element={<AddTransaction />} />
            <Route path="/categories" element={<Categories />} />
          </Route>  

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
