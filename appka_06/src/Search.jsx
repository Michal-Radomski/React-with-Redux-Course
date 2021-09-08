import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  // React.useEffect(() => console.log(term));
  const [results, setResults] = useState([]);
  // console.log(results);
  useEffect(() => {
    //- Wariant 1 - rekomendowana przez React
    const searchWiki = async () => {
      const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      searchWiki();
    } else {
      const timeOutID = setTimeout(() => {
        if (term) {
          searchWiki();
        }
      }, 500);

      return () => {
        clearTimeout(timeOutID);
      };
    }

    //- Wariant 2
    // (async () => {
    //   await axios.get("https://api.example.com");
    // })();
    //- Wariant 3
    // axios.get("https://api.example.com").then((response) => {
    //   console.log(response.data);
    // });
  }, [term]); //+ Działenie ESlint'a - tu można to zignorować

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank" rel="noreferrer">
            Go There
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term:</label>
          <input value={term} onChange={(event) => setTerm(event.target.value)} className="input" />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
