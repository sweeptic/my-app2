import InputFilterComp from 'components/input-items/InputFilter';

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
        <InputFilterComp {...inputFilterSetup} />
      </div>
      <article className="result">searchResult</article>
    </section>
  );
};

export default MovieFinder;
