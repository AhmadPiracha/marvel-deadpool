import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactFormModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { scale: 0, opacity: 0, rotate: -10 },
      { scale: 1, opacity: 1, rotate: 0, duration: 0.5, ease: "back.out(1.7)" }
    );
    gsap.to(titleRef.current, {
      x: 10,
      rotation: 2,
      duration: 0.3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.4,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      gsap.fromTo(
        ".success-message",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    storedContacts.push(formData);
    localStorage.setItem("contacts", JSON.stringify(storedContacts));
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 font-sans">
      <div
        ref={modalRef}
        className="relative bg-gradient-to-br from-black to-red-900 rounded-2xl p-6 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 border-4 border-red-500 shadow-lg"
      >
        {isSubmitted ? (
          <div className="text-center success-message">
            <h3 className="text-2xl font-bold text-red-400 mb-4 font-zentry">
              YO, You Just Slid Into Deadpool’s DMs!
            </h3>
            <p className="text-white mb-4">
              I’ll hit you back… or maybe I’ll ghost you. Who knows? 😜
            </p>
            <p className="text-sm text-red-400 font-bold mb-4">
              “Bet you didn’t expect chimichangas in your inbox! 🌮 #MaximumEffort”
            </p>
            <img
              src="/img/deadpool-thumbs-up.png"
              alt="Deadpool thumbs up"
              className="mx-auto mb-4 w-20"
              height={80}
              width={80}
            />
            <button
              onClick={closeModal}
              className="bg-red-600 text-white font-bold text-lg rounded-lg px-6 py-3 hover:bg-red-500 transition-all"
            >
              Peace Out
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2
                ref={titleRef}
                className="text-4xl sm:text-5xl font-extrabold text-red-400 uppercase tracking-wider font-zentry"
              >
                Yo, Hit Up Deadpool
              </h2>
              <button
                onClick={closeModal}
                className="text-3xl font-bold text-white hover:text-red-400 transition-transform hover:scale-125"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className="block text-sm font-bold text-red-300 mb-2 tracking-wide form-label"
                  htmlFor="name"
                >
                  What's Your Alias, Merc?
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Call me Wade, but who you vibin’ as?"
                  className="w-full border-2 border-red-500 rounded-lg px-4 py-3 bg-black/80 text-white placeholder-red-300/50 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-bold text-red-300 mb-2 tracking-wide form-label"
                  htmlFor="email"
                >
                  Drop Your Email, I Promise Not to Spam… Much.
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="deadpoolstan@example.com"
                  className="w-full border-2 border-red-500 rounded-lg px-4 py-3 bg-black/80 text-white placeholder-red-300/50 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-bold text-red-300 mb-2 tracking-wide form-label"
                  htmlFor="message"
                >
                  What’s the Mission, Hero?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Spill your wildest tea or just say ‘yo’!"
                  className="w-full border-2 border-red-500 rounded-lg px-4 py-3 bg-black/80 text-white placeholder-red-300/50 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all resize-none h-32"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  ref={buttonRef}
                  type="submit"
                  className="bg-white text-black font-bold text-lg rounded-lg px-6 py-3 hover:bg-red-500 transition-all shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                >
                  Yeet It!
                </button>
              </div>
              <p className="text-sm text-red-300 mt-4">
                P.S. Might hit you back with a chimichanga recipe. No promises, fam.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactFormModal;