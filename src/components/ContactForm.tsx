import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          return;
        } else {
          throw new Error('Server returned an error');
        }
      } catch (err) {
        console.error('Form submission failed, using mailto fallback', err);
        // Fallback to mailto below
      }
    }

    // Default or Fallback: client-side mailto handler
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:shivamsasmal7@gmail.com?subject=${subject}&body=${body}`;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-[#15070c]/80 border border-brand-red/15 dark:border-white/10 backdrop-blur-md shadow-sm w-full max-w-xl"
      noValidate
    >
      <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
        Send a Message
      </h3>
      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
        Have an opportunity, project collaboration, or question? Fill in the details below.
      </p>

      {/* Success Notification */}
      {status === 'success' && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-semibold block">Thank you! Your message has been prepared.</span>
            <span>Sibam will get back to you shortly at {formData.email || 'your email'}.</span>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {status === 'error' && (
        <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-semibold block">Message dispatch notice:</span>
            <span>{errorMessage || 'Direct submission encountered an issue. Falling back to email client.'}</span>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {/* Name input */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder="Sibam's Collaborator"
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all ${
              errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 dark:border-white/10'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email input */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Your Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="collaborator@example.com"
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all ${
              errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 dark:border-white/10'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Message input */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder="Hi Sibam, I'd like to talk about an exciting project opportunity..."
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all resize-none ${
              errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 dark:border-white/10'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#E50914] text-white font-semibold text-sm sm:text-base shadow-glow-red hover:bg-[#c80812] hover:shadow-glow-red-lg active:scale-[0.98] transition-all duration-200 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-brand-red"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
