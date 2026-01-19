import { Metadata } from "next";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Pricing - Call Ready",
  description: "Simple, transparent pricing for Call Ready's intelligent voicemail and call routing system. Plans starting at $29/month.",
};

export default function PricingPage() {
  const starterFeatures = [
    { text: "1 phone number", included: true },
    { text: "Up to 100 calls/month", included: true },
    { text: "Smart call routing", included: true },
    { text: "Automatic transcription", included: true },
    { text: "SMS notifications", included: true },
    { text: "Customer follow-up SMS", included: true },
    { text: "30-day message storage", included: true },
    { text: "Email support", included: true },
    { text: "Multi-user access", included: false },
    { text: "Advanced analytics", included: false },
    { text: "CRM integration", included: false },
    { text: "Priority support", included: false },
  ];

  const professionalFeatures = [
    { text: "Up to 3 phone numbers", included: true },
    { text: "Up to 500 calls/month", included: true },
    { text: "Smart call routing", included: true },
    { text: "Automatic transcription", included: true },
    { text: "SMS notifications", included: true },
    { text: "Customer follow-up SMS", included: true },
    { text: "90-day message storage", included: true },
    { text: "Multi-user access (up to 5)", included: true },
    { text: "Advanced analytics", included: true },
    { text: "Custom voice menus", included: true },
    { text: "CRM integration", included: false },
    { text: "Priority support", included: false },
  ];

  const businessFeatures = [
    { text: "Unlimited phone numbers", included: true },
    { text: "Unlimited calls", included: true },
    { text: "Smart call routing", included: true },
    { text: "Automatic transcription", included: true },
    { text: "SMS notifications", included: true },
    { text: "Customer follow-up SMS", included: true },
    { text: "Unlimited message storage", included: true },
    { text: "Unlimited users", included: true },
    { text: "Advanced analytics & reporting", included: true },
    { text: "Custom voice menus", included: true },
    { text: "CRM integration", included: true },
    { text: "Priority support & onboarding", included: true },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-dark-500 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that fits your business. All plans include our core features
              with no hidden fees. 14-day free trial on all plans.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Starter"
              price="$29"
              period="month"
              description="Perfect for solo operators and small businesses"
              features={starterFeatures}
            />
            <PricingCard
              name="Professional"
              price="$79"
              period="month"
              description="For growing businesses with multiple team members"
              features={professionalFeatures}
              highlighted={true}
            />
            <PricingCard
              name="Business"
              price="$199"
              period="month"
              description="For established businesses with advanced needs"
              features={businessFeatures}
            />
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-dark-500 mb-8 text-center">Add-Ons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">Extra Phone Numbers</h3>
                <p className="text-gray-600 mb-3">$10/month per additional number</p>
                <p className="text-sm text-gray-500">
                  Add more phone numbers to your account with separate greetings and routing rules.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">Additional Storage</h3>
                <p className="text-gray-600 mb-3">$15/month for extended storage</p>
                <p className="text-sm text-gray-500">
                  Keep your call recordings and transcriptions for up to 2 years.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">Extra Calls</h3>
                <p className="text-gray-600 mb-3">$0.10 per call over plan limit</p>
                <p className="text-sm text-gray-500">
                  Only pay for what you use. No penalties for busy months.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">White-Label Solution</h3>
                <p className="text-gray-600 mb-3">Custom pricing</p>
                <p className="text-sm text-gray-500">
                  Remove Call Ready branding and use your own company name.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-dark-500 mb-12 text-center">Pricing FAQs</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  Is there a free trial?
                </h3>
                <p className="text-gray-600">
                  Yes! All plans come with a 14-day free trial. No credit card required to start.
                  You can cancel anytime during the trial period with no charges.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  Can I change plans later?
                </h3>
                <p className="text-gray-600">
                  Absolutely. You can upgrade or downgrade your plan at any time. Changes take
                  effect immediately, and we&apos;ll prorate any credits or charges.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  What happens if I go over my call limit?
                </h3>
                <p className="text-gray-600">
                  We&apos;ll never cut off your service. Calls over your plan limit are charged at
                  $0.10 per call. We&apos;ll notify you when you&apos;re approaching your limit and
                  suggest upgrading if it makes financial sense.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  Are there any setup fees?
                </h3>
                <p className="text-gray-600">
                  No setup fees, ever. What you see is what you pay. The only additional costs are
                  optional add-ons you choose.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  Do you offer annual billing?
                </h3>
                <p className="text-gray-600">
                  Yes! Pay annually and save 15% on any plan. Contact us to set up annual billing.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover)
                  and ACH bank transfers for Business plan customers.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  Is there a discount for veterans?
                </h3>
                <p className="text-gray-600">
                  Yes! As a veteran-owned business, we offer a 10% discount to all active military
                  and veterans. Contact us with your military ID or DD-214 to apply the discount.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-teal-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-primary-500 transition-colors duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="/try-it-now"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-500 bg-white hover:bg-transparent hover:text-white transition-colors duration-200"
              >
                Try Demo First
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
