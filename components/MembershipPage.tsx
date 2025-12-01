import Link from "next/link";

const memberships = [
  {
    title: "One Day Pass",
    price: "₹299",
    duration: "1 Day Access",
    features: [
      "Full Gym Access",
      "Locker Facility",
      "Shower & Changing Room",
      "Free Trainer Guidance",
    ],
    highlighted: false,
  },
  {
    title: "Monthly Membership",
    price: "₹2,499",
    duration: "30 Days Access",
    features: [
      "Unlimited Gym Access",
      "Group Classes (Zumba/Yoga)",
      "Personal Trainer Support",
      "Diet Consultation",
    ],
    highlighted: true, // Highlight this as the popular plan
  },
  {
    title: "Annual Membership",
    price: "₹19,999",
    duration: "1 Year Access",
    features: [
      "Unlimited Gym & Classes Access",
      "Personal Training (3 sessions/month)",
      "Custom Diet Plan",
      "Priority Support & Early Access",
    ],
    highlighted: false,
  },
];

const MembershipPage = () => {
  return (
    <div className="w-full h-screen text-white py-20 px-6 md:px-12 lg:px-20">
      <h1 className="text-5xl font-bold text-center mb-12 text-green-400">
        Membership Plans
      </h1>

      <div className="grid gap-10 md:grid-cols-3">
        {memberships.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 border transition-transform duration-200 shadow-lg hover:scale-105 ${
              plan.highlighted
                ? "bg-green-600 text-black border-green-400 shadow-green-400/40"
                : "bg-zinc-800 border-green-500"
            }`}
          >
            {/* Title */}
            <h2 className="text-3xl font-bold text-center mb-2">
              {plan.title}
            </h2>
            <p className="text-center text-gray-300 mb-6">{plan.duration}</p>

            {/* Price */}
            <div className="text-center mb-6">
              <span className="text-5xl font-extrabold">{plan.price}</span>
              {/* <p className="text-sm text-gray-400 mt-1">+ GST applicable</p> */}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-400">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="text-center">
              <Link href="/new-registry">
                <button
                  className={`w-full py-3 font-bold rounded-lg transition ${
                    plan.highlighted
                      ? "bg-black text-green-400 hover:bg-zinc-900"
                      : "bg-green-500 text-black hover:bg-green-600"
                  }`}
                >
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPage;
