import { Search } from 'lucide-react';

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-500 text-white h-12 flex items-center justify-between px-4 z-50 shadow-md">
      <div className="text-lg font-bold">腾讯新闻</div>
      <div className="flex items-center bg-blue-400 rounded-full px-3 py-1 text-sm w-40">
        <Search size={16} className="mr-2 text-blue-100" />
        <span className="text-blue-100">搜索</span>
      </div>
    </div>
  );
}
