import library from "../../assets/library.jpg"

export default function Hero() {
  return (
    <div className="hero h-[20rem] shadow-lg  border-secondary mb-12"
         style={{backgroundImage: "url('https://images6.alphacoders.com/705/705836.jpg')" }}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-white">
        <div className="max-w-md flex flex-col justify-center items-center">
          <h1 className="mb-5 text-5xl font-bold text-center">
              Expand Your Mind Reading a Book
          </h1>
          <p className="mb-5 text-center">
              Discover endless stories, expand your mind, and explore new ideas—all at your fingertips. Dive into a vast collection of books,
              research materials, and digital resources designed to inspire and empower you. Your next great read awaits!
          </p>
        </div>
      </div>
    </div>
  );
}
