import { IMovieDetailItem } from 'store/selectors/feature_selectors';

interface IMovieItem {
  item: IMovieDetailItem;
  details?: boolean;
  onDetails?: (param: number) => void;
}

const MovieItem = ({ item, onDetails, details }: IMovieItem) => {
  function onDetailHandler() {
    if (onDetails) {
      onDetails(item.id);
    }
  }

  return (
    <section className="card" onClick={onDetailHandler}>
      <article className="card__detail">
        <img
          className="card__picture-container"
          //   src={getPictureUrl(item.poster_path)}
          alt={`${item.title} picture here`}
        ></img>
        <div className="card__description-container">
          <aside>
            <span>Title:</span> {item.title}
          </aside>
          <aside>
            <span>Genre:</span> {item.itemCategories}
          </aside>
          <aside>
            <span>Release date:</span> {item.release_date}
          </aside>
          {details && (
            <aside>
              <span>Length:</span> {item.runtime} min
            </aside>
          )}
          {details && (
            <aside>
              <span>Country:</span> {item.production_countries}
            </aside>
          )}
          {/* {details && <div>{getImdbLink(item.imdb_id)}</div>} */}
        </div>
      </article>
      <div className="card__overview">
        {details && (
          <>
            <span>Overview:</span> {item.overview}
          </>
        )}
      </div>
    </section>
  );
};

export default MovieItem;
