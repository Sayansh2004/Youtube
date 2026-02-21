export default function VideoCard({ info }) {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-72 p-2 shadow-lg">
      <img
        className="rounded-lg"
        src={thumbnails.high.url}
        alt={title}
      />

      <ul className="mt-2">
        <li className="font-semibold line-clamp-2">{title}</li>
        <li className="text-sm text-gray-600">{channelTitle}</li>
        <li className="text-sm text-gray-600">
          {statistics?.viewCount} views
        </li>
      </ul>
    </div>
  );
}