import React from "react";
import { LineChart, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: <LineChart className="h-8 w-8 text-indigo-600" />,
    title: "Advanced Analytics",
    description: "Real-time market analysis and predictive modeling.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
    title: "Educational Resources",
    description: "Comprehensive trading guides and tutorials.",
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-600" />,
    title: "Community Support",
    description: "Connect with experienced traders and mentors.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-[#f9fafb] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Features</h2>
        <p className="mt-4 text-lg text-gray-600">
          Everything you need to succeed in trading
        </p>

        <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
