import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkedIn, Twitter, GitHub } from "@mui/icons-material";
import { BookOpenIcon, UsersIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Team1 from "../_components/Assests/team.jpg";
import Team3 from "../_components/Assests/team3.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold  mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting curious minds with quality content since 2024. Our mission is to
            empower, educate, and inspire through thoughtful writing.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded by a group of passionate writers and tech enthusiasts, we set out
                to create a space where knowledge meets creativity. What started as a
                small passion project has grown into a thriving community of readers and
                writers.
              </p>
              <p className="text-gray-600">
                Today, we publish diverse perspectives on technology, lifestyle, and
                personal growth, reaching over 500k monthly readers worldwide.
              </p>
            </div>
            <div className="relative h-64  overflow-hidden">
              <Image
                src={Team3}
                alt="Team working"
                 className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div
                key={member}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={`/avatar-${member}.jpg`} />
                  <AvatarFallback>TM</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Team Member {member}
                </h3>
                <p className="text-gray-500 text-center mb-4">Lead Writer</p>
                <p className="text-gray-600 text-center mb-4">
                  Specializing in technology and innovation with 8+ years of experience.
                </p>
                <div className="flex justify-center space-x-4">
                  <LinkedIn className="text-gray-600 hover:text-primary cursor-pointer" />
                  <Twitter className="text-gray-600 hover:text-primary cursor-pointer" />
                  <GitHub className="text-gray-600 hover:text-primary cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-white rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <NewspaperIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">1,234+</div>
              <div className="text-sm">Published Articles</div>
            </div>
            <div className="p-4">
              <UsersIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">500K+</div>
              <div className="text-sm">Monthly Readers</div>
            </div>
            <div className="p-4">
              <BookOpenIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm">Writing Categories</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Join Our Journey?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Whether you want to collaborate, write for us, or just say hello - we'd love
            to hear from you!
          </p>
          <div className="flex justify-center gap-4">
           <a href="/contact"> <Button variant="default" className="px-8 py-4">
              Contact Us
            </Button></a>
            <a href="/contact"><Button variant="default" className="px-8 py-4">
              Write for Us
            </Button></a>
          </div>
        </div>
      </div>
    </div>
  );
}