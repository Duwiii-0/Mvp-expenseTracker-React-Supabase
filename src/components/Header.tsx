import { User, UserPlus } from 'lucide-react';

const Header = () => {
  return (
    <div className="fixed top-10 right-20 z-10 bg-black/50 rounded-full">
      <div className="flex items-center justify-center text-lg">
          <div className="flex px-6 py-3 gap-6 text-white">
            <a href="/dashboard" className="">Dashboard</a>
            <a href="/transactions" className="">Transactions</a>
            <a href="/categories" className="">Categories</a>
          </div>
          <a href="/register" className='flex justify-center items-center gap-3 text-lg bg-black/70 rounded-full px-6 py-4'>
            <UserPlus size={25} className="text-white" />
            <span  className="text-white">Register</span>
          </a>
      </div>
    </div>
  );
};

export default Header;