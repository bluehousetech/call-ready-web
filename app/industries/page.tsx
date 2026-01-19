import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Industries We Serve - Call Ready",
  description: "See how Call Ready helps plumbers, electricians, mechanics, contractors, and other service professionals never miss a call.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-dark-500 mb-6">
              Built for Working Professionals
            </h1>
            <p className="text-xl text-gray-600">
              See how Call Ready helps professionals in your industry capture every opportunity,
              even when you&apos;re hands-on with a job.
            </p>
          </div>
        </div>
      </section>

      {/* Plumbers */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary-100 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Plumbing Services
              </div>
              <h2 className="heading-md text-dark-500 mb-4">For Plumbers</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">The Problem</h3>
                <p className="text-gray-600">
                  You&apos;re under a sink fixing a leak when your phone rings. Your hands are wet,
                  you&apos;re in an awkward position, and you can&apos;t answer. That call could be
                  an emergency burst pipe - a high-paying job that just went to your competitor.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">How Call Ready Helps</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Emergency keywords trigger priority alerts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Instant SMS with customer details and urgency level</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Automated response to customer with your ETA or booking link</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-500 to-teal-500 rounded-xl p-6 text-white">
                <p className="text-lg font-semibold mb-2">The Outcome</p>
                <p>
                  You finish the current job, check your phone, and see a transcribed message about
                  the burst pipe. The customer already received an automated text saying you&apos;ll
                  call back within 30 minutes. You call, book the job, and arrive on-site - all
                  within an hour of their initial call.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-teal-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                [Plumber Working Image Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-teal-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                [Mechanic Working Image Placeholder]
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Auto Repair
              </div>
              <h2 className="heading-md text-dark-500 mb-4">For Mechanics</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">The Problem</h3>
                <p className="text-gray-600">
                  You&apos;re under a car doing an oil change when your phone rings. Your hands are
                  covered in grease, and by the time you clean up, the customer has moved on to the
                  next shop on Google.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">How Call Ready Helps</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Professional greeting mentions your shop name and services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">AI detects service type (inspection, repair, towing)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Customer gets instant text with appointment booking link</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-purple-500 rounded-xl p-6 text-white">
                <p className="text-lg font-semibold mb-2">The Outcome</p>
                <p>
                  The customer books an appointment directly from the automated text message.
                  You get a notification with all details - make, model, issue, and scheduled time.
                  No phone tag, no missed opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electricians */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Electrical Services
              </div>
              <h2 className="heading-md text-dark-500 mb-4">For Electricians</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">The Problem</h3>
                <p className="text-gray-600">
                  You&apos;re on a ladder installing a light fixture when a call comes in.
                  You can&apos;t safely climb down, and the customer needs an emergency electrical
                  repair. They call the next electrician who picks up.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">How Call Ready Helps</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Voice menu: &quot;Press 1 for emergencies, 2 for quotes&quot;</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Emergency calls trigger immediate SMS and phone alerts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Quote requests get standard response with your rate and availability</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-primary-500 rounded-xl p-6 text-white">
                <p className="text-lg font-semibold mb-2">The Outcome</p>
                <p>
                  Emergency calls are never missed. Your phone buzzes in your pocket, you know
                  it&apos;s urgent, and you can safely finish what you&apos;re doing before responding.
                  The customer feels heard, and you secure the high-priority job.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-primary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                [Electrician Working Image Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Contractors */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-primary-100 to-teal-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                [Contractor Working Image Placeholder]
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                General Contracting
              </div>
              <h2 className="heading-md text-dark-500 mb-4">For General Contractors</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">The Problem</h3>
                <p className="text-gray-600">
                  You&apos;re managing three job sites, coordinating subcontractors, and dealing with
                  material deliveries. When potential clients call for quotes, you&apos;re too busy
                  to answer, and they move on to the next contractor.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">How Call Ready Helps</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Different greetings for different project types</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">AI categorizes by project type (remodel, new build, repair)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Automated follow-up with portfolio and testimonials</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-500 to-teal-500 rounded-xl p-6 text-white">
                <p className="text-lg font-semibold mb-2">The Outcome</p>
                <p>
                  Every quote request is captured with full details. Your evening routine includes
                  reviewing the day&apos;s inquiries, all neatly transcribed and categorized. You follow
                  up with personalized responses, and your close rate improves dramatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md text-dark-500 mb-4">We Also Serve</h2>
            <p className="text-lg text-gray-600">
              Any service business where hands-on work means missed calls
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-500">HVAC Technicians</h3>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-500">Roofers</h3>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-primary-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-500">Painters</h3>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-500">Landscapers</h3>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-primary-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-500">Carpenters</h3>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-500">Appliance Repair</h3>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-500">Pool Service</h3>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-500">Locksmiths</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-teal-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">See how it works for your business</h2>
            <p className="text-xl mb-8 opacity-90">
              Try our live demo or start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/try-it-now">Try Demo Now</CTAButton>
              <CTAButton href="/contact" variant="secondary">Start Free Trial</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
