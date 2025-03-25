import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us - Your Website Name",
  description:
    "Learn more about Your Website Name, our mission, and the team behind it. Discover how we are making a difference in the industry and what drives us forward.",
};

function AboutPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-6">
      <Card className="w-full max-w-2xl p-6 text-center shadow-lg rounded-2xl bg-white">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <CardContent>
          <p className="text-gray-600 mt-4">
            Welcome to <strong>Your Website Name</strong>. We are committed to providing the best services to our customers, driven by innovation and passion.
          </p>
          <Button className="mt-6">Learn More</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default AboutPage;