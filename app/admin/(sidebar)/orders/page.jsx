"use client";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useAdminAuth } from "../../../../hooks/useAdminAuth";

function Page() {
  const router = useRouter();
  const { user, loading } = useAdminAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/admin");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className='absolute inset-0'>
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-16 h-16 border-t-4 border-b-4 border-orange-500 border-solid rounded-full animate-spin"></div>
      </div>
      </div>
    );
  }

  return (
    <div>
      Welcome to the protected admin page!
    </div>
  );
}

export default Page;
