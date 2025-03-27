"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Registration = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  paymentConfirmed: string;
  registrationDate: string;
};

const ParticipantsPage = () => {
  const [participants, setParticipants] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await fetch("/api/event-registration");

        if (!response.ok) {
          throw new Error("Failed to fetch participants");
        }

        const data = await response.json();
        setParticipants(data.registrations);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-accent-primary p-4">
        <Link href="/" className="flex items-center text-white">
          <ArrowLeft className="mr-2" />
          <span>Back to Event</span>
        </Link>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8">
        <h1 className="mb-6 text-2xl font-bold">NFT Workshop Participants</h1>

        {isLoading && (
          <div className="flex justify-center py-10">
            <div className="border-accent-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-4 text-red-500">
            {error}
          </div>
        )}

        {!isLoading && !error && participants.length === 0 && (
          <div className="rounded-lg bg-gray-50 p-8 text-center">
            <p className="text-gray-500">
              No participants have registered yet.
            </p>
          </div>
        )}

        {participants.length > 0 && (
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Payment Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Registration Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {participants.map((participant) => (
                  <tr key={participant.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">
                        {participant.firstName} {participant.lastName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {participant.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {participant.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          participant.paymentConfirmed === "CONFIRMED"
                            ? "bg-green-100 text-green-800"
                            : participant.paymentConfirmed === "FAILED"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {participant.paymentConfirmed.toLowerCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(
                        participant.registrationDate,
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParticipantsPage;
