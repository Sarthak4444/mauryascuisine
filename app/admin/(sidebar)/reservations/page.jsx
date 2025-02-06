"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "../../../../hooks/useAdminAuth";

function Page() {
  const router = useRouter();
  const { user, loading } = useAdminAuth();
  const [tableReservation, setTableReservation] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    async function fetchTableReservation() {
      setFetching(true);
      try {
        const res = await fetch("/api/tablereservation");
        if (!res.ok) throw new Error("Failed to fetch table reservation");
        const data = await res.json();
        setTableReservation(data.tableReservations);
        console.log(data.tableReservations);
      } catch (error) {
        console.error("Error fetching table reservation:", error);
      } finally {
        setFetching(false);
      }
    }

    if (!loading && user) {
      fetchTableReservation();
    } else if (!loading && !user) {
      router.push("/admin");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="absolute inset-0">
        <div className="flex items-center justify-center h-screen bg-black">
          <div className="w-16 h-16 border-t-4 border-b-4 border-orange-500 border-solid rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 admin">
      {fetching ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-t-transparent border-orange-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : tableReservation.length > 0 ? (
        <div className="overflow-auto">
          <table className="w-full border-collapse border border-gray-500">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-500 p-2">Serial</th>
                <th className="border border-gray-500 p-2">Id</th>
                <th className="border border-gray-500 p-2">Date and Time</th>
                <th className="border border-gray-500 p-2">People</th>
                <th className="border border-gray-500 p-2">Name</th>
                <th className="border border-gray-500 p-2">Email</th>
                <th className="border border-gray-500 p-2">Number</th>
                <th className="border border-gray-500 p-2">Occasion</th>
                <th className="border border-gray-500 p-2">Note</th>
                <th className="border border-gray-500 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {tableReservation.slice().reverse().map((reservation, index) => (
                <tr key={reservation._id} className="hover:bg-gray-100">
                  <td className="border border-gray-500 p-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    {reservation._id}
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    {new Date(reservation.date).toLocaleDateString()} at{" "}
                    {reservation.time}:00
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    {reservation.people}
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    {reservation.name}
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    {reservation.email}
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    {reservation.number}
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    {reservation.occasion || "N/A"}
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    {reservation.note || "N/A"}
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    Confirmed
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-5xl font-bold mt-8 text-center">
          No Table Reservations
        </h1>
      )}
    </div>
  );
}

export default Page;
