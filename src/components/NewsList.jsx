import NewsItem from './NewsItem';
import { newsData } from '../data/mockData';

export default function NewsList() {
  return (
    <div className="bg-white">
      {newsData.map(news => (
        <NewsItem key={news.id} news={news} />
      ))}
      <div className="text-center text-gray-400 text-sm py-4">
        没有更多了
      </div>
    </div>
  );
}
