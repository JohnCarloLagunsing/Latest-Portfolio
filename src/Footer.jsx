import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        // Create an object with the form data
        // Variable names must match EXACTLY what's in your EmailJS template
        const formValues = {
            name: form.current.user_name.value,
            email: form.current.user_email.value,
            message: form.current.message.value
        };
        
        console.log('Form values being sent:', formValues);
        
        // Send with both the form and the template parameters
        emailjs.send(
            'service_6zedibe', 
            'template_2fbqxq1',
            formValues,
            'YtHpXpO635YkwCQpF'
        )
        .then((result) => {
            console.log('EmailJS result:', result.text);
            toast.success('Email sent successfully!');
            form.current.reset();
        }, (error) => {
            console.log('EmailJS error:', error.text);
            toast.error('Failed to send email. Please try again.');
        });
    };

    return (
        <footer className="bg-black text-white p-4 shadow-md w-full font-poppins mt-auto">
            {/* Add ToastContainer to show notifications */}
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
            
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 flex flex-col md:flex-row gap-6">
                    {/* Left Side - Get in Touch Section */}
                    <div className="w-full md:w-1/2 p-6">
                        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                        <div className="space-y-4">
                            <p className="text-gray-300">
                                I'm currently accepting projects and opportunities in various IT-related fields. 
                                Whether you need a new website built from scratch, professional graphic design work, 
                                or expert IT consulting services, I'm here to help. I specialize in software development 
                                and can assist with debugging and troubleshooting complex technical issues.
                            </p>
                            <p className="text-gray-300">
                                Additionally, I provide comprehensive technical support and system administration services 
                                to ensure your systems run smoothly and securely at all times.
                            </p>
                            <p className="text-gray-300">
                                From web development to technical problem-solving, I'm committed to delivering 
                                high-quality solutions that meet your needs. Let's work together to bring your 
                                ideas to life and solve your technical challenges.
                            </p>
                            <div className="mt-6 space-y-4">
                                <p className="text-gray-300 pt-2">
                                    Ready to start your next project? Feel free to reach out using the form, and I'll get back to you as soon as possible.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="w-full md:w-1/2 p-6 bg-dark rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6 text-center">For Inquiries</h2>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    placeholder='Your name'
                                    required
                                    className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    placeholder='Your email address'
                                    required
                                    className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder='Tell me about your project or inquiry'
                                    required
                                    className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-200 resize-y"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 font-medium text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright Section - Centered at bottom */}
                <div className="text-center border-t border-white pt-4">
                    <div className="text-sm text-white">
                        &copy; {new Date().getFullYear()} John Carlo Lagunsing. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;