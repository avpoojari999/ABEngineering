// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import './App.css';

function App() {
  // const [isChatOpen, setIsChatOpen] = useState(false);
  // const [messages, setMessages] = useState([
  //   { text: "Hello! I'm your AI assistant. How can I help you with AB Engineering Works today?", isBot: true }
  // ]);
  // const [inputMessage, setInputMessage] = useState('');
  // const [showContactForm, setShowContactForm] = useState(false);
  // const [contactForm, setContactForm] = useState({ name: '', contact: '', query: '' });
  // const [connectForm, setConnectForm] = useState({ name: '', contact: '', message: '' });
  // const [connectFormStatus, setConnectFormStatus] = useState(null);

  // const handleSendMessage = () => {
  //   if (inputMessage.trim() === '') return;

    // Add user message
//     const userMessage = { text: inputMessage, isBot: false };
//     setMessages([...messages, userMessage]);
//     setInputMessage('');

//     // Simulate AI response
//     setTimeout(() => {
//       const botResponse = getBotResponse(inputMessage);
//       setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
//     }, 1000);
//   };

//   const sendEmail = async (emailData) => {
//     try {
//       // Initialize EmailJS (you'll need to replace with your actual user ID)
//       emailjs.init('nqO5yHw6zjGGzJW46'); // Replace with your EmailJS user ID
      
//       const templateParams = {
//         to_email: 'info@abenginworks.com',
//         from_name: emailData.name,
//         from_email: emailData.contact,
//         message: emailData.query,
//         original_question: emailData.originalQuestion
//       };

//       const response = await emailjs.send(
//         'service_iy2g1ur', // Replace with your EmailJS service ID
//         'template_ap0nqht', // Replace with your EmailJS template ID
//         templateParams
//       );

//       if (response.status === 200) {
//         console.log('Email sent successfully');
//         return true;
//       } else {
//         console.error('Failed to send email');
//         return false;
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       return false;
//     }
//   };

//   const handleContactFormSubmit = async () => {
//     if (contactForm.name.trim() === '' || contactForm.contact.trim() === '' || contactForm.query.trim() === '') {
//       setMessages(prev => [...prev, { 
//         text: "Please provide your name, contact details, and query.", 
//         isBot: true 
//       }]);
//       return;
//     }

//     // Add loading message
//     setMessages(prev => [...prev, { 
//       text: "Sending your inquiry...", 
//       isBot: true 
//     }]);

//     // Prepare email data
//     const emailData = {
//       name: contactForm.name,
//       contact: contactForm.contact,
//       query: contactForm.query,
//       originalQuestion: messages[messages.length - 1].text
//     };

//     // Send email
//     const emailSent = await sendEmail(emailData);

//     if (emailSent) {
//       setMessages(prev => [...prev, { 
//         text: `Thank you ${contactForm.name}! Your inquiry has been sent to our team. We'll contact you at ${contactForm.contact} within 24 hours.`, 
//         isBot: true 
//       }]);
//     } else {
//       setMessages(prev => [...prev, { 
//         text: `Thank you ${contactForm.name}! Your inquiry has been recorded. Please also contact us directly at 8108765006 or abengworks@yahoo.in for immediate assistance.`, 
//         isBot: true 
//       }]);
//     }

//     // Reset form
//     setContactForm({ name: '', contact: '', query: '' });
//     setShowContactForm(false);
//   };

//   const handleConnectFormSubmit = async (e) => {
//     e.preventDefault();
//     if (!connectForm.name.trim() || !connectForm.contact.trim() || !connectForm.message.trim()) {
//       setConnectFormStatus({ success: false, message: 'Please fill in all fields.' });
//       return;
//     }
//     setConnectFormStatus(null);
//     // Use the same sendEmail function as chatbot
//     const emailData = {
//       name: connectForm.name,
//       contact: connectForm.contact,
//       query: connectForm.message,
//       originalQuestion: 'Contact Form Submission from Connect With Us section'
//     };
//     const emailSent = await sendEmail(emailData);
//     if (emailSent) {
//       setConnectFormStatus({ success: true, message: 'Thank you! Your message has been sent. We will contact you soon.' });
//       setConnectForm({ name: '', contact: '', message: '' });
//     } else {
//       setConnectFormStatus({ success: false, message: 'Sorry, there was an error sending your message. Please try again later or contact us directly.' });
//     }
//   };

//   const getBotResponse = (userMessage) => {
//     const message = userMessage.toLowerCase();
    
//     // Product/Service related questions
//     if (message.includes('product') || message.includes('service') || message.includes('work') || 
//         message.includes('manufacture') || message.includes('spare') || message.includes('parts') ||
//         message.includes('burner') || message.includes('chuck') || message.includes('shaft') ||
//         message.includes('assembly') || message.includes('device') || message.includes('machine')) {
//       return `Here's our comprehensive product range:

// 🔥 All Types of Burners
// ⚙️ Upper Chuck Spares
// ⚙️ Lower Chuck Spares
// 🔧 Shafts
// 💻 Device Assemblies
// 🔨 Construction Devices
// 🏭 SM-3 Machine Spares
// ⭐ Custom-designed Parts

// All parts are engineered for maximum efficiency and durability. For specific requirements or quotes, please contact us directly.`;
//     }
    
//     // Contact information
//     else if (message.includes('contact') || message.includes('phone') || message.includes('call') || 
//              message.includes('number') || message.includes('reach')) {
//       return `📞 Contact Information:
// Phone: 8108765006 | 9819214375
// Email: abengworks@yahoo.in | abenginworks@gmail.com

// We're here to help with all your inquiries!`;
//     }
    
//     // Location/Address
//     else if (message.includes('location') || message.includes('address') || message.includes('where') || 
//              message.includes('place') || message.includes('office')) {
//       return `📍 Our Location:
// A - 1/2, Shivaji industrial estate, chhabra compound, chhatrapati shivaji Maharaj Marg, Vakola bridge, Santacruz East, Mumbai -400055

// Feel free to visit us or contact us for directions!`;
//     }
    
//     // Email
//     else if (message.includes('email') || message.includes('mail')) {
//       return `📧 Email Addresses:
// • abengworks@yahoo.in
// • abenginworks@gmail.com

// You can also use info@abenginworks.com for general inquiries.`;
//     }
    
//     // Experience/Years
//     else if (message.includes('experience') || message.includes('years') || message.includes('established') || 
//              message.includes('since') || message.includes('how long')) {
//       return `🏆 Experience:
// AB Engineering Works has been in business since 1997, bringing nearly three decades of specialized expertise in pharmaceutical packaging machinery.

// We have 28+ years of experience serving 25+ leading manufacturers in the industry.`;
//     }
    
//     // Pricing/Quotes
//     else if (message.includes('price') || message.includes('quote') || message.includes('cost') || 
//              message.includes('how much') || message.includes('pricing')) {
//       return `💰 Pricing & Quotes:
// For detailed pricing and quotes, please contact us directly:
// • Phone: 8108765006 or 9819214375
// • Email: abengworks@yahoo.in or abenginworks@gmail.com

// We'll provide you with a comprehensive quote based on your specific requirements.`;
//     }
    
//     // Greetings
//     else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
//       return `Hello! Welcome to AB Engineering Works. I'm here to help you with information about our services, products, or any other inquiries. What would you like to know?`;
//     }
    
//     // Unknown questions - show contact form
//     else {
//       setShowContactForm(true);
//       return `I'd be happy to help you with that! To provide you with the most accurate information, could you please share your details? Our team will get back to you promptly.`;
//     }
//   };

  return (
    <div className="bg-light text-dark">
      {/* Chatbot */}
      {/* <div className="chatbot-container">
        {isChatOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <h6 className="mb-0">AB Engineering Assistant</h6>
              <button 
                className="btn-close" 
                onClick={() => setIsChatOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
                  <div className="message-content">
                    {message.text}
                  </div>
                </div>
              ))}
              
              {showContactForm && (
                <div className="message bot">
                  <div className="message-content">
                    <div className="contact-form">
                      <div className="mb-3">
                        <label className="form-label small">Your Name:</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label small">Contact Details (Phone/Email):</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          value={contactForm.contact}
                          onChange={(e) => setContactForm({...contactForm, contact: e.target.value})}
                          placeholder="Enter phone or email"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label small">Message:</label>
                        <textarea
                          className="form-control form-control-sm"
                          value={contactForm.query}
                          onChange={(e) => setContactForm({...contactForm, query: e.target.value})}
                          placeholder="Please describe your inquiry in detail"
                          rows="3"
                        ></textarea>
                      </div>
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={handleContactFormSubmit}
                      >
                        Submit Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="form-control"
              />
              <button onClick={handleSendMessage} className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        )}
        <button 
          className="chat-toggle"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <i className="fas fa-comments"></i>
        </button>
      </div> */}

      {/* Section 1: Welcome */}
      <header className="bg-white text-dark min-vh-100 d-flex align-items-center shadow-lg position-relative overflow-hidden">
        {/* Background Pattern */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5">
          <div className="position-absolute" style={{top: '10%', left: '10%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)'}}></div>
          <div className="position-absolute" style={{top: '60%', right: '15%', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)'}}></div>
          <div className="position-absolute" style={{bottom: '20%', left: '20%', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)'}}></div>
        </div>
        
        <div className="container position-relative" style={{zIndex: 2}}>
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-2 fw-semibold mb-4 text-dark" style={{letterSpacing: '3px', lineHeight: '1.2', fontWeight: 300}}>A. B. Engineering Works</h1>
              <p className="lead mb-4 fs-3 text-dark" style={{lineHeight: '1.6'}}>Manufacturer of Ampoule and Vial Machineries Spare Parts &amp; Repairing Contractors</p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <a href="#about" className="btn btn-outline-dark btn-lg px-4 py-3 fw-bold shadow-sm">
                  <i className="fas fa-info-circle me-2"></i>Learn More
                </a>
                <a href="#contact" className="btn btn-dark btn-lg px-4 py-3 fw-bold text-white shadow-sm">
                  <i className="fas fa-phone me-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <div className="position-relative">
                <div className="bg-light rounded-4 p-3 shadow-lg">
                  <img src="/syringe.jpeg" alt="Syringe Machine" className="img-fluid rounded-3" style={{maxHeight: '500px', minHeight: '400px', objectFit: 'cover'}} />
                </div>
                {/* <div className="position-absolute top-0 start-0 w-100 h-100 bg-light rounded-4" style={{transform: 'rotate(-2deg)', zIndex: -1}}></div>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-4" style={{transform: 'rotate(2deg)', zIndex: -2}}></div> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3" style={{zIndex: 3}}>
          <div className="text-center">
            <div className="text-muted mb-2">Scroll to explore</div>
            <i className="fas fa-chevron-down text-muted fa-lg animate-bounce"></i>
          </div>
        </div>
      </header>

      {/* Section 2: About Us */}
      <section id="about" className="py-4 bg-white border-bottom">
        <div className="container">
          <div className="text-center">
            <div className="mb-4">
              <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <i className="fas fa-industry fa-3x text-white"></i>
              </div>
              <h2 className="fw-bold mb-2 text-primary">About Us</h2>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-calendar-alt fa-2x text-primary me-3"></i>
                <h5 className="mb-0">Established in 1997</h5>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className="fs-5 mb-3" style={{lineHeight: '1.6'}}>AB Engineering Works brings nearly three decades of unparalleled experience in manufacturing specialized machinery for ampoule and vial production.</p>
                <div className="row g-2 justify-content-center mb-3">
                  <div className="col-6">
                    <div className="d-flex align-items-center justify-content-center p-2 bg-light rounded">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span className="fw-semibold">High-Precision Parts</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center justify-content-center p-2 bg-light rounded">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span className="fw-semibold">Expert Repair Services</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center justify-content-center p-2 bg-light rounded">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span className="fw-semibold">Industry Leaders</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center justify-content-center p-2 bg-light rounded">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span className="fw-semibold">Seamless Operations</span>
                    </div>
                  </div>
                </div>
                <p className="fs-5" style={{lineHeight: '1.6'}}>We are renowned for producing high-precision spare parts and delivering expert repairing services to the pharmaceutical packaging industry's most prominent players. Our commitment ensures the seamless operation of critical production lines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Expertise */}
      {/* <section className="py-5 bg-light border-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3 text-primary">Core Expertise</h2>
            <p className="fs-5 text-muted">Delivering excellence through innovation and precision</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-body text-center p-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-cogs fa-2x text-white"></i>
                  </div>
                  <h5 className="fw-bold mb-3 text-primary">Manufacturing Excellence</h5>
                  <p className="text-muted mb-0">Delivering performance-driven engineering solutions tailored to industry needs with meticulous attention to detail.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-body text-center p-4">
                  <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-shield-alt fa-2x text-white"></i>
                  </div>
                  <h5 className="fw-bold mb-3 text-success">Uncompromising Quality</h5>
                  <p className="text-muted mb-0">Every component undergoes rigorous testing to meet the highest standards of durability and functionality, ensuring peak performance.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-body text-center p-4">
                  <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-lightbulb fa-2x text-white"></i>
                  </div>
                  <h5 className="fw-bold mb-3 text-warning">Continuous Innovation</h5>
                  <p className="text-muted mb-0">Our in-house R&amp;D capabilities drive constant improvement, integrating the latest technological advancements into our products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 4: Product Range */}
      {/* <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3 text-primary">Comprehensive Product Range</h2>
            <p className="fs-5 text-muted">Custom-designed parts for maximum efficiency and durability, engineered to exact specifications</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 shadow-sm hover-card">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-fire text-white"></i>
                    </div>
                    <span className="fw-semibold">All Types of Burners</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 shadow-sm hover-card">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-cog text-white"></i>
                    </div>
                    <span className="fw-semibold">Upper Chuck Spares</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 shadow-sm hover-card">
                    <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-cogs text-white"></i>
                    </div>
                    <span className="fw-semibold">Lower Chuck Spares</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 shadow-sm hover-card">
                    <div className="bg-info rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-arrows-alt-h text-white"></i>
                    </div>
                    <span className="fw-semibold">Shafts</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 shadow-sm hover-card">
                    <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-microchip text-white"></i>
                    </div>
                    <span className="fw-semibold">Device Assemblies</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 shadow-sm hover-card">
                    <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-hammer text-white"></i>
                    </div>
                    <span className="fw-semibold">Construction Devices</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 shadow-sm hover-card">
                    <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-industry text-white"></i>
                    </div>
                    <span className="fw-semibold">SM-3 Machine Spares</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 shadow-sm hover-card">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-star text-white"></i>
                    </div>
                    <span className="fw-semibold">Custom-designed Parts</span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="bg-gradient-primary text-white p-4 rounded-3 shadow-lg">
                  <i className="fas fa-award fa-2x mb-3"></i>
                  <h5 className="fw-bold mb-2">Maximum Efficiency & Durability</h5>
                  <p className="mb-0">Engineered to exact specifications for optimal performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 5: Why Choose Us */}
      {/* <section className="py-5 bg-light border-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3 text-primary">Why Choose AB Engineering Works?</h2>
            <p className="fs-5 text-muted">Trusted by industry leaders for quality and reliability</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm text-center hover-card">
                <div className="card-body">
                  <i className="fas fa-award fa-2x text-primary mb-3"></i>
                  <h5 className="fw-bold">28+ Years of Experience</h5>
                  <p className="text-muted">Nearly three decades of specialized expertise in the pharmaceutical packaging machinery sector.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm text-center hover-card">
                <div className="card-body">
                  <i className="fas fa-handshake fa-2x text-success mb-3"></i>
                  <h5 className="fw-bold">Trusted by 25+ Leading Manufacturers</h5>
                  <p className="text-muted">A proven track record of successful partnerships with top industry players.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm text-center hover-card">
                <div className="card-body">
                  <i className="fas fa-certificate fa-2x text-warning mb-3"></i>
                  <h5 className="fw-bold">High-Quality Precision Parts</h5>
                  <p className="text-muted">Manufacturing excellence ensuring durable and highly efficient components.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm text-center hover-card">
                <div className="card-body">
                  <i className="fas fa-headset fa-2x text-info mb-3"></i>
                  <h5 className="fw-bold">Dedicated Support &amp; Service</h5>
                  <p className="text-muted">Responsive and knowledgeable team committed to client satisfaction.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm text-center hover-card">
                <div className="card-body">
                  <i className="fas fa-clock fa-2x text-danger mb-3"></i>
                  <h5 className="fw-bold">Commitment to Timely Delivery</h5>
                  <p className="text-muted">Ensuring your operations stay on schedule with prompt and reliable service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 6: Partner With Us */}
      {/* <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4 text-primary">Partner with AB Engineering Works</h2>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '60px', height: '60px'}}>
                    <i className="fas fa-handshake fa-2x text-white"></i>
                  </div>
                  <h5 className="mb-0">Your Success is Our Priority</h5>
                </div>
                <p className="fs-5 text-muted" style={{lineHeight: '1.8'}}>"Experience precision, reliability, and unparalleled expertise in pharmaceutical packaging machinery."</p>
              </div>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Precision Engineering</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Reliable Service</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Expert Support</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Quality Assurance</span>
                  </div>
                </div>
              </div>
              <p className="fs-5 mb-4" style={{lineHeight: '1.8'}}>We look forward to building a lasting partnership based on trust and excellence.</p>
            </div>
            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <div className="position-relative">
                <div className="bg-gradient-primary rounded-3 p-5 shadow-lg text-white">
                  <i className="fas fa-users fa-4x mb-4"></i>
                  <h4 className="fw-bold mb-3">Trusted Partnership</h4>
                  <p className="mb-0">Join hundreds of satisfied clients who trust AB Engineering Works for their critical manufacturing needs.</p>
                </div>
                <div className="bg-success rounded-3 p-3 shadow-lg position-absolute" style={{top: '-20px', right: '-20px', transform: 'rotate(5deg)'}}>
                  <i className="fas fa-star fa-2x text-white"></i>
                </div>
                <div className="bg-warning rounded-3 p-3 shadow-lg position-absolute" style={{bottom: '-20px', left: '-20px', transform: 'rotate(-5deg)'}}>
                  <i className="fas fa-award fa-2x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Last Section: Connect With Us */}
      {/* <footer id="contact" className="pt-5 bg-gradient-primary text-white position-relative" style={{background: 'linear-gradient(90deg, #0f2027 0%, #2c5364 100%)'}}>
        <div className="container pb-4">
          <h2 className="fw-bold mb-4 text-center">Connect With Us</h2>
          <div className="row justify-content-center g-4 align-items-stretch">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
              <div className="mb-4 p-4 bg-white bg-opacity-10 rounded-4 shadow text-white h-100"> */}
                {/* Contact Details */}
                {/* <div className="mb-3 fs-5">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-phone-alt me-3 fa-lg" style={{width: '20px'}}></i>
                    <span className="fw-semibold">Contact:</span>
                  </div>
                  <div className="ms-5">
                    <a href="https://wa.me/918108765006" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-underline me-3">8108765006</a>
                    <span className="text-white-50">|</span>
                    <a href="https://wa.me/919819214375" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-underline ms-3">9819214375</a>
                  </div>
                </div>
                <div className="mb-3 fs-5">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-envelope me-3 fa-lg" style={{width: '20px'}}></i>
                    <span className="fw-semibold">Email:</span>
                  </div>
                  <div className="ms-5">
                    <div className="mb-1">
                      <a href="mailto:abengworks@yahoo.in" className="text-white text-decoration-underline">abengworks@yahoo.in</a>
                    </div>
                    <div>
                      <a href="mailto:abenginworks@gmail.com" className="text-white text-decoration-underline">abenginworks@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="mb-3 fs-5">
                  <div className="d-flex align-items-start mb-2">
                    <i className="fas fa-map-marker-alt me-3 fa-lg mt-1" style={{width: '20px'}}></i>
                    <span className="fw-semibold">Location:</span>
                  </div>
                  <div className="ms-5">
                    <span className="text-white">A - 1/2, Shivaji industrial estate, chhabra compound, chhatrapati shivaji Maharaj Marg, Vakola bridge, Santacruz East, Mumbai -400055</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
              <div className="contact-form h-100 mt-4 mt-md-0 bg-white bg-opacity-75 rounded-3 p-4 shadow">
                <h5 className="fw-bold text-dark mb-3">Ask your queries</h5>
                <form onSubmit={handleConnectFormSubmit}>
                  <div className="mb-3">
                    <label className="form-label text-dark">Name</label>
                    <input type="text" className="form-control" value={connectForm.name} onChange={e => setConnectForm({...connectForm, name: e.target.value})} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-dark">Email/Phone No.</label>
                    <input type="text" className="form-control" value={connectForm.contact} onChange={e => setConnectForm({...connectForm, contact: e.target.value})} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-dark">Message</label>
                    <textarea className="form-control" rows="3" value={connectForm.message} onChange={e => setConnectForm({...connectForm, message: e.target.value})} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Send Message</button>
                  {connectFormStatus && <div className={`mt-3 alert ${connectFormStatus.success ? 'alert-success' : 'alert-danger'}`}>{connectFormStatus.message}</div>}
                </form>
              </div>
            </div> */}
          {/* </div>
        </div>
      </footer> */}

      {/* Location Section */}
      {/* <section id="location" className="py-5 bg-white border-top">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary mb-3">Our Location</h2> */}
            {/* <p className="fs-5 text-muted mb-1">A - 1/2, Shivaji industrial estate, chhabra compound, chhatrapati shivaji Maharaj Marg, Vakola bridge, Santacruz East, Mumbai -400055</p> */}
          {/* </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="map-responsive" style={{width: '100%', maxWidth: '700px', margin: '0 auto'}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.3656674318663!2d72.84643064442747!3d19.07554650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c910207c7303%3A0xce6ba585751425ec!2sAB%20engineering%20works!5e0!3m2!1sen!2sin!4v1753624540372!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{border:0, borderRadius:'12px'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AB Engineering Works Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Floating WhatsApp Button */}
      {/* <div className="whatsapp-float">
        <input type="checkbox" id="wa-fab-toggle" className="d-none" />
        <label htmlFor="wa-fab-toggle" className="wa-fab-label">
          <i className="fab fa-whatsapp"></i>
        </label>
        <div className="wa-fab-menu">
          <a href="https://wa.me/918108765006" target="_blank" rel="noopener noreferrer" className="wa-fab-link">
            <i className="fab fa-whatsapp"></i> 8108765006
          </a><br></br>
          <a href="https://wa.me/919819214375" target="_blank" rel="noopener noreferrer" className="wa-fab-link">
            <i className="fab fa-whatsapp"></i> 9819214375
          </a>
        </div>
      </div> */}

      <div className="bg-dark bg-opacity-75 py-3 w-100 text-center position-relative" style={{zIndex:2}}>
        <small className="text-white-50">&copy; 2025 A. B. Engineering . All rights reserved.</small>
      </div>
    </div>
  );
}

export default App;


