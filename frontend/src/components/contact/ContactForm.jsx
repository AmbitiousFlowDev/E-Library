import Input from "../form/Input.jsx";
import TextArea from "../form/TextArea.jsx";

export default function ContactForm() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-base-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <Input id="name" placeholder="Enter your name" className="input input-bordered w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
          <Input id="email" type="email" placeholder="Enter your email" className="input input-bordered w-full" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
          <TextArea id="message" placeholder="Write your message" className="textarea textarea-bordered w-full" />
        </div>
        <button type="submit" className="btn btn-primary w-full mt-4">Submit</button>
      </form>
    </div>
  );
}
