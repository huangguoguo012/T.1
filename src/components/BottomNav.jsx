import { Home, Video, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-14 flex items-center justify-around z-50">
      <div className="flex flex-col items-center text-blue-600">
        <Home size={24} />
        <span className="text-xs mt-1">新闻</span>
      </div>
      <div className="flex flex-col items-center text-gray-500">
        <Video size={24} />
        <span className="text-xs mt-1">视频</span>
      </div>
      <div className="flex flex-col items-center text-gray-500">
        <User size={24} />
        <span className="text-xs mt-1">我的</span>
      </div>
    </div>
  );
}
