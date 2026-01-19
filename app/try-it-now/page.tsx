import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Try It Now - Call Ready",
  description: "Experience Call Ready yourself. Call our demo line completely anonymously - no signup, no sales call, no data collected.",
};

export default function TryItNowPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-dark-500 mb-6">
              Try It Now - Experience Call Ready Yourself
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Call our demo line right now. It&apos;s completely anonymous - no signup,
              no sales call, no data collected.
            </p>

            {/* Giant Phone Number */}
            <div className="card mb-8">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <a
                href="tel:+1234567890"
                className="text-5xl md:text-6xl font-bold text-primary-500 hover:text-primary-600 transition-colors"
              >
                (XXX) XXX-XXXX
              </a>
              <p className="text-sm text-gray-500 mt-4">Click to call on mobile</p>
            </div>

            {/* Trust Statement */}
            <div className="bg-white rounded-xl p-6 shadow-natural max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Completely anonymous</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Not monitored by humans</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">We don&apos;t collect, store, or sell your information</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">No signup or commitment required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-dark-500 mb-4 text-center">What You&apos;ll Experience</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              When you call, you&apos;ll go through a real Call Ready voicemail system -
              the same one you can set up for your business.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-500 mb-2">Smart Greeting</h3>
                  <p className="text-gray-600">
                    You&apos;ll hear our after-hours greeting (we&apos;ve configured it to always route
                    to voicemail for demo purposes)
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-500 mb-2">Voice Prompt</h3>
                  <p className="text-gray-600">
                    A natural-sounding voice will ask you to leave your name and reason for calling
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-500 mb-2">Leave Your Message</h3>
                  <p className="text-gray-600">
                    Press # when you&apos;re done, or just hang up
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-500 mb-2">Instant Processing</h3>
                  <p className="text-gray-600">
                    Your voicemail is transcribed and classified automatically
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-500 mb-2">See The Results (Optional)</h3>
                  <p className="text-gray-600 mb-2">
                    Enter your email in the voicemail to receive a copy of what your team would get
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Email only used to send you the demo results. Not stored or used for marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind The Scenes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-dark-500 mb-4 text-center">
              Behind The Scenes - What Your Team Sees
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Here&apos;s what happens on your end when a customer calls
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* SMS Alert Mockup */}
              <div>
                <h3 className="text-lg font-semibold text-dark-500 mb-4">SMS Alert to On-Call Employee</h3>
                <div className="bg-gradient-to-br from-primary-100 to-teal-100 rounded-xl p-6 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    [SMS Screenshot Placeholder]
                    <div className="text-sm mt-2">
                      Shows: Transcription, Caller Info, Priority Level
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Auto-Response Mockup */}
              <div>
                <h3 className="text-lg font-semibold text-dark-500 mb-4">Customer Auto-Response</h3>
                <div className="bg-gradient-to-br from-purple-100 to-primary-100 rounded-xl p-6 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    [SMS Screenshot Placeholder]
                    <div className="text-sm mt-2">
                      Shows: SMS sent to customer with booking link
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard View */}
            <div>
              <h3 className="text-lg font-semibold text-dark-500 mb-4 text-center">Dashboard View</h3>
              <div className="bg-gradient-to-br from-teal-100 to-purple-100 rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  [Dashboard Screenshot Placeholder]
                  <div className="text-sm mt-2">
                    Shows: Call in dashboard, play recording, view transcription, see classification
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Is Just The Beginning */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md text-dark-500 mb-4">
              This Is Just The Beginning
            </h2>
            <p className="text-xl text-gray-600">
              What you just experienced is one simple flow. Call Ready can do so much more.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Office Hours Management"
              description="Automatically route to voicemail after hours, weekends, holidays"
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
              title="VIP Caller Recognition"
              description="Priority routing for important customers"
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              title="On-Call Rotations"
              description="Route to different team members based on schedule"
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              title="Custom Business Rules"
              description="Define exactly when and how calls are handled"
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              }
              title="Multi-Language Support"
              description="Greet customers in their preferred language"
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Priority Detection"
              description="Automatically flag urgent messages from keywords"
            />
          </div>
        </div>
      </section>

      {/* Ready to Set Up */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-dark-500 mb-12 text-center">
              Ready To Set This Up For Your Business?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - CTA */}
              <div className="card text-center">
                <h3 className="text-2xl font-bold text-dark-500 mb-4">Start Your Free Trial</h3>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No credit card required
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Setup in under 10 minutes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    14-day free trial
                  </li>
                </ul>
                <CTAButton href="/contact" className="w-full">Get Started</CTAButton>
              </div>

              {/* Right - Support */}
              <div className="card text-center">
                <h3 className="text-2xl font-bold text-dark-500 mb-4">Have Questions? We&apos;re Here to Help</h3>
                <div className="text-left space-y-4 mb-6">
                  <div>
                    <p className="font-semibold text-dark-500 mb-1">Schedule a Guided Walkthrough</p>
                    <p className="text-sm text-gray-600">We&apos;ll show you exactly how to set everything up</p>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-500 mb-1">Call Us</p>
                    <a href="tel:+1234567890" className="text-primary-500 hover:text-primary-600">
                      (XXX) XXX-XXXX
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-500 mb-1">Email</p>
                    <a href="mailto:support@callready.com" className="text-primary-500 hover:text-primary-600">
                      support@callready.com
                    </a>
                  </div>
                </div>
                <CTAButton href="/contact" variant="secondary" className="w-full">Contact Support</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-dark-500 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">Is this really anonymous?</h3>
                <p className="text-gray-600">
                  Yes. Unless you choose to provide your email during the voicemail, we have no way
                  to identify or contact you.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">Will I get a sales call?</h3>
                <p className="text-gray-600">
                  No. This is purely a product demonstration. If you provide your email, you&apos;ll
                  only receive the demo results.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">Can I call multiple times?</h3>
                <p className="text-gray-600">
                  Absolutely! Try different scenarios - leave a short message, a long one, mention
                  it&apos;s an emergency, etc.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  How is this different from a regular voicemail?
                </h3>
                <p className="text-gray-600">
                  Regular voicemail is a black hole. Call Ready transcribes, classifies, routes,
                  and takes action on every message automatically.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  What happens to my voice recording?
                </h3>
                <p className="text-gray-600">
                  Demo recordings are automatically deleted after 24 hours. Your actual business
                  recordings are stored securely and only accessible by you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
