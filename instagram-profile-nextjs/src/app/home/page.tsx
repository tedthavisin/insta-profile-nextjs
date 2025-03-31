export default function Home() {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
        <p className="mb-4">
          This is my home page. My hobbies are bowling, basketball, surfing,
          volleyball, watching sports, and playing videogames.
        </p>
        
        <section className="mt-8">
          <h3 className="text-lg font-medium mb-2">About Me</h3>
          <p className="mb-2">
            This is a <strong>paragraph</strong> with some{' '}
            <em>emphasized</em> text.
          </p>
          
          <h4 className="font-medium mt-4">My Hobbies</h4>
          <ul className="list-disc pl-5">
            <li>Reading</li>
            <li>Coding</li>
            <li>Photography</li>
          </ul>
        </section>
      </div>
    );
  }