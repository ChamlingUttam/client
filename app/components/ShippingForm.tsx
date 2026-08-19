"use client";

import React, { useState } from "react";

type ShippingFormProps = {
  setShippingForm: React.Dispatch<React.SetStateAction<any>>;
  onContinue: () => void;
};

const ShippingForm = ({
  onContinue,
  setShippingForm,
}: ShippingFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save shipping information in parent
    setShippingForm({
      name,
      email,
      phone,
      address,
    });

    // Move to step 3
    onContinue();
  };

  return (
    <div className="w-full max-w-xl p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Shipping Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-black"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-black"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-black"
          />
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Address
          </label>

          <textarea
            id="address"
            name="address"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your delivery address"
            className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-black"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
};

export default ShippingForm;