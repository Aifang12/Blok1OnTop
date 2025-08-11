import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { submitToGoogleSheets, ContactFormData } from '../lib/googleSheets';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await submitToGoogleSheets(formData as ContactFormData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-medium mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-normal leading-relaxed">
            Get in touch with the Block 1 community. We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-zinc-900 rounded-2xl p-8">
              <h2 className="text-3xl font-medium mb-8 text-white">Get In Touch</h2>
              <p className="text-zinc-400 mb-8 leading-relaxed font-normal">
                Whether you have questions about our facilities, want to learn more about life at Block 1, 
                or need assistance with anything else, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-zinc-400 font-normal">block1@dormitories.edu</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-zinc-400 font-normal">+1 (555) 123-4567</p>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-zinc-400 font-normal">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Address</h3>
                    <p className="text-zinc-400 font-normal">Blok 1, University Campus<br />123 Education Street, City 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-6 text-white">Office Hours</h3>
              <div className="space-y-3 text-zinc-400 font-normal">
                <p><span className="font-medium text-white">Monday - Friday:</span> 8:00 AM - 8:00 PM</p>
                <p><span className="font-medium text-white">Saturday:</span> 10:00 AM - 6:00 PM</p>
                <p><span className="font-medium text-white">Sunday:</span> 12:00 PM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 rounded-2xl p-8">
            <h2 className="text-3xl font-medium mb-8 text-white">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-3">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors font-normal"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-3">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors font-normal"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-3">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors font-normal"
                  placeholder="Enter message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-3">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors resize-none font-normal"
                  placeholder="Enter your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting 
                    ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-black hover:bg-zinc-200'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to Send</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-900/50 border border-green-700 rounded-xl">
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-green-300 text-sm mt-1">We'll get back to you as soon as possible.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-900/50 border border-red-700 rounded-xl">
                  <div className="flex items-center space-x-2 text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Failed to send message</span>
                  </div>
                  <p className="text-red-300 text-sm mt-1">{errorMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-zinc-900 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-medium mb-6 text-white">Need Immediate Assistance?</h3>
          <p className="text-zinc-400 text-lg mb-8 font-normal leading-relaxed">
            For urgent matters or emergencies, please contact our 24/7 support line at <span className="text-white font-medium">+1 (555) 999-8888</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-zinc-800 px-6 py-3 rounded-full">
              <span className="text-white font-normal">Quick Response</span>
            </div>
            <div className="bg-zinc-800 px-6 py-3 rounded-full">
              <span className="text-white font-normal">24/7 Support</span>
            </div>
            <div className="bg-zinc-800 px-6 py-3 rounded-full">
              <span className="text-white font-normal">Professional Staff</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;