"use client";

import { PaymentStatus } from "@prisma/client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    paymentConfirmed: "PENDING" as PaymentStatus,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/event-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const res = await response.json();
      console.log(res);

      if (!response.ok) {
        throw new Error("Failed to register: " + res.error);
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        paymentConfirmed: "PENDING",
      });
      setSuccessMessage("Registration successful!");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-accent-primary p-4">
        <Link href="/" className="flex items-center text-white">
          <ArrowLeft className="mr-2" />
          <span>Back to Event</span>
        </Link>
      </div>

      <div className="mx-auto max-w-md px-6 py-8">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Register for NFT Workshop
        </h1>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-4 text-red-500">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="mb-4 rounded-lg bg-green-50 p-4 text-green-500">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-accent-primary mb-2 block text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="focus:border-accent-primary w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-accent-primary mb-2 block text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="focus:border-accent-primary w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-accent-primary mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="focus:border-accent-primary w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-accent-primary mb-2 block text-sm font-medium">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="focus:border-accent-primary w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-accent-primary hover:bg-opacity-90 w-full rounded-lg px-4 py-3 text-center font-bold text-white disabled:opacity-70"
          >
            {isLoading ? "Processing..." : "Complete Registration"}
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            You'll receive a confirmation email after registration
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
