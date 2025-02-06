interface MovieItem {
  item: any;
  onDetails: (param: any) => void;
}

const MovieItem = ({ item, onDetails }: MovieItem) => {
  function onDetailHandler() {
    onDetails(item.id);
  }

  return (
    <div className="card" onClick={onDetailHandler}>
      <span key={item.id}>{item.title}</span>
    </div>
  );
};

export default MovieItem;
