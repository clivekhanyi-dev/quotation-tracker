import { useState } from "react";

function AddQuoteForm() {
  const [form, setForm] = useState({
    customer: "",
    company: "",
    quoteNumber: "",
    description: "",
    value: "",
    dateSent: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !form.customer ||
      !form.quoteNumber ||
      !form.value ||
      !form.dateSent
    ) {
      alert("Please fill required fields");
      return;
    }

    const saved =
      JSON.parse(localStorage.getItem("quotes")) || [];

    const newQuote = {
      id: Date.now(),
      ...form,
      status: "Pending",
    };

    localStorage.setItem(
      "quotes",
      JSON.stringify([...saved, newQuote])
    );

    alert("Quotation saved!");

    setForm({
      customer: "",
      company: "",
      quoteNumber: "",
      description: "",
      value: "",
      dateSent: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      <input
        name="customer"
        placeholder="Customer Name"
        value={form.customer}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="quoteNumber"
        placeholder="Quote Number"
        value={form.quoteNumber}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="description"
        placeholder="Product Description"
        value={form.description}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="value"
        type="number"
        placeholder="Value (Rand)"
        value={form.value}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="dateSent"
        type="date"
        value={form.dateSent}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Quotation
      </button>
    </form>
  );
}

export default AddQuoteForm;
