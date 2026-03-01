import QuoteItem from "./QuoteItem";

function QuoteList({ quotes, deleteQuote, editQuote }) {

  if (!quotes.length)
    return <p className="text-gray-500">No quotations yet.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-3 text-blue-700">
        Saved Quotes
      </h2>

      {quotes.map(q => (
        <QuoteItem
          key={q.id}
          quote={q}
          deleteQuote={deleteQuote}
          editQuote={editQuote}
        />
      ))}
    </div>
  );
}

export default QuoteList;