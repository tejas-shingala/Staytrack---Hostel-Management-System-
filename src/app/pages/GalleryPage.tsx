import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Dialog, DialogContent } from "@/app/components/ui/dialog";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { X } from "lucide-react";

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1663194815198-3e3183f9d9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3N0ZWwlMjByb29tJTIwc3R1ZGVudHxlbnwxfHx8fDE3Njk3NDk5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Rooms",
      title: "Single Room",
    },
    {
      url: "https://images.unsplash.com/photo-1700710909700-d026edc77079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZG9ybWl0b3J5fGVufDF8fHx8MTc2OTc0OTk0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Rooms",
      title: "Double Sharing Room",
    },
    {
      url: "https://images.unsplash.com/photo-1697494794128-0cdc5e4314c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYWNjb21tb2RhdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2OTY3MTkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Rooms",
      title: "Triple Sharing Room",
    },
    {
      url: "https://images.unsplash.com/photo-1626265774643-f1943311a86b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3N0ZWwlMjBkaW5pbmclMjBtZXNzfGVufDF8fHx8MTc2OTc1MDEyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Dining",
      title: "Dining Area",
    },
    {
      url: "https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMHJvb20lMjBsaWJyYXJ5fGVufDF8fHx8MTc2OTc0OTk5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Common Areas",
      title: "Study Room",
    },
    {
      url: "https://images.unsplash.com/photo-1693214674477-1159bddf1598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3N0ZWwlMjBmYWNpbGl0aWVzJTIwZ3ltfGVufDF8fHx8MTc2OTc0OTk5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Common Areas",
      title: "Fitness Area",
    },
    {
      url: "https://images.unsplash.com/photo-1761417327344-66e899ed9a63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3N0ZWwlMjBleHRlcmlvciUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2OTcwMjAyMXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Exterior",
      title: "Hostel Building",
    },
    {
      url: "https://images.unsplash.com/photo-1626265774643-f1943311a86b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGhvc3RlbCUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzY5NzQ5OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Interior",
      title: "Common Room",
    },
  ];

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgyLTJ6TTAgMTNoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTEzNi0xMzJoLTJ2Mmgydi0yek0wIDEzaDJ2LTJIMHYyem0wIDE4aDJ2LTJIMHY0aC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Gallery</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Take a visual tour of Staytrack - explore our rooms, facilities, and living spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="text-xs bg-accent px-2 py-1 rounded-full inline-block mb-2">
                        {image.category}
                      </div>
                      <div className="font-semibold">{image.title}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl h-[90vh] p-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {selectedImage && (
            <ImageWithFallback
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
