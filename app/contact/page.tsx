"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orgName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setIsSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        let msg = "Something went wrong. Please try again or call us.";
        try {
          const j = (await res.json()) as unknown;
          if (j && typeof j === "object" && "error" in j && typeof (j as { error?: unknown }).error === "string") {
            msg = (j as { error: string }).error;
          }
        } catch {
          // ignore non-JSON responses
        }
        setSubmitMessage(msg);
        return;
      }

      setIsSuccess(true);
      setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        orgName: "",
        message: "",
      });
    } catch {
      setSubmitMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-dark-500 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600">
              Ready to never miss another call? We&apos;re here to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="heading-sm text-dark-500 mb-6">Send Us a Message</h2>
              <div className="relative">
                {isSubmitting && (
                  <div className="absolute inset-0 z-10 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-10 w-10 rounded-full border-4 border-primary-200 border-t-primary-600 animate-spin" />
                      <p className="text-sm text-gray-700 font-medium">Sending…</p>
                    </div>
                  </div>
                )}

                {isSuccess ? (
                  <div className="card">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-dark-500 mb-1">Message sent</h3>
                        <p className="text-gray-600 mb-4">
                          Thanks — we got it. While you wait, you can experience Call Ready in under a minute.
                        </p>
                        <Link href="/try-it-now" className="btn-primary inline-flex justify-center">
                          Go to Try It Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={`space-y-6 ${isSubmitting ? "pointer-events-none" : ""}`}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:opacity-60"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:opacity-60"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        disabled={isSubmitting}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:opacity-60"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="orgName" className="block text-sm font-medium text-gray-700 mb-2">
                        Business / Organization Name
                      </label>
                      <input
                        type="text"
                        id="orgName"
                        name="orgName"
                        disabled={isSubmitting}
                        value={formData.orgName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:opacity-60"
                        placeholder="Smith Plumbing LLC"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        disabled={isSubmitting}
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none disabled:opacity-60"
                        placeholder="Tell us about your business and how we can help..."
                      />
                    </div>

                    {submitMessage && (
                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                        <p className="text-rose-700">{submitMessage}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Send Message
                    </button>

                    <p className="text-sm text-gray-500 text-center">We&apos;ll respond within 24 hours</p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-sm text-dark-500 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="card">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-dark-500 mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-primary-500 hover:text-primary-600 text-lg">
                        (XXX) XXX-XXXX
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="card">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-dark-500 mb-1">Email</h3>
                      <a href="mailto:support@callready.com" className="text-primary-500 hover:text-primary-600">
                        support@callready.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Support Hours */}
                <div className="card">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-dark-500 mb-2">Support Hours</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Monday - Friday: 9am - 6pm EST</p>
                        <p>Saturday: 10am - 4pm EST</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Support */}
                <div className="bg-gradient-to-br from-primary-500 to-teal-500 rounded-xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Emergency Support</h3>
                  <p className="mb-4 opacity-90">
                    For existing customers with urgent technical issues, call our emergency line:
                  </p>
                  <a href="tel:+1234567890" className="text-2xl font-bold hover:underline">
                    (XXX) XXX-XXXX
                  </a>
                  <p className="text-sm mt-2 opacity-75">24/7 for Business plan customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-dark-500 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  How quickly can I get set up?
                </h3>
                <p className="text-gray-600">
                  Most customers are up and running within 10 minutes. Our onboarding process is
                  simple and guided. If you need help, our team can walk you through setup via
                  phone or video call.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  Do I need to change my phone number?
                </h3>
                <p className="text-gray-600">
                  No! Call Ready works with your existing business phone number. We integrate
                  seamlessly without requiring any changes to your current setup.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  What if I need technical support?
                </h3>
                <p className="text-gray-600">
                  Our support team is available via phone, email, and live chat during business
                  hours. Business plan customers get 24/7 priority support for urgent issues.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-500 mb-2">
                  Can I schedule a demo?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We offer personalized demos where we&apos;ll show you exactly how Call
                  Ready works for your specific business. Use the contact form above to request
                  a demo, or call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-dark-500 mb-4">
              Prefer to Try Before You Buy?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Call our live demo line right now and experience Call Ready firsthand.
              Completely anonymous, no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/try-it-now" className="btn-primary">
                Try Demo Now
              </a>
              <a href="/pricing" className="btn-secondary">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
