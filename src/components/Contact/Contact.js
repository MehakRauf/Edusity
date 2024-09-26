import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/phone-icon.png'
import phone_icon from '../../assets/location-icon.png'
import arrow_icon from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "59242487-2dfd-415a-8512-4dbbd020b4f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className="contact container">
            <div className="contact-cols">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information
                    below. Your feedback, questions, and suggestions are important
                    to us as we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li><img src={email_icon} alt="" />mehakrauf.2386@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+1 123-456-789</li>
                    <li><img src={location_icon} alt="" />United States</li>
                </ul>
            </div>
            <div className="contact-cols">
                <form onSubmit={onSubmit}>
                    <label >Your name</label>
                    <input type="text" name="name" placeholder='Enter your name' required />
                    <label >Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label >Write your messages here</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                    <button type='submit' className='btn dark-btn'>Send Message <img src={arrow_icon} /></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact