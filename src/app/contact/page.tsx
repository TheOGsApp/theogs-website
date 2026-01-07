'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { appConfig } from '@/config';
import { useAuthStore } from '@/store';
import Link from 'next/link';

interface Reason {
  value: string;
  label: string;
}

const reasons: Reason[] = [
  { value: 'bug', label: 'Report a Bug' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'careers', label: 'Careers' },
  { value: 'account_deletion', label: 'Account Deletion' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Support' },
];

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name is too short')
    .max(50, 'Name is too long'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .max(100, 'Email is too long'),
  phone: Yup.string().optional(),
  reason: Yup.string().required('Please select a reason'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message is too short')
    .max(500, 'Message is too long'),
});

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="text-red-500 text-sm mt-1">{message}</div>
);

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'TheOGs',
    url: 'https://theogs.app',
    contactPoint: {
      '@type': 'ContactPoint',
      email: appConfig.supportEmail,
      contactType: 'customer support',
      availableLanguage: 'English',
    },
  },
};

export default function ContactPage() {
  const { setOpen } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      reason: reasons[0].value,
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch(`${appConfig.apiUrl}/enquiries`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          toast.success(
            'Your message has been sent successfully. We will get back to you ASAP!',
          );
          resetForm();
        } else {
          toast.error(
            'There was an error sending your message. Please try again.',
          );
        }
      } catch {
        toast.error(
          'There was an error sending your message. Please try again.',
        );
      }
    },
  });

  return (
    <div className="animate-fade-in-scale max-w-4xl mx-auto bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-10 border border-gray-800 shadow-xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ToastContainer />

      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
          <span className="text-gray-400">Talk to us</span>
        </h1>

        <div className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Have questions about our swipe-based hiring platform or need technical
          support? Reach out to our team. You can also email us directly at{' '}
          <address className="inline not-italic">
            <Link
              href={`mailto:${appConfig.supportEmail}`}
              className="underline underline-offset-2 hover:text-gray-100 transition-colors font-semibold"
            >
              {appConfig.supportEmail}
            </Link>
          </address>
        </div>
      </header>

      <section aria-labelledby="contact-form-title">
        <h2 id="contact-form-title" className="sr-only">
          Contact Form
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/** Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              {...formik.getFieldProps('name')}
              className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {formik.touched.name && formik.errors.name && (
              <ErrorMessage message={formik.errors.name} />
            )}
          </div>

          {/** Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Work Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Type your email address"
              {...formik.getFieldProps('email')}
              className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorMessage message={formik.errors.email} />
            )}
          </div>

          {/** Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Phone Number (Optional)
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Type your phone number"
              {...formik.getFieldProps('phone')}
              className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/** Reason */}
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Reason for Contact
            </label>
            <select
              id="reason"
              {...formik.getFieldProps('reason')}
              className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              {reasons.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/** Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Please provide as much detail as possible..."
              {...formik.getFieldProps('message')}
              className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {formik.touched.message && formik.errors.message && (
              <ErrorMessage message={formik.errors.message} />
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="bg-gray-100 hover:bg-white text-black font-bold px-10 py-3 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-50"
            >
              {formik.isSubmitting ? 'Sending...' : 'Send Message'}
              {formik.isSubmitting && (
                <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              )}
            </button>
          </div>
        </form>
      </section>

      <footer className="text-gray-300 mt-10 text-center border-t border-gray-800 pt-8">
        <p>
          Prefer to explore our app?{' '}
          <button
            className="underline underline-offset-2 hover:text-gray-100 font-semibold transition-colors cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Join TheOGs community today
          </button>
          .
        </p>
      </footer>
    </div>
  );
}
