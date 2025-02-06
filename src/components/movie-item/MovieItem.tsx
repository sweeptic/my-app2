interface MovieItem {
  item: any;
}

const MovieItem = ({ item }: MovieItem) => {
  return (
    <div>
      <span key={item.id}>{item.title}</span>
    </div>
  );
};

export default MovieItem;
