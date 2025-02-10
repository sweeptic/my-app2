interface MovieItem {
  item: any;
  onDetails?: (param: any) => void;
  details?: boolean;
}

const MovieItem = ({ item, onDetails, details }: MovieItem) => {
  function onDetailHandler() {
    if (onDetails) {
      onDetails(item.id);
    }
  }

  return (
    <div className="card" onClick={onDetailHandler}>
      <div>
        <h4>
          {item.title} - {item.id}
        </h4>
      </div>
      <div>
        <span>{item.overview}</span>
      </div>
      <div>
        <h5>{item.itemCategories}</h5>
      </div>
    </div>
  );
};

export default MovieItem;
