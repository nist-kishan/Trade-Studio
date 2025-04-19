import React from "react";

type Plan = {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
  tag?: string;
};

const pricingPlans: Plan[] = [
  {
    title: "Free",
    price: "$0",
    subtitle: "Perfect for getting started",
    features: ["Basic analytics", "Up to 5 projects", "Community support"],
    buttonText: "Get Started",
  },
  {
    title: "Pro",
    price: "$29",
    subtitle: "For growing businesses",
    features: [
      "Advanced analytics",
      "Up to 20 projects",
      "Priority support",
      "Custom domains",
    ],
    buttonText: "Start Free Trial",
    highlighted: true,
    tag: "Most Popular",
  },
  {
    title: "Business",
    price: "$99",
    subtitle: "For larger teams",
    features: [
      "Enterprise analytics",
      "Unlimited projects",
      "24/7 phone support",
      "Custom integrations",
      "SLA guarantee",
    ],
    buttonText: "Contact Sales",
  },
  {
    title: "Enterprise",
    price: "Custom",
    subtitle: "For organizations",
    features: [
      "Custom solutions",
      "Dedicated support team",
      "Custom contracts",
      "On-premise options",
      "Advanced security",
    ],
    buttonText: "Talk to Sales",
  },
];

const PlanCard: React.FC<Plan> = ({
  title,
  price,
  subtitle,
  features,
  buttonText,
  highlighted,
  tag,
}) => (
  <div
    className={`relative bg-white p-6 rounded-xl shadow-sm w-full max-w-xs border transition-transform hover:scale-[1.02] ${
      highlighted ? "border-blue-500" : "border-gray-200"
    }`}
  >
    {tag && (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
        {tag}
      </span>
    )}
    <h3 className="text-center font-semibold text-gray-900">{title}</h3>
    <p className="text-center text-3xl font-bold mt-2">
      {price}
      <span className="text-sm font-normal text-gray-500">/month</span>
    </p>
    <p className="text-center text-sm text-gray-500 mt-1">{subtitle}</p>

    <ul className="mt-4 mb-6 space-y-2 text-sm text-gray-700">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center">
          <span className="text-blue-600 mr-2">✔</span>
          {feature}
        </li>
      ))}
    </ul>

    <button
      className={`w-full py-2 rounded-md text-sm font-medium border ${
        highlighted
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "text-blue-600 border-blue-600 hover:bg-blue-50"
      } transition`}
    >
      {buttonText}
    </button>
  </div>
);

const Pricing = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="text-center px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Simple, transparent pricing
        </h1>
        <p className="mt-2 text-gray-600">
          Choose the perfect plan for your needs
        </p>

        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {pricingPlans.map((plan, idx) => (
            <PlanCard key={idx} {...plan} />
          ))}
        </section>

        <p className="mt-10 text-sm text-blue-600">
          Have questions? <a href="#" className="underline">Check our FAQ</a>
        </p>
      </main>
    </div>
  );
};

export default Pricing;
