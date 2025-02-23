import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Send, MessageSquare, ExternalLink, ArrowRight, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/rishichaubey3105', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: <Github />, url: 'https://github.com/RishiChaubey31', color: 'hover:text-purple-400' },
    { name: 'X', icon: <Twitter />, url: 'https://x.com/cenation_rishi', color: 'hover:text-blue-400' },
    { name: 'LeetCode', icon: <ExternalLink />, url: 'https://leetcode.com/u/rishi_chaubey/', color: 'hover:text-yellow-500' },
    { name: 'Reddit', icon: <ExternalLink />, url: 'https://www.reddit.com/user/cenation_rishi/', color: 'hover:text-orange-500' },
    { name: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/cenation_rishi/', color: 'hover:text-pink-500' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xbljyzdy", {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <section className="min-h-screen ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center ">
          {/* Left side - Social Links */}
          <div className="w-full md:w-1/2 space-y-8 mt-32">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-slate-400 text-lg">
                Have a project in mind? Let's discuss how we can collaborate to bring your ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center p-3 space-x-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all ${social.color}`}
                >
                  <span className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600/50 transition-colors">
                    {social.icon}
                  </span>
                  <span className="text-slate-300 group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4 text-slate-400">
              <Mail className="w-6 h-6" />
              <a href="mailto:your.email@example.com" className="hover:text-purple-400 transition-colors">
                rishichaubey3105@gmail.com
              </a>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="w-full md:w-1/2 mt-32">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full py-3 px-6 rounded-lg font-medium relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    {submitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-400 text-sm text-center mt-4">
                    Message sent successfully!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-400 text-sm text-center mt-4">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;