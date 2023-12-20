// ListQuotes.js
import React from "react";
import { useQuoteContext } from "../QuoteContext";
import ItemQuote from "./ItemQuote";
import '../MyQuotes.css';
function ListQuotes() {
  const { quotes } = useQuoteContext();

  return (
    <div className='add_block_container'>
      {quotes && quotes.map((quote, index) => (
        <div key={index} className="random_block">
          <ItemQuote quote={quote} />
        </div>
      ))}
    </div>
  );
}

export default ListQuotes;
