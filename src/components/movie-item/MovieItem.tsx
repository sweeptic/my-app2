interface MovieItem {
  item: any;
  onDetails?: (param: any) => void;
  onlyDetail?: boolean;
}

const MovieItem = ({ item, onDetails, onlyDetail }: MovieItem) => {
  function onDetailHandler() {
    if (onDetails) {
      onDetails(item.id);
    }
  }

  return (
    <div className="card" onClick={onDetailHandler}>
      <div>
        <h4>{item.title}</h4>
      </div>
      <div>
        <span>{item.overview}</span>
      </div>
      <div>
        <h5>{item.itemCategories}</h5>
      </div>
      <div>{/* <span>categories: {item.categories}</span> */}</div>
    </div>
  );
};

export default MovieItem;
