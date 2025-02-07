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
      <span key={item.id}>{item.title}</span>
    </div>
  );
};

export default MovieItem;
