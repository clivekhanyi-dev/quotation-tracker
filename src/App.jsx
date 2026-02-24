import AddQuoteForm from "./components/AddQuoteForm";
import QuoteList from "./components/QuoteList";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Quotation Tracker 📊
      </h1>

      <AddQuoteForm />
      <QuoteList />
    </div>
  );
}

export default App;
