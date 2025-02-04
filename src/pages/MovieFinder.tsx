import InputFilterComp from 'components/input-items/InputFilter';

const MovieFinder = () => {
  return (
    <section>
      <div>
        <InputFilterComp waitForKey={3} waitForMsec={1000} />
      </div>
      <article className="result">searchResult</article>
    </section>
  );
};

export default MovieFinder;
