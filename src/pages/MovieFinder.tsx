import InputFilter from 'components/input-items/InputFilter';
import MovieList from 'components/movie-list/MovieList';

const MovieFinder = () => {
  // customize the InputFilter
  const inputFilterSetup = {
    waitForKey: 3,
    waitForMsec: 1000,
    clearWhenDelete: true,
  };

  return (
    <section>
      <div>
        <InputFilter {...inputFilterSetup} />
      </div>
      <article className="result">
        <MovieList />
      </article>
    </section>
  );
};

export default MovieFinder;
