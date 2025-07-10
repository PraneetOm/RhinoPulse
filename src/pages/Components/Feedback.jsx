import { useState } from 'react';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!feedback.trim()) {
      alert("Please write something before submitting.");
      return;
    }

    // TODO: Send to backend or API
    console.log("Feedback submitted:", feedback);

    // Reset form
    setFeedback('');
    setSubmitted(true);

    // Hide success after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (<>
    <section className="bg-white p-6 rounded shadow-md mt-12 max-w-xl mx-auto dark:bg-gray-700">
      <h2 className="text-xl font-bold text-blue-800 mb-4 dark:text-white">💬 Send Us Feedback</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Your thoughts, suggestions, or praise..."
          className="w-full p-3 border border-gray-300 rounded mb-3 dark:text-white dark:bg-gray-800 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 focus:ring focus:outline-none"
        >
          Submit
        </button>

        {submitted && (
          <p className="mt-3 text-sm text-green-600 dark:text-green-400">
            Thank you for your feedback!
          </p>
        )}
      </form>
    </section><br /><br /></>
  );
}