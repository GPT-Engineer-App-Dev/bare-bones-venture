import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">My Application</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Welcome</h2>
          <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
          <Button>Get Started</Button>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside">
            <li>Simple and clean layout</li>
            <li>Easily customizable</li>
            <li>Built with React and Tailwind CSS</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
          <p>Start adding your own components and functionality to create your desired application.</p>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 My Application. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
