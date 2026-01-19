import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About Us - Call Ready",
  description: "Learn about Call Ready's veteran-owned story and our mission to help working professionals never miss a call.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-natural mb-6">
              <span className="text-sm font-semibold text-primary-500">🇺🇸 Veteran-Owned & Operated</span>
            </div>
            <h1 className="heading-xl text-dark-500 mb-6">
              Built by people who understand hard work
            </h1>
            <p className="text-xl text-gray-600">
              We know what it&apos;s like to miss important calls because you&apos;re hands-on with a job.
              That&apos;s why we built Call Ready.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-gradient-to-br from-primary-100 to-teal-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  [Founder Photo Placeholder]
                </div>
              </div>
              <div>
                <h2 className="heading-md text-dark-500 mb-4">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Call Ready was founded by veterans who transitioned from military service to running
                  their own contracting businesses. We quickly learned that missing calls meant missing
                  opportunities.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Traditional voicemail systems weren&apos;t cutting it. Customers would leave messages,
                  but by the time we listened to them and called back, they&apos;d already hired someone else.
                  We needed something better.
                </p>
                <p className="text-lg text-gray-600">
                  So we built Call Ready - a system that captures every call, transcribes it instantly,
                  notifies our team, and follows up with customers automatically. Now we help other
                  working professionals do the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-dark-500 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              To ensure that working professionals never lose business because they&apos;re doing
              the work they were hired to do.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-natural">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-500 mb-2">Reliability</h3>
                <p className="text-gray-600">
                  Your business depends on us. We take that seriously and ensure 99.9% uptime.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-natural">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-500 mb-2">Service</h3>
                <p className="text-gray-600">
                  We serve those who serve others. Support from people who understand your work.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-natural">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-500 mb-2">Simplicity</h3>
                <p className="text-gray-600">
                  No-nonsense solutions that just work. No complexity, no hidden features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-dark-500 mb-8 text-center">Our Values</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">Serve the Underserved</h3>
                <p className="text-gray-600">
                  Big corporations have enterprise call centers. Small businesses deserve the same
                  level of professionalism without the enterprise price tag or complexity.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">Built for Real Work</h3>
                <p className="text-gray-600">
                  We design for people with greasy hands, muddy boots, and tool belts. If it
                  doesn&apos;t work when you&apos;re on a ladder or under a sink, it doesn&apos;t work.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">Transparent & Honest</h3>
                <p className="text-gray-600">
                  No hidden fees, no confusing terms, no fine print. We tell you exactly what
                  you&apos;re getting and what it costs.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">Always Improving</h3>
                <p className="text-gray-600">
                  We listen to our customers and constantly improve based on real feedback from
                  real working professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veteran-Owned Badge Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-teal-500 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-md mb-4">Veteran-Owned Business</h2>
                <p className="text-lg mb-6 opacity-90">
                  We&apos;re proud to be a veteran-owned and operated business. Our military background
                  taught us discipline, attention to detail, and the importance of mission accomplishment.
                </p>
                <p className="text-lg mb-6 opacity-90">
                  We bring those same values to Call Ready, ensuring that every call is captured,
                  every message is delivered, and every customer is served with excellence.
                </p>
                <p className="text-lg opacity-90">
                  We offer a special discount to all active military members and veterans.
                  Thank you for your service.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-12 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl mb-4">🇺🇸</div>
                  <p className="text-2xl font-bold">Veteran-Owned</p>
                  <p className="text-lg opacity-90">Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-dark-500 mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="bg-gradient-to-br from-primary-100 to-teal-100 rounded-xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">[Team Photo]</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-500">Founder & CEO</h3>
                <p className="text-sm text-gray-600">US Army Veteran</p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-teal-100 to-purple-100 rounded-xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">[Team Photo]</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-500">CTO</h3>
                <p className="text-sm text-gray-600">US Navy Veteran</p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-purple-100 to-primary-100 rounded-xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">[Team Photo]</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-500">Head of Customer Success</h3>
                <p className="text-sm text-gray-600">US Air Force Veteran</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-dark-500 mb-6">
              Ready to join hundreds of working professionals?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us help you capture every opportunity and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact">Start Free Trial</CTAButton>
              <CTAButton href="/try-it-now" variant="secondary">Try Demo First</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
