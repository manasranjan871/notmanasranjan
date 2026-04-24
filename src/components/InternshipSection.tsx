import { Card } from "@/components/ui/card";
import { Briefcase, Building2, ShieldCheck, ExternalLink } from "lucide-react";

const InternshipSection = () => {
  const internships = [
    {
      icon: Building2,
      company: "Tata Steel Kalinganagar",
      website:
        "https://www.tatasteel.com/corporate/wealsomaketomorrow/greener-tomorrow/tata-steel-kalinganagar-steel-plant/",
      location: "Jajpur, Odisha",
      department: "Transmission & Distribution",
      label: "Subject",
      detail: "Switchgear and It's Protection",
    },
    {
      icon: ShieldCheck,
      company: "Sakthi Auto Components Limited",
      website: "https://www.sakthiauto.com/",
      location: "Tamilnadu",
      department: "Quality Control",
      label: "Role",
      detail: "Quality Control Engineer",
    },
  ];

  return (
    <section id="internship" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Internships</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Hands-on industry experience in power and quality engineering
            </p>
          </div>

          {/* Internship Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-card hover:shadow-lg transition-all hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="inline-block p-3 bg-primary rounded-lg">
                    <item.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 group"
                    >
                      <h3 className="font-heading text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {item.company}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">{item.location}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Briefcase className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">Department</p>
                      <p className="text-muted-foreground">{item.department}</p>
                    </div>
                  </div>
                  <div className="pl-7">
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
