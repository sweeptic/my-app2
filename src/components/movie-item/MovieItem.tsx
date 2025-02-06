interface MovieItem {
  item: any;
}

const MovieItem = ({ item }: MovieItem) => {
  return (
    <div className="card">
      <span key={item.id}>{item.title}</span>
    </div>
  );
};

export default MovieItem;
