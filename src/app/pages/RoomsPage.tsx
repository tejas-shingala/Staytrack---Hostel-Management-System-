import { Link } from "react-router";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  CheckCircle2,
  Bed,
  Users,
  DollarSign,
  Wifi,
  Wind,
  Lamp,
  Book,
  Shield,
  ArrowRight,
} from "lucide-react";

export function RoomsPage() {
  const rooms = [
    {
      id: 1,
      title: "Single Room",
      subtitle: "Perfect for focused study",
      price: "₹8,000",
      period: "per month",
      image: "https://images.unsplash.com/photo-1663194815198-3e3183f9d9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3N0ZWwlMjByb29tJTIwc3R1ZGVudHxlbnwxfHx8fDE3Njk3NDk5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      occupancy: "1 Person",
      features: [
        "Private attached bathroom",
        "Individual study table & chair",
        "Built-in wardrobe",
        "Air conditioning",
        "24/7 WiFi access",
        "Private balcony",
        "LED lighting",
        "Power backup",
      ],
      amenities: [
        "Daily housekeeping",
        "Fresh linen weekly",
        "Maintenance support",
        "Secure storage",
      ],
      popular: false,
      badge: "Premium",
    },
    {
      id: 2,
      title: "Double Sharing",
      subtitle: "Best value for money",
      price: "₹5,500",
      period: "per month",
      image: "https://images.unsplash.com/photo-1700710909700-d026edc77079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZG9ybWl0b3J5fGVufDF8fHx8MTc2OTc0OTk0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      occupancy: "2 Persons",
      features: [
        "Common attached bathroom",
        "Individual study spaces",
        "Shared wardrobe",
        "Air conditioning",
        "24/7 WiFi access",
        "Windows with natural light",
        "LED lighting",
        "Power backup",
      ],
      amenities: [
        "Daily housekeeping",
        "Fresh linen weekly",
        "Maintenance support",
        "Individual storage units",
      ],
      popular: true,
      badge: "Most Popular",
    },
    {
      id: 3,
      title: "Triple Sharing",
      subtitle: "Budget-friendly option",
      price: "₹4,000",
      period: "per month",
      image: "https://images.unsplash.com/photo-1697494794128-0cdc5e4314c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYWNjb21tb2RhdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2OTY3MTkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      occupancy: "3 Persons",
      features: [
        "Common bathroom",
        "Shared study table",
        "Individual wardrobes",
        "Ceiling fan",
        "24/7 WiFi access",
        "Spacious room layout",
        "LED lighting",
        "Power backup",
      ],
      amenities: [
        "Daily housekeeping",
        "Fresh linen weekly",
        "Maintenance support",
        "Personal storage space",
      ],
      popular: false,
      badge: "Economic",
    },
  ];

  const includedServices = [
    { icon: Wifi, title: "High-Speed WiFi", description: "Unlimited internet" },
    { icon: Wind, title: "Power Backup", description: "24/7 electricity" },
    { icon: Lamp, title: "Furnished Rooms", description: "Move-in ready" },
    { icon: Book, title: "Study Areas", description: "Quiet zones" },
    { icon: Shield, title: "Security", description: "CCTV & guards" },
    { icon: Users, title: "Community", description: "Social spaces" },
  ];

  const paymentTerms = [
    "First month's rent + security deposit (refundable) required at booking",
    "Monthly rent due on the 1st of each month",
    "Late payment charges apply after the 5th",
    "Security deposit refunded within 15 days of checkout",
    "No hidden charges - transparent pricing",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgyLTJ6TTAgMTNoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTEzNi0xMzJoLTJ2Mmgydi0yek0wIDEzaDJ2LTJIMHYyem0wIDE4aDJ2LTJIMHY0aC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Rooms & Pricing</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose the perfect room that suits your needs and budget. All rooms come with premium amenities and services.
            </p>
          </div>
        </div>
      </section>

      {/* Room Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {rooms.map((room, index) => (
              <Card
                key={room.id}
                className={`overflow-hidden ${
                  room.popular ? "border-2 border-accent shadow-xl" : "hover:shadow-lg"
                } transition-all duration-300`}
              >
                {room.popular && (
                  <div className="bg-accent text-white py-2 px-4 text-center font-semibold">
                    {room.badge} - Save More!
                  </div>
                )}
                
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-80 lg:h-full ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <ImageWithFallback
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover"
                    />
                    {!room.popular && room.badge && (
                      <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                        {room.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-3xl font-black mb-2">{room.title}</h2>
                        <p className="text-muted-foreground">{room.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-black text-accent">{room.price}</div>
                        <div className="text-sm text-muted-foreground">{room.period}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                      <Users className="w-5 h-5" />
                      <span>Occupancy: {room.occupancy}</span>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Room Features</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {room.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-semibold mb-3">Included Services</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {room.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link to="/contact" className="flex-1">
                        <Button className="w-full rounded-full bg-accent hover:bg-accent/90 h-12">
                          <Bed className="w-4 h-4 mr-2" />
                          Book This Room
                        </Button>
                      </Link>
                      <Link to="/gallery">
                        <Button variant="outline" className="rounded-full h-12 px-6">
                          View Gallery
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All room prices include these premium services and amenities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-1">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-black">Payment Terms</h2>
                  <p className="text-muted-foreground">Simple and transparent pricing</p>
                </div>
              </div>

              <ul className="space-y-3">
                {paymentTerms.map((term, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{term}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-accent/5 rounded-2xl">
                <p className="text-center text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> Security deposit is fully refundable and will be returned after room inspection at the time of checkout. Food charges (mess fees) are additional and billed separately.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Book Your Room?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a visit or book your preferred room.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-white h-12 px-8"
              >
                Contact Us Now
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white hover:text-primary h-12 px-8"
              >
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
