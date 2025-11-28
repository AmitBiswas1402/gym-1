"use client";
import Link from "next/link";

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-12">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* MEMBERS CARD */}
          <Link href="/admin/members">
            <div className="cursor-pointer bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-md hover:shadow-green-500/20 hover:border-green-500 transition">
              <h2 className="text-2xl font-semibold text-green-400 mb-3">
                Manage Members
              </h2>
              <p className="text-gray-300">
                View all registered gym members, check their plans, programs,
                membership duration, and active/expired status.
              </p>
            </div>
          </Link>

          {/* TRAINERS CARD */}
          <Link href="/admin/trainers">
            <div className="cursor-pointer bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-md hover:shadow-purple-500/20 hover:border-purple-500 transition">
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">
                Manage Trainers
              </h2>
              <p className="text-gray-300">
                View all registered gym trainers, their specialization, and
                membership plans.
              </p>
            </div>
          </Link>

          {/* FUTURE FEATURE PLACEHOLDER */}
          {/* <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-gray-500 opacity-60">
            <h2 className="text-2xl font-semibold mb-3">
              Analytics (Coming Soon)
            </h2>
            <p>
              Membership growth, revenue, active vs expired reports.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-gray-500 opacity-60">
            <h2 className="text-2xl font-semibold mb-3">
              Trial Bookings (Coming Soon)
            </h2>
            <p>
              Manage free trial bookings and inquiries.
            </p>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default AdminPage;
