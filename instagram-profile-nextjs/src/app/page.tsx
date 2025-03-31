export default function Home() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to My Home Page</h1>
        <p className="mb-4">
          This is my home page. My hobbies are bowling, basketball, surfing,
          volleyball, watching sports, and playing videogames.
        </p>
        
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reading</li>
            <li>Coding</li>
            <li>Photography</li>
          </ul>
        </section>
      </div>
    );
  }