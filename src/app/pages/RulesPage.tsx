import { Card, CardContent } from "@/app/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import {
  Clock,
  Users,
  DollarSign,
  ShieldAlert,
  UserCheck,
  FileText,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export function RulesPage() {
  const rulesCategories = [
    {
      icon: Clock,
      title: "Entry & Exit Timing",
      rules: [
        "Main gate closes at 11:00 PM (students must be inside by this time)",
        "Early morning gate opening time: 5:00 AM",
        "Late entry after 11:00 PM requires prior permission from management",
        "Night-out requests must be submitted 24 hours in advance with parental/guardian consent",
        "Weekend late entry extended till 11:30 PM",
        "Emergency late entries will be handled case-by-case basis",
      ],
    },
    {
      icon: Users,
      title: "Visitor Policy",
      rules: [
        "Visitors are allowed only in the common area/reception",
        "Visiting hours: 9:00 AM to 8:00 PM",
        "Visitors must register at the reception with valid ID proof",
        "Parents/guardians can be taken to the rooms with prior permission",
        "Maximum 2 visitors per student at a time",
        "Overnight guests are not permitted",
        "Delivery personnel not allowed beyond reception area",
      ],
    },
    {
      icon: DollarSign,
      title: "Payment & Refund Rules",
      rules: [
        "First month rent + 1 month security deposit required at booking",
        "Monthly rent must be paid by the 5th of every month",
        "Late payment attracts a penalty of ₹100 per day after 5th",
        "Security deposit is fully refundable after room inspection",
        "Damage charges (if any) will be deducted from security deposit",
        "Refund processed within 15 working days after checkout",
        "No refund for mid-month vacating unless emergency cases",
        "Mess fees collected separately on monthly basis",
      ],
    },
    {
      icon: ShieldAlert,
      title: "Safety & Security Guidelines",
      rules: [
        "CCTV surveillance in all common areas and corridors",
        "Do not share room keys or access cards with others",
        "Report any suspicious activity immediately to management",
        "Fire extinguishers available on each floor - know their locations",
        "Emergency assembly point: Main parking area",
        "Keep emergency contact numbers saved",
        "First aid kit available at reception 24/7",
        "Do not tamper with safety equipment (CCTV, fire alarms, etc.)",
      ],
    },
    {
      icon: UserCheck,
      title: "Conduct & Discipline",
      rules: [
        "Maintain cleanliness in your room and common areas",
        "Quiet hours: 10:00 PM to 7:00 AM - keep noise levels minimal",
        "Use of offensive language or behavior is strictly prohibited",
        "Ragging in any form is a punishable offense",
        "Respect other students' privacy and personal space",
        "Follow dress code norms in common areas",
        "Participate in monthly meetings and community events",
        "Report any maintenance issues promptly",
      ],
    },
    {
      icon: AlertCircle,
      title: "Prohibited Items & Activities",
      rules: [
        "Smoking, alcohol, and illegal substances strictly prohibited",
        "Cooking in rooms not allowed (common pantry available)",
        "Pets are not permitted",
        "Loud music or parties in rooms not allowed",
        "Weapons or dangerous items of any kind prohibited",
        "Gambling or illegal activities will result in immediate expulsion",
        "Illegal downloading or streaming of copyrighted content",
      ],
    },
    {
      icon: FileText,
      title: "Room & Facility Usage",
      rules: [
        "Do not rearrange or remove room furniture without permission",
        "Use electrical appliances responsibly (approved items only)",
        "Stick posters/decorations only on designated areas",
        "Regular room inspections will be conducted",
        "Report any damage to room or facilities immediately",
        "Water wastage should be avoided",
        "Common facilities operate on first-come-first-serve basis",
        "Study room must be kept silent - no group discussions",
      ],
    },
  ];

  const importantNotes = [
    "These rules are designed for everyone's safety, comfort, and well-being",
    "Violation of rules may result in warning, fine, or in serious cases, expulsion",
    "Management reserves the right to modify rules as necessary",
    "Students are expected to be familiar with and follow all rules",
    "Special cases can be discussed with management",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgyLTJ6TTAgMTNoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTEzNi0xMzJoLTJ2Mmgydi0yek0wIDEzaDJ2LTJIMHYyem0wIDE4aDJ2LTJIMHY0aC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Rules & Policies</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Clear guidelines for a safe, comfortable, and harmonious living environment for all residents.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-black mb-4">Our Commitment to You</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Staytrack, we believe in creating a living environment where every student feels safe, respected, and supported. Our rules and policies are designed with your well-being in mind.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These guidelines help us maintain a peaceful community where you can focus on your studies while enjoying a comfortable living experience. We encourage open communication - if you have any questions or concerns about any policy, please don't hesitate to reach out to our management team.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rules Accordion */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {rulesCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border-2 border-border rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-semibold text-left">{category.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <ul className="space-y-3 pt-4">
                      {category.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-black">Important Notes</h2>
              </div>
              <ul className="space-y-3">
                {importantNotes.map((note, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-muted-foreground leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact for Queries */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Questions About Our Policies?</h2>
          <p className="text-lg text-white/90 mb-8">
            We're here to help! If you have any questions or need clarification about our rules and policies, please don't hesitate to contact us.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+917863047523"
              className="px-8 py-3 bg-accent hover:bg-accent/90 rounded-full font-semibold transition-colors"
            >
              Call Us: +91 7863047523
            </a>
            <a
              href="mailto:info@ndverse.com"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition-colors"
            >
              Email: info@ndverse.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
