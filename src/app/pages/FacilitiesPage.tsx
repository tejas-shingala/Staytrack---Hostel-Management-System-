import { Card, CardContent } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  Wifi,
  Shield,
  Utensils,
  Shirt,
  SprayCan,
  BookOpen,
  Zap,
  Car,
  Dumbbell,
  Wind,
  Users,
  Camera,
  Clock,
  Lightbulb,
  Tv,
  Coffee,
} from "lucide-react";

export function FacilitiesPage() {
  const facilities = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Unlimited high-speed internet connectivity throughout the hostel premises. Perfect for online classes, research, and entertainment.",
      features: ["100 Mbps speed", "24/7 availability", "Multiple access points", "Secure connection"],
    },
    {
      icon: Shield,
      title: "24/7 Security & CCTV",
      description: "Your safety is our priority. Round-the-clock security personnel and CCTV surveillance in all common areas.",
      features: ["Trained security guards", "CCTV monitoring", "Secure entry/exit", "Emergency response"],
    },
    {
      icon: Utensils,
      title: "Mess & Dining Area",
      description: "Hygienic and nutritious meals prepared by professional cooks. Clean and spacious dining area for communal meals.",
      features: ["3 meals daily", "Vegetarian options", "Clean kitchen", "Special diet support"],
    },
    {
      icon: Shirt,
      title: "Laundry Service",
      description: "Convenient laundry facilities with washing machines and drying areas. Professional service available at nominal charges.",
      features: ["Washing machines", "Drying area", "Iron facility", "Affordable pricing"],
    },
    {
      icon: SprayCan,
      title: "Daily Housekeeping",
      description: "Professional housekeeping staff ensures clean and hygienic living spaces. Daily cleaning of common areas and weekly room service.",
      features: ["Daily common area cleaning", "Weekly room service", "Sanitization", "Waste management"],
    },
    {
      icon: BookOpen,
      title: "Study Room",
      description: "Dedicated quiet study spaces with comfortable seating and good lighting. Perfect for focused learning and group studies.",
      features: ["Quiet environment", "Study tables", "Good lighting", "AC facility"],
    },
    {
      icon: Zap,
      title: "Power Backup",
      description: "Uninterrupted power supply with 24/7 backup for all essential services. Never worry about power cuts.",
      features: ["Full backup", "Instant switch", "All areas covered", "Generator maintained"],
    },
    {
      icon: Car,
      title: "Parking Area",
      description: "Secure parking facility for bikes and cars. Well-lit and monitored parking space for residents' vehicles.",
      features: ["Bike parking", "Car parking", "CCTV monitored", "24/7 access"],
    },
    {
      icon: Dumbbell,
      title: "Fitness Area",
      description: "Stay fit and healthy with our basic fitness equipment. Perfect for maintaining an active lifestyle.",
      features: ["Basic equipment", "Open hours", "Safe environment", "Fitness guidance"],
    },
    {
      icon: Wind,
      title: "Air Conditioning",
      description: "All rooms equipped with air conditioning or cooling facilities. Stay comfortable in all seasons.",
      features: ["Individual AC/Fan", "Temperature control", "Energy efficient", "Regular maintenance"],
    },
    {
      icon: Users,
      title: "Common Room",
      description: "Spacious common area for socializing, recreation, and community events. Build friendships and relax after studies.",
      features: ["TV facility", "Seating area", "Games", "Events space"],
    },
    {
      icon: Tv,
      title: "Recreation Facilities",
      description: "Entertainment facilities including TV, indoor games, and sports equipment for leisure time activities.",
      features: ["LED TV", "Indoor games", "Sports equipment", "Reading material"],
    },
    {
      icon: Coffee,
      title: "Pantry Area",
      description: "24/7 access to pantry with water purifier, microwave, and refrigerator. Perfect for late-night snacks.",
      features: ["Water purifier", "Microwave", "Refrigerator", "24/7 access"],
    },
    {
      icon: Lightbulb,
      title: "Modern Amenities",
      description: "Contemporary furnishings and fixtures throughout the hostel. Comfortable and well-maintained living spaces.",
      features: ["Modern furniture", "LED lighting", "Comfortable beds", "Storage solutions"],
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Reasonable entry/exit timings with proper security protocols. Balance freedom with responsibility.",
      features: ["Defined hours", "Late entry provisions", "Guest policy", "Emergency access"],
    },
    {
      icon: Camera,
      title: "Biometric System",
      description: "Modern biometric entry system for enhanced security and convenience. Track your entry/exit easily.",
      features: ["Fingerprint access", "Attendance tracking", "Secure entry", "Digital records"],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgyLTJ6TTAgMTNoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTEzNi0xMzJoLTJ2Mmgydi0yek0wIDEzaDJ2LTJIMHYyem0wIDE4aDJ2LTJIMHY0aC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Our Facilities</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Premium amenities and services designed to make your stay comfortable, safe, and productive.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Facilities with Images */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6">World-Class Amenities</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Staytrack, we believe in providing more than just accommodation. Our comprehensive range of facilities is designed to support your academic journey while ensuring comfort and convenience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From high-speed internet for your online classes to 24/7 security for your peace of mind, every facility is maintained to the highest standards. Our goal is to create an environment where you can focus on your studies while enjoying a comfortable lifestyle.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1693214674477-1159bddf1598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3N0ZWwlMjBmYWNpbGl0aWVzJTIwZ3ltfGVufDF8fHx8MTc2OTc0OTk5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Staytrack Facilities"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Facilities Grid */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Complete Facility List</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable and productive student life under one roof.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold mb-2">{facility.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {facility.description}
                    </p>
                    <div className="space-y-1">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                          <div className="w-1 h-1 bg-secondary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Study Environment */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl lg:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMHJvb20lMjBsaWJyYXJ5fGVufDF8fHx8MTc2OTc0OTk5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Study Room"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-black mb-6">Study-Friendly Environment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We understand the importance of a conducive learning environment. Our dedicated study areas are designed to help you focus and achieve your academic goals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Quiet Study Rooms</div>
                    <div className="text-sm text-muted-foreground">Peaceful spaces for focused learning</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Proper Lighting</div>
                    <div className="text-sm text-muted-foreground">Eye-friendly LED lights in all study areas</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wind className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Climate Control</div>
                    <div className="text-sm text-muted-foreground">Air-conditioned study rooms for comfort</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wifi className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">High-Speed Internet</div>
                    <div className="text-sm text-muted-foreground">Fast WiFi for research and online learning</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
