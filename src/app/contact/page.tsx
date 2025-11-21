'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import { appConfig } from '@/config';

interface Reason {
  value: string;
  label: string;
}

const reasons: Reason[] = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Support' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'sponsorship', label: 'Sponsorship' },
  { value: 'events', label: 'Event Inquiry' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'invest', label: 'Invest' },
  { value: 'careers', label: 'Careers' },
  { value: 'sales', label: 'Sales' },
  { value: 'media', label: 'Media Inquiry' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'bug', label: 'Report a Bug' },
  { value: 'disactivation', label: 'Account Deactivation' },
  { value: 'other', label: 'Other' },
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

export default function ContactPage() {
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

  console.log(formik.isSubmitting);

  return (
    <div className="animate-fade-in-scale max-w-4xl mx-auto bg-black text-white p-10 border border-gray-800 shadow-xl">
      <ToastContainer />
      <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
        <span className="text-gray-400">Contact</span> TheOGs
      </h1>

      <p className="text-gray-300 mb-10 text-center leading-relaxed">
        Have questions or feedback? Reach out to our team, and we’ll get back to
        you as soon as possible. You can also email us directly at{' '}
        <a
          href={`mailto:${appConfig.supportEmail}`}
          className="underline underline-offset-2 hover:text-gray-100 transition-colors"
        >
          {appConfig.supportEmail}
        </a>
        .
      </p>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/** Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number with country code"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {formik.touched.phone && formik.errors.phone && (
            <ErrorMessage message={formik.errors.phone} />
          )}
        </div>

        {/** Reason */}
        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Select Reason
          </label>
          <select
            id="reason"
            name="reason"
            value={formik.values.reason}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            {reasons.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
          {formik.touched.reason && formik.errors.reason && (
            <ErrorMessage message={formik.errors.reason} />
          )}
        </div>

        {/** Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            maxLength={500}
            minLength={10}
            placeholder="Your message..."
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {formik.touched.message && formik.errors.message && (
            <ErrorMessage message={formik.errors.message} />
          )}
        </div>

        <div className="flex justify-center text-center">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
          >
            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
            {formik.isSubmitting && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
          </button>
        </div>
      </form>

      <p className="text-gray-300 mt-10 text-center">
        Prefer to explore our app?{' '}
        <Link
          href="contact"
          className="underline underline-offset-2 hover:text-gray-100 font-semibold transition-colors"
        >
          Get started with TheOGs
        </Link>
        .
      </p>
    </div>
  );
}
