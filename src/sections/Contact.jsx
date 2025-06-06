import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
                <div className="max-w-4xl mx-auto">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;