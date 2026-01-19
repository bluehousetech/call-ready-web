import CTAButton from "@/components/CTAButton";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-dark-500 mb-6">
              Never miss a call while you&apos;re on the job
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Smart voicemail and call routing built for mechanics, plumbers, electricians,
              and contractors. Every missed call becomes a captured lead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact">Start Free Trial</CTAButton>
              <CTAButton href="/try-it-now" variant="secondary">Try It Now</CTAButton>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✓ Veteran-owned • ✓ No credit card required • ✓ Setup in 10 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-dark-500 mb-6">
                Every missed call is a lost job
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                You&apos;re under a car, on a ladder, or installing electrical panels.
                Your phone rings. You can&apos;t answer. The customer hangs up and calls
                your competitor.
              </p>
              <p className="text-lg text-gray-600">
                That&apos;s where we come in.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Your Solution</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Professional voicemail with custom greetings
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Instant SMS notifications with transcription
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Automatic customer follow-up with booking links
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Complete call logging and recording storage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-dark-500 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to never miss another opportunity</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-500">Call Comes In</h3>
              <p className="text-gray-600">
                When you can&apos;t answer, your call is automatically routed to Call Ready
                based on your business hours and custom rules.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-500">We Capture It</h3>
              <p className="text-gray-600">
                Professional greeting, voicemail recording, automatic transcription,
                and AI-powered classification of urgency.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-500">You Get Notified</h3>
              <p className="text-gray-600">
                Instant SMS to your team with transcription and customer details.
                Automated follow-up sent to customer with booking information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-dark-500 mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600">Built for working professionals who need reliability</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Smart Call Routing"
              description="Automatically route calls based on business hours, holidays, and custom conditions. Set different rules for different situations."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              }
              title="Professional Voicemail"
              description="Customizable greetings with natural-sounding voices. Create different messages for different times or situations."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Instant Notifications"
              description="Get SMS alerts immediately when a call comes in. Includes full transcription and caller information."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="Automatic Transcription"
              description="Every voicemail is automatically transcribed and searchable. Never miss important details buried in a message."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Customer Follow-up"
              description="Automatically send SMS to customers with booking links, callback information, or custom messages."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Secure Storage"
              description="All recordings and transcriptions stored securely. Access your complete call history anytime, anywhere."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-dark-500 mb-4">Trusted By Working Professionals</h2>
            <p className="text-xl text-gray-600">See what our customers have to say</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="I used to lose at least 2-3 jobs a week because I couldn't answer while working. Now every call is captured and followed up automatically. Game changer."
              name="Mike Rodriguez"
              business="Rodriguez Plumbing"
              industry="Plumbing"
            />
            <TestimonialCard
              quote="The transcription feature is incredible. I can quickly scan messages during lunch and prioritize callbacks. My customers love the automated follow-up too."
              name="Sarah Chen"
              business="Chen Electric"
              industry="Electrical Services"
            />
            <TestimonialCard
              quote="As a veteran-owned business, I appreciate supporting another vet. But honestly, I'd use Call Ready regardless - it just works perfectly for contractors like us."
              name="James Wilson"
              business="Wilson Contracting"
              industry="General Contracting"
            />
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-dark-500 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Plans starting at $29/month</p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="card">
              <p className="text-lg text-gray-600 mb-6">
                Choose the plan that fits your business. All plans include smart routing,
                transcription, SMS notifications, and customer follow-up.
              </p>
              <CTAButton href="/pricing">View All Plans</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-teal-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to never miss another call?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of working professionals who trust Call Ready to capture every opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-primary-500 transition-colors duration-200">
                Start Free Trial
              </Link>
              <Link href="/try-it-now" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-500 bg-white hover:bg-transparent hover:text-white transition-colors duration-200">
                Try Demo Now
              </Link>
            </div>
            <p className="text-sm mt-6 opacity-75">
              No credit card required • Cancel anytime • 14-day free trial
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
