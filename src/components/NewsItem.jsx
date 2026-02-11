export default function NewsItem({ news }) {
  return (
    <div className="bg-white p-4 border-b border-gray-100 flex gap-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-colors">
      <div className="flex-1 flex flex-col justify-between h-20">
        <h3 className="text-base font-medium text-gray-800 line-clamp-2 leading-snug">
          {news.title}
        </h3>
        <div className="flex items-center text-xs text-gray-400 gap-2 mt-auto">
          {news.isTop && <span className="text-red-500 bg-red-50 px-1 rounded border border-red-100">置顶</span>}
          <span>{news.source}</span>
          <span>{news.comments}评</span>
          <span>{news.time}</span>
        </div>
      </div>
      {news.image && (
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-28 h-20 object-cover rounded-sm bg-gray-200 shrink-0"
        />
      )}
    </div>
  );
}
