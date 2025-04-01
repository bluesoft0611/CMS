import { useState } from 'react';

export default function ContactForm({ emailTo }) {
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message to ${emailTo}: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-6 mb-4">
      <textarea onChange={e => setMessage(e.target.value)} className="w-full border p-2 mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send</button>
    </form>
  );
}
