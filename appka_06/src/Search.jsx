import React, {useState, useEffect} from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  // React.useEffect(() => console.log(term));

  console.log("every render");
  useEffect(() => {
    console.log("scenario 3");
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term:</label>
          <input value={term} onChange={(event) => setTerm(event.target.value)} className="input" />
        </div>
      </div>
    </div>
  );
};

export default Search;
