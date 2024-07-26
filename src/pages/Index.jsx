import { Button } from "@/components/ui/button";
import { Home, Info, Mail, Phone } from "lucide-react";

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

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center"><Info className="w-5 h-5 mr-2" /> About Us</h3>
              <p className="text-sm">We are a company dedicated to creating amazing applications that make your life easier.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center"><Home className="w-5 h-5 mr-2" /> Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:underline">Home</a></li>
                <li><a href="#" className="text-sm hover:underline">Features</a></li>
                <li><a href="#" className="text-sm hover:underline">About</a></li>
                <li><a href="#" className="text-sm hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center"><Mail className="w-5 h-5 mr-2" /> Contact Us</h3>
              <p className="text-sm flex items-center"><Mail className="w-4 h-4 mr-2" /> info@myapplication.com</p>
              <p className="text-sm flex items-center"><Phone className="w-4 h-4 mr-2" /> (123) 456-7890</p>
              <p className="text-sm mt-2">123 App Street, San Francisco, CA 94123</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
            <p className="text-sm">&copy; 2024 My Application. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
