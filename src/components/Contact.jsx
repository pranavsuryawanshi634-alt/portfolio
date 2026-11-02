import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  Info,
  Clock,
  Sparkles
} from 'lucide-react';
import { personalInfo, servicesData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact({ initialSelectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialSelectedService || 'Website Development',
    budget: 'Flexible / To Be Discussed',
    timeline: 'Standard (2-4 Weeks)',
    message: '',
  });

  const [copiedField, setCopiedField] = useState(null);
  const [submissionFeedback, setSubmissionFeedback] = useState(null);

  // Update selected service if parent changes it
  useEffect(() => {
    if (initialSelectedService) {
      setFormData((prev) => ({ ...prev, service: initialSelectedService }));
    }
  }, [initialSelectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Pranav,\n\n` +
      `I would like to discuss a project with you.\n\n` +
      `Client Name: ${formData.name || 'Not specified'}\n` +
      `Client Email: ${formData.email || 'Not specified'}\n` +
      `Requested Service: ${formData.service}\n` +
      `Estimated Budget: ${formData.budget}\n` +
      `Desired Timeline: ${formData.timeline}\n\n` +
      `Project Details:\n${formData.message || 'I would like to discuss requirements and get a quote.'}\n\n` +
      `Best regards,\n${formData.name || 'Client'}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const constructWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Pranav! I am interested in discussing a project.\n\n` +
      `Name: ${formData.name || 'Interested Client'}\n` +
      `Service: ${formData.service}\n` +
      `Budget: ${formData.budget}\n` +
      `Message: ${formData.message || 'Looking to discuss a new website project.'}`
    );
    return `https://wa.me/${personalInfo.whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setSubmissionFeedback({
        type: 'error',
        message: 'Please provide both your name and email address before proceeding.',
      });
      return;
    }

    // Launch genuine mailto link
    const mailtoUrl = constructMailtoUrl();
    window.location.href = mailtoUrl;

    setSubmissionFeedback({
      type: 'info',
      message: 'Launching your email client with your pre-formatted project message. You can also chat directly on WhatsApp using the button below.',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1120] relative">
      {/* Background accents */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Let's discuss your idea and explore how I can help bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-slate-300">
                  Feel free to reach out directly via WhatsApp, email, or explore my code on GitHub.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#131E38] border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-600/15 text-blue-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-white hover:text-blue-400 transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#131E38] border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-600/15 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Phone / WhatsApp</div>
                      <a 
                        href={`https://wa.me/${personalInfo.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 ml-2"
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#131E38] border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-blue-600/15 text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Instant Action Buttons */}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hi%20Pranav%2C%20I%20would%20like%20to%20discuss%20a%20website%20project%20with%20you.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-700 hover:border-slate-600 bg-slate-800/80 hover:bg-slate-800 text-white font-medium text-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Connect & Inspect Code
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#131E38] hover:bg-[#18274a] text-slate-200 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#131E38] hover:bg-[#18274a] text-slate-200 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="bg-[#101932] border border-blue-900/40 p-3.5 rounded-xl flex items-center gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Typical response time: <strong>Within 24 hours</strong> on business inquiries.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Project Inquiry & Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill in your project scope below to launch a consultation message.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-blue-400 bg-blue-950/70 px-2.5 py-1 rounded-lg border border-blue-900/50">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Custom Quote</span>
                </div>
              </div>

              {/* Form implementation */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Your Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#131E38] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* Your Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#131E38] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Select Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#131E38] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Web Solution">Custom Web Solution / Other</option>
                    </select>
                  </div>

                  {/* Budget / Scope */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#131E38] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      <option value="Flexible / To Be Discussed">Flexible / To Be Discussed</option>
                      <option value="Starter Website (Standard)">Starter Website (Standard)</option>
                      <option value="Full Web Application (Custom)">Full Web Application (Custom)</option>
                      <option value="Maintenance / Redesign">Maintenance / Redesign</option>
                    </select>
                  </div>
                </div>

                {/* Message / Brief */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Project Details / Goals
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about your idea, key features needed, or target timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-[#131E38] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Feedback Notification */}
                {submissionFeedback && (
                  <div className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 border ${
                    submissionFeedback.type === 'error'
                      ? 'bg-red-950/40 border-red-800 text-red-200'
                      : 'bg-blue-950/40 border-blue-800 text-blue-200'
                  }`}>
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{submissionFeedback.message}</span>
                  </div>
                )}

                {/* Submission Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-600/30 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry via Email (mailto:)</span>
                  </button>

                  <a
                    href={constructWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>

                {/* Transparent submission architecture disclosure */}
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-1 leading-relaxed">
                  <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <Info className="w-3.5 h-3.5 text-blue-400" />
                    <span>Submission Notice:</span>
                  </div>
                  <p>
                    Clicking <strong>Send Inquiry</strong> opens your system's default email client pre-populated with these exact specifications. To connect an automated backend service (such as Formspree or Web3Forms), replace the submission handler in <code className="text-slate-300">src/components/Contact.jsx</code>.
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
