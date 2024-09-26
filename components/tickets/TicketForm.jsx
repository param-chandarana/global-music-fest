"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function TicketForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submissionStatus, setSubmissionStatus] = useState("");

  const onSubmit = (data) => {
    // Simulate form submission
    console.log(data);
    setSubmissionStatus("Tickets booked successfully!");
  };

  return (
    <main className="py-16 px-8 bg-gray-100">
      <section className="container mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-8">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`border rounded-lg p-2 w-full ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address"
                }
              })}
              className={`border rounded-lg p-2 w-full ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="tickets">Number of Tickets</label>
            <input
              id="tickets"
              type="number"
              {...register("tickets", { 
                required: "Number of tickets is required",
                min: {
                  value: 1,
                  message: "At least one ticket is required"
                }
              })}
              className={`border rounded-lg p-2 w-full ${errors.tickets ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.tickets && <p className="text-red-500 text-xs mt-1">{errors.tickets.message}</p>}
          </div>

          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>

        {submissionStatus && <p className="mt-4 text-green-500 text-center">{submissionStatus}</p>}
      </section>
    </main>
  );
}
