import InputFilter from 'components/input-items/InputFilter';

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
      <article className="result">searchResult</article>
    </section>
  );
};

export default MovieFinder;
