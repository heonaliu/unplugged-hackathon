import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const Newsletters = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      addDoc(collection(db, "newsletter"), {
        first: form.firstName,
        last: form.lastName,
        email: form.email,
        time: serverTimestamp(),
      });

      setForm({
        firstName: "",
        lastName: "",
        email: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section className="py-16 px-6 bg-beige text-center">
      <h1 className="text-orange font-rubikOne text-5xl font-bold mb-12">
        Newsletters
      </h1>
        <p className="text-lg text-bluegray mb-8">
          Stay in the loop about Unplugged. Subscribe for updates, opportunities, and upcoming events!
        </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-4 mr-6">
          <label
            htmlFor="firstName"
            className="block text-lg font-medium text-bluegray"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleOnChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange focus:border-orange"
            required
          />
        </div>

        <div className="mb-4 mr-6">
          <label
            htmlFor="lastName"
            className="block text-lg font-medium text-bluegray"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleOnChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange focus:border-orange"
            required
          />
        </div>

        <div className="mb-4 mr-6">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-bluegray"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleOnChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange focus:border-orange"
            required
          />
        </div>
        <button
          type="submit"
          className="border-none inline-block mt-12 bg-purple text-white px-6 py-2 rounded-xl text-lg transition-transform duration-300 ease-in-out hover:bg-purple/95 no-underline"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};
