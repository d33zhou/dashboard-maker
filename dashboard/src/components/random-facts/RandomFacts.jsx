import {useEffect, useState} from 'react';

const RandomFacts = props => {
  const [fact, setFact] = useState('');

  useEffect(() => {

    /* return object:
      {
        id
        text
        source
        source_url
        language
        permalink
      }
    */
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
      .then(res => res.json())
      .then(result => setFact(result.text));
      
  }, []);
  
  return (
    <div>
      {fact}
    </div>
  );
};

export default RandomFacts;