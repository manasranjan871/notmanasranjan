import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Target, Award } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      level: "PGDCA - Post Graduate Diploma in Computer Applications",
      institution: "R.R Computer Institute, Deogarh, Odisha",
      status: "Completed",
      icon: Award,
    },
    {
      level: "B.Tech - Electrical Engineering",
      institution: "CUPGS BPUT, Rourkela",
      status: "Completed",
      icon: GraduationCap,
    },
    {
      level: "12th Grade",
      institution: "Bharatiya Vidya Niketan Higher Secondary School, Bhubaneswar",
      status: "Completed",
      icon: BookOpen,
    },
    {
      level: "10th Grade",
      institution: "Panchayat High School, Kantabahal",
      status: "Completed",
      icon: BookOpen,
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Passionate about innovation and sustainable technology
            </p>
          </div>

          {/* Bio */}
          <Card className="p-8 mb-12 bg-gradient-card shadow-md animate-fade-in-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-primary rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a B.Tech graduate in Electrical Engineering with a strong interest in smart energy systems, 
                  IoT integration, and sustainable technologies. Passionate about innovation and automation, I focus on developing 
                  intelligent solutions that improve energy efficiency and power management.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I recently completed my PGDCA (Post Graduate Diploma in Computer Applications) to strengthen my computer skills 
                  and bridge the gap between electrical engineering and modern software technologies. My work includes designing a 
                  Smart Energy Meter with Load Monitoring and IoT Integration, reflecting my dedication to merging engineering with 
                  digital innovation. I aim to pursue a career in the EV industry, smart grid systems, embedded design, or renewable 
                  energy applications.
                </p>
              </div>
            </div>

            {/* Academic Interests */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Mathematics
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Physics
              </span>
              <span className="px-4 py-2 bg-energy-cyan/10 text-energy-cyan rounded-full text-sm font-medium">
                Computer Applications
              </span>
            </div>
          </Card>

          {/* Education Timeline */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-heading text-2xl font-bold text-center mb-8">Education Snapshot</h3>
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <edu.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-bold text-lg mb-1">{edu.level}</h4>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <p className="text-primary font-medium">{edu.status}</p>
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

export default AboutSection;
