interface TestimonialCardProps {
  quote: string;
  name: string;
  business: string;
  industry: string;
}

const TestimonialCard = ({ quote, name, business, industry }: TestimonialCardProps) => {
  return (
    <div className="card">
      <div className="mb-4">
        <svg className="w-10 h-10 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-dark-500">{name}</p>
        <p className="text-sm text-gray-600">{business}</p>
        <p className="text-xs text-gray-500">{industry}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
