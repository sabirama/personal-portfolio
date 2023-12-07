import { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      template_params: {
        name: name,
        email: email,
        message: message,
      },
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Your message was sent! You'll soon hear from me.");
      } else {
        const errorData = await response.json();
        alert("Oops... " + JSON.stringify(errorData));
      }
    } catch (error) {
      alert("Oops... " + JSON.stringify(error));
    }
    console.log("test");
  };

  useEffect(() => {
    scrollTo(top);
  }, []);

  return (
    <section id="contact" className="section">
      <h1>Send a Message</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Your Name</legend>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
        </fieldset>
        <fieldset>
          <legend>Your Email</legend>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </fieldset>
        <fieldset>
          <legend>Your Message</legend>
          <textarea rows={10} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </fieldset>
        <button className="mt-1" style={{ width: "100%" }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
