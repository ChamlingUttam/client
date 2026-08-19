"use client";

import React, { useState } from "react";

type PaymentFormProps = {
  setPaymentForm: React.Dispatch<React.SetStateAction<any>>;
  onContinue: () => void;
};

const PaymentForm = ({
  setPaymentForm,
  onContinue,
}: PaymentFormProps) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setPaymentForm({
      cardName,
      cardNumber,
      expiryDate,
      cvv,
    });

    onContinue();
  };

  return (
    <div className="w-full max-w-xl p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Payment Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Card Holder Name */}
        <div>
          <label
            htmlFor="cardName"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Card Holder Name
          </label>

          <input
            type="text"
            id="cardName"
            name="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Enter card holder name"
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-black"
          />
        </div>

        {/* Card Number */}
        <div>
          <label
            htmlFor="cardNumber"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Card Number
          </label>

          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-black"
          />
        </div>

        {/* Expiry + CVV */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="expiryDate"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Expiry Date
            </label>

            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              maxLength={5}
              className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-black"
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="cvv"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              CVV
            </label>

            <input
              type="password"
              id="cvv"
              name="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              maxLength={4}
              className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-black"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;