import { useState, useEffect } from "react";

function AddQuoteForm({ saveQuote, editingQuote }) {

  const [form, setForm] = useState({
    id: null,
    customer: "",
    company: "",
    brand: "SMC",
    partNumber: "",
    qty: "",
    price: "",
    status: "Draft"
  });

  useEffect(() => {
    if (editingQuote) setForm(editingQuote);
  }, [editingQuote]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveQuote(form);

    setForm({
      id: null,
      customer: "",
      company: "",
      brand: "SMC",
      partNumber: "",
      qty: "",
      price: "",
      status: "Draft"
    });
  };

  return (
    <form onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-3 mb-6">

      <input className="input"
        name="customer"
        placeholder="Customer Name"
        value={form.customer}
        onChange={handleChange}
      />

      <input className="input"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
      />

      <select className="input"
        name="brand"
        value={form.brand}
        onChange={handleChange}
      >
        <option>SMC</option>
        <option>Festo</option>
      </select>

      <input className="input"
        name="partNumber"
        placeholder="Part Number (e.g. AMD70D-F10-B)"
        value={form.partNumber}
        onChange={handleChange}
      />

      <input className="input"
        type="number"
        name="qty"
        placeholder="Quantity"
        value={form.qty}
        onChange={handleChange}
      />

      <input className="input"
        type="number"
        name="price"
        placeholder="Unit Price"
        value={form.price}
        onChange={handleChange}
      />

      <select className="input"
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option>Draft</option>
        <option>Sent</option>
        <option>Won</option>
        <option>Lost</option>
      </select>

      <button className="col-span-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
        {editingQuote ? "Update Quote" : "Add Quote"}
      </button>

    </form>
  );
}

export default AddQuoteForm;