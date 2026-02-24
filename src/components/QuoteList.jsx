import { useEffect, useState } from "react";

function QuoteList() {
  const [quotes, setQuotes] = useState([]);
  const [expired, setExpired] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("quotes")) || [];
    setQuotes(saved);

    const expiredQuotes = saved.filter((q) => {
      const days =
        (Date.now() - new Date(q.dateSent)) /
        (1000 * 60 * 60 * 24);
      return days > 30 && q.status === "Pending";
    });

    setExpired(expiredQuotes);
  }, []);

  const updateStatus = (id, newStatus) => {
    const updated = quotes.map((q) =>
      q.id === id ? { ...q, status: newStatus } : q
    );
    setQuotes(updated);
    localStorage.setItem("quotes", JSON.stringify(updated));
  };

  const statusStyle = (status) => {
    if (status === "Won") return "bg-green-100 text-green-700";
    if (status === "Lost") return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  if (quotes.length === 0)
    return <p className="mt-6 text-gray-500">No quotations yet.</p>;

  return (
    <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">

      {/* EXPIRED ALERT */}
      {expired.length > 0 && (
        <div className="mb-6 bg-red-100 text-red-700 p-4 rounded-lg">
          ⚠️ {expired.length} quotation(s) are older than 30 days!
          Follow up with customers.
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6">
        Saved Quotations
      </h2>

      <table className="w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Quote No</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Value</th>
            <th className="p-3">Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {quotes.map((q) => {
            const days =
              (Date.now() - new Date(q.dateSent)) /
              (1000 * 60 * 60 * 24);

            const isExpired =
              days > 30 && q.status === "Pending";

            return (
              <tr
                key={q.id}
                className={`bg-gray-50 hover:bg-gray-100 ${
                  isExpired ? "border-l-4 border-red-500" : ""
                }`}
              >
                <td className="p-3 font-medium">
                  {q.quoteNumber}
                </td>
                <td className="p-3">{q.customer}</td>
                <td className="p-3 font-semibold">
                  R {q.value}
                </td>
                <td className="p-3">{q.dateSent}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyle(
                      q.status
                    )}`}
                  >
                    {q.status}
                  </span>
                </td>

                <td className="p-3 space-x-2">
                  <button
                    onClick={() => updateStatus(q.id, "Won")}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Won
                  </button>

                  <button
                    onClick={() => updateStatus(q.id, "Lost")}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Lost
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default QuoteList;
