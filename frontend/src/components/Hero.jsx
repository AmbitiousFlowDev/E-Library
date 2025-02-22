import library from "../assets/library.jpg"

export default function Hero() {
  return (
    <div className="hero min-h-screen shadow-lg border-b-2 border-[#ccc] mb-12" style={{backgroundImage: "url('https://cdn.vectorstock.com/i/500p/72/38/cartoon-library-interior-with-bookshelf-background-vector-46827238.jpg')" }}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-left">
              Expand Your Mind Reading a Book
          </h1>
          <p className="mb-5 text-justify">
              Discover endless stories, expand your mind, and explore new ideas—all at your fingertips. Dive into a vast collection of books,
              research materials, and digital resources designed to inspire and empower you. Your next great read awaits!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
