import { useState, useEffect } from "react";
import AddQuoteForm from "./components/AddQuoteForm";
import QuoteList from "./components/QuoteList";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [editingQuote, setEditingQuote] = useState(null);

  // Load quotes
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quotes"));
    if (saved) setQuotes(saved);
  }, []);

  // Save quotes
  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  const saveQuote = (quote) => {
    if (editingQuote) {
      setQuotes(quotes.map(q => q.id === quote.id ? quote : q));
      setEditingQuote(null);
    } else {
      setQuotes([...quotes, { ...quote, id: Date.now() }]);
    }
  };

  const deleteQuote = (id) =>
    setQuotes(quotes.filter(q => q.id !== id));

  const editQuote = (quote) => setEditingQuote(quote);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-200 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-6">

        <h1 className="text-3xl font-bold mb-6 text-blue-700">
          Industrial Quotation Tracker 📊
        </h1>

        <AddQuoteForm
          saveQuote={saveQuote}
          editingQuote={editingQuote}
        />

        <QuoteList
          quotes={quotes}
          deleteQuote={deleteQuote}
          editQuote={editQuote}
        />

      </div>
    </div>
  );
}

export default App;