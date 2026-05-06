import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  Shield,
  Wifi,
  Utensils,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  Star,
  Bed,
  Sparkles,
  Award,
  BookOpen,
} from "lucide-react";

export function HomePage() {
  const features = [
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock CCTV surveillance and security personnel for your safety.",
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Unlimited fast internet connectivity for your academic and entertainment needs.",
    },
    {
      icon: Utensils,
      title: "Mess & Dining",
      description: "Hygienic and nutritious meals prepared with care, multiple meal options.",
    },
    {
      icon: Clock,
      title: "24/7 Power Backup",
      description: "Uninterrupted power supply to ensure your comfort at all times.",
    },
  ];

  const roomTypes = [
    {
      title: "Single Room",
      price: "₹8,000/month",
      image: "https://images.unsplash.com/photo-1663194815198-3e3183f9d9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3N0ZWwlMjByb29tJTIwc3R1ZGVudHxlbnwxfHx8fDE3Njk3NDk5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Private Room", "Study Table & Chair", "Attached Bathroom", "Wardrobe"],
      popular: false,
    },
    {
      title: "Double Sharing",
      price: "₹5,500/month",
      image: "https://images.unsplash.com/photo-1700710909700-d026edc77079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZG9ybWl0b3J5fGVufDF8fHx8MTc2OTc0OTk0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Shared Room", "Individual Study Spaces", "Common Bathroom", "Storage Space"],
      popular: true,
    },
    {
      title: "Triple Sharing",
      price: "₹4,000/month",
      image: "https://images.unsplash.com/photo-1697494794128-0cdc5e4314c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYWNjb21tb2RhdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2OTY3MTkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Spacious Room", "Individual Beds", "Shared Amenities", "Budget-Friendly"],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Engineering Student",
      content:
        "Staytrack has been my home away from home. The facilities are excellent, and the staff is very supportive. I feel safe and comfortable here.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "Medical Student",
      content:
        "The study environment here is perfect for focused learning. The high-speed WiFi and quiet atmosphere help me concentrate on my studies.",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      role: "Commerce Student",
      content:
        "I love the community here! Made so many friends and the location is perfect - close to college and all amenities. Highly recommended!",
      rating: 5,
    },
  ];

  const whyChooseUs = [
    { icon: Award, text: "Experienced Management" },
    { icon: BookOpen, text: "Study-Friendly Environment" },
    { icon: Users, text: "Vibrant Community" },
    { icon: MapPin, text: "Prime Location" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgyLTJ6TTAgMTNoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTEzNi0xMzJoLTJ2Mmgydi0yek0wIDEzaDJ2LTJIMHYyem0wIDE4aDJ2LTJIMHY0aC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Your Home Away From Home</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                Welcome to <span className="text-accent">Staytrack</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Live Smart. Stay Comfortable.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                A modern hostel facility designed specifically for students. Experience comfort, safety, and a supportive community that helps you thrive in your academic journey.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/rooms">
                  <Button
                    size="lg"
                    className="rounded-full bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 h-12 px-8"
                  >
                    View Rooms & Pricing
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-2 border-white text-white hover:bg-white hover:text-primary h-12 px-8"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-accent">100+</div>
                  <div className="text-sm text-white/80">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-accent">24/7</div>
                  <div className="text-sm text-white/80">Security</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-accent">5★</div>
                  <div className="text-sm text-white/80">Rated</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663194815198-3e3183f9d9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3N0ZWwlMjByb29tJTIwc3R1ZGVudHxlbnwxfHx8fDE3Njk3NDk5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Staytrack Hostel"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Staytrack */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Why Choose Staytrack?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide more than just a place to stay. Experience a supportive environment designed for student success.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold">{item.text}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Premium Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable and productive student life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room Types Preview */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Our Room Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect accommodation that fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  room.popular ? "border-2 border-accent relative" : ""
                }`}
              >
                {room.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{room.title}</h3>
                    <span className="text-2xl font-black text-accent">{room.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/rooms">
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
                      <Bed className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rooms">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 hover:bg-primary hover:text-white h-12 px-8"
              >
                View All Rooms & Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">What Students Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our community about their experience at Staytrack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to Make Staytrack Your Home?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of students and experience comfortable, safe, and modern living.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/rooms">
              <Button
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-white shadow-lg h-12 px-8"
              >
                Browse Rooms
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white hover:text-primary h-12 px-8"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
