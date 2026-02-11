import Header from './components/Header';
import BottomNav from './components/BottomNav';
import NewsList from './components/NewsList';
import { Info, Smartphone, Layers, Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-8 gap-16 font-sans">
      
      {/* Mobile Device Simulator */}
      <div className="w-[375px] h-[812px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-gray-900 relative overflow-hidden flex flex-col shrink-0 ring-4 ring-gray-300">
        {/* Notch/Status Bar Area */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-gray-900 z-[60] flex justify-center rounded-t-[2.5rem]">
            <div className="w-40 h-5 bg-black rounded-b-2xl"></div>
        </div>
        
        {/* App Header (with padding for status bar) */}
        <div className="pt-7 bg-blue-500 shrink-0">
            <Header />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 no-scrollbar">
            <NewsList />
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>

      {/* Right Side: Prototype Description */}
      <div className="w-96 bg-white p-8 rounded-2xl shadow-xl self-center animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Info size={24} />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-800">原型说明</h2>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Project Overview</p>
            </div>
        </div>
        
        <div className="space-y-6">
            <section>
                <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
                    <Smartphone size={18} className="text-blue-500" />
                    <h3>模拟腾讯新闻 APP</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-6">
                    这是一个基于 React 和 Tailwind CSS 构建的高保真移动端应用原型，展示了新闻信息流的核心交互体验。
                </p>
            </section>

            <section>
                <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
                    <Layers size={18} className="text-purple-500" />
                    <h3>主要功能模块</h3>
                </div>
                <ul className="list-disc list-outside text-sm text-gray-600 space-y-1 pl-10 marker:text-gray-400">
                    <li><span className="font-medium text-gray-700">顶部导航</span>：沉浸式状态栏与搜索入口</li>
                    <li><span className="font-medium text-gray-700">新闻流</span>：图文混排、置顶标识、无限滚动</li>
                    <li><span className="font-medium text-gray-700">底部菜单</span>：Tab 切换导航</li>
                </ul>
            </section>

            <section>
                <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
                    <Code size={18} className="text-green-500" />
                    <h3>技术实现</h3>
                </div>
                <div className="pl-6 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">React 18</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">Vite</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">Flexbox Layout</span>
                </div>
            </section>
        </div>
      </div>

    </div>
  );
}

export default App;
