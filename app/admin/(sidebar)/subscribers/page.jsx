"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "../../../../hooks/useAdminAuth";

function Page() {
  const router = useRouter();
  const { user, loading } = useAdminAuth();
  const [subscriber, setSubscriber] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    async function fetchSubscriber() {
      setFetching(true);
      try {
        const res = await fetch("/api/subscribe");
        if (!res.ok) throw new Error("Failed to fetch subscribers");
        const data = await res.json();
        setSubscriber(data.subscribers);
        console.log(data.subscribers);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      } finally {
        setFetching(false);
      }
    }

    if (!loading && user) {
      fetchSubscriber();
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
      ) : subscriber.length > 0 ? (
        <div className="overflow-auto">
          <table className="w-full border-collapse border border-gray-500">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-500 p-2">Serial</th>
                <th className="border border-gray-500 p-2">Id</th>
                <th className="border border-gray-500 p-2">Name</th>
                <th className="border border-gray-500 p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {subscriber.slice().reverse().map((subscriber, index) => (
                <tr key={subscriber._id} className="hover:bg-gray-100">
                  <td className="border border-gray-500 p-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    {subscriber._id}
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    {subscriber.name}
                  </td>
                  <td className="border border-gray-500 p-2 text-center">
                    {subscriber.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-5xl font-bold mt-8 text-center">
          No Subscribers
        </h1>
      )}
    </div>
  );
}

export default Page;
