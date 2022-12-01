import { useDispatch, useSelector } from "react-redux";
import Error from "./components/error";
import News from "./components/news/news";
import { getLatestNewsAction, getNews } from "./redux/actions/actionsCreators";

const App = () => {
  const latestNews = useSelector((store) => store?.news?.latestNews || []);
  const popularNews = useSelector((store) => store?.news?.popularNews || []);
  const error = useSelector((store) => store.error);
  const dispatch = useDispatch();

	console.log(error)

  const handleNews = () => {
    dispatch(getNews());
  };

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      {error.isError && <Error error={error} />}
      <News news={latestNews} title="Latest News" />
      <News news={popularNews} title="Popular News" />
    </div>
  );
};

export default App;
