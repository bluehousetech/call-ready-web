import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Features - Call Ready",
  description: "Explore all the powerful features of Call Ready's intelligent voicemail and call routing system for small service businesses.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-dark-500 mb-6">
              Everything you need to never miss a call
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Built specifically for working professionals who can&apos;t always answer.
              Every feature designed to capture leads and keep your business running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Call Routing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md text-dark-500 mb-4">Smart Call Routing</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your calls, your rules. Set up intelligent routing that adapts to your schedule
                and business needs automatically.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Business Hours Management:</strong> Automatically route to voicemail after hours, weekends, and holidays
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>VIP Caller Recognition:</strong> Priority routing for important customers
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>On-Call Rotations:</strong> Route to different team members based on schedule
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Custom Business Rules:</strong> Define exactly when and how calls are handled
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-teal-100 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                [Routing Flow Diagram Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Voicemail */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-purple-100 to-primary-100 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                [Voicemail Interface Placeholder]
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="heading-md text-dark-500 mb-4">Professional Voicemail System</h2>
              <p className="text-lg text-gray-600 mb-6">
                Make a great impression even when you can&apos;t answer. Customizable,
                professional greetings that represent your business perfectly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Custom Greetings:</strong> Create different messages for business hours, after hours, holidays
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Natural Voice Options:</strong> Choose from professional voice options that sound human
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Voice Menus:</strong> &quot;Press 1 for emergencies, 2 for appointments&quot;
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Multi-Language Support:</strong> Greet customers in their preferred language
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Notifications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md text-dark-500 mb-4">Instant Notifications</h2>
              <p className="text-lg text-gray-600 mb-6">
                Get notified the moment a call comes in. Your team stays informed,
                and your customers get immediate follow-up.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>SMS to Your Team:</strong> Instant text alerts with full transcription and caller details
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Customer Auto-Response:</strong> Automatically send SMS to callers with booking links
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Email Notifications:</strong> Full message details delivered to your inbox
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Priority Alerts:</strong> Urgent messages flagged automatically based on keywords
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-primary-100 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                [SMS Notification Mockup]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transcription & Storage */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                [Dashboard Screenshot Placeholder]
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="heading-md text-dark-500 mb-4">Transcription & Storage</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every voicemail automatically transcribed and securely stored.
                Search, organize, and access your call history anytime.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Automatic Transcription:</strong> AI-powered transcription of every voicemail
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Searchable Archive:</strong> Find any message by keyword, date, or caller
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Secure Cloud Storage:</strong> All recordings encrypted and backed up automatically
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Call Logging:</strong> Complete history with timestamps, duration, and caller info
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Setup */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md text-dark-500 mb-4">Easy Setup, No Hardware Required</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Works with your existing phone number. No new equipment, no technical expertise needed.
              Get up and running in under 10 minutes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
              title="Keep Your Number"
              description="Use your existing business phone number. No need to change anything."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="10 Minute Setup"
              description="Quick and simple configuration. Start capturing calls immediately."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              title="24/7 Support"
              description="Our team is here to help you get set up and running smoothly."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-teal-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Try Call Ready risk-free for 14 days. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact">Start Free Trial</CTAButton>
              <CTAButton href="/try-it-now" variant="secondary">Try Demo Now</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
