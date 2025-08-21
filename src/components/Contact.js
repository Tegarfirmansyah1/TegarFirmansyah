// src/components/Contact.js

export default function Contact() {
    return (
        <section id="contact" className="bg-bg py-20 scroll-mt-[88px]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-retro">Get In Touch</h2>
                <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 border-4 border-text">
                    <form id="contactForm" action="https://formspree.io/f/xeoekrde" method="POST" className="space-y-4">
                        <div>
                            <input 
                                type="text" name="name" placeholder="Name" required
                                className="w-full px-4 py-3 bg-white border-2 border-text rounded-lg focus:outline-none focus:ring-2 focus:ring-blue font-retro text-lg transition duration-300 placeholder:text-black  placeholder:opacity-60"
                            />
                        </div>
                        <div>
                            <input 
                                type="email" name="email" placeholder="Email" required
                                className="w-full px-4 py-3 bg-white border-2 border-text rounded-lg focus:outline-none focus:ring-2 focus:ring-blue font-retro text-lg transition duration-300 placeholder:text-black  placeholder:opacity-60"
                            />
                        </div>
                        <div>
                            <textarea 
                                name="message" placeholder="Your Message" required rows="4"
                                className="w-full px-4 py-3 bg-white border-2 border-text rounded-lg focus:outline-none focus:ring-2 focus:ring-blue font-retro text-lg transition duration-300 placeholder:text-black  placeholder:opacity-60"
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-secondary text-text px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 font-retro border-2 border-text shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 text-xl"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}