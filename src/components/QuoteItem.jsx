function QuoteItem({ quote, deleteQuote, editQuote }) {

  const total = quote.qty * quote.price;

  const statusColor = {
    Draft: "bg-gray-200",
    Sent: "bg-blue-200",
    Won: "bg-green-200",
    Lost: "bg-red-200"
  };

  return (
    <div className="border rounded-xl p-4 mb-3 shadow-sm bg-white">

      <div className="flex justify-between">

        <div>
          <h3 className="font-bold text-lg text-blue-700">
            {quote.customer} – {quote.company}
          </h3>

          <p>Brand: <b>{quote.brand}</b></p>
          <p>Part: <b>{quote.partNumber}</b></p>
          <p>Qty: {quote.qty} | Unit: R{quote.price}</p>
          <p>Total: <b>R{total}</b></p>

          <span className={`px-2 py-1 rounded ${statusColor[quote.status]}`}>
            {quote.status}
          </span>
        </div>

        <div className="space-x-2">
          <button
            onClick={() => editQuote(quote)}
            className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
          >
            Edit
          </button>

          <button
            onClick={() => deleteQuote(quote.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default QuoteItem;