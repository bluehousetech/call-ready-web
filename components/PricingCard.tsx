import CTAButton from "./CTAButton";

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  highlighted?: boolean;
}

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  highlighted = false
}: PricingCardProps) => {
  return (
    <div className={`card relative ${highlighted ? 'ring-2 ring-primary-500 scale-105' : ''}`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-dark-500 mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold text-dark-500">{price}</span>
          <span className="text-gray-600">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className={`w-6 h-6 mr-2 flex-shrink-0 ${feature.included ? 'text-teal-500' : 'text-gray-300'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <CTAButton
        href="/contact"
        variant={highlighted ? "primary" : "secondary"}
        className="w-full"
      >
        Get Started
      </CTAButton>
    </div>
  );
};

export default PricingCard;
