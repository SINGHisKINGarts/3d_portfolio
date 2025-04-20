import React, { useState } from 'react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formBody = new URLSearchParams({
      Name: form.name,
      Email: form.email,
      Message: form.message
    }).toString();

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycby-_eBOA3HI9U34fbHFmA7qVCrieymrpUPckJNPCfSQLXnXL8hoN8kRz_7dwBYesORI/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formBody
        }
      );
      alert('Message sent! Thank you 🙌');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Submit error:', err);
      alert('Sorry! I didn\'t get your message.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex-lg:flex-row flex-col max-container h-[100vh]">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="abcd@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              rows={4}
              name="message"
              className="textarea"
              placeholder="Your Message"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
