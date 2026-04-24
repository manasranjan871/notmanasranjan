import { Card } from "@/components/ui/card";
import { Cpu, Sun, Gauge, Zap, Activity, Cable } from "lucide-react";
import solarTrackerDiagram from "@/assets/solar-tracker-diagram.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Dual Axis Automatic Sun Tracking Solar Panel",
      image: solarTrackerDiagram,
      description:
        "The project maximizes solar energy capture by adjusting the solar panel's orientation in both horizontal and vertical directions to follow the sun's path throughout the day.",
      goal:
        "To improve energy efficiency and power generation compared to fixed systems, achieving up to 40% more energy capture.",
      technologies: [
        { name: "Arduino UNO / ESP32", icon: Cpu },
        { name: "LDR Sensors", icon: Gauge },
        { name: "Servo/Stepper Motors", icon: Cpu },
        { name: "Solar Panel", icon: Sun },
        { name: "IoT Module", icon: Cpu },
      ],
    },
    {
      title:
        "Intelligent Load Prioritisation System Integrated with an Advanced Metering Infrastructure",
      description:
        "ESP32-based system that monitors voltage and power, disconnects non-critical loads during low voltage, and displays real-time data on LCD with IoT connectivity.",
      goal:
        "Design and develop an ESP32-based intelligent system that monitors voltage and power, prioritizes loads, and automatically disconnects non-critical appliances during low voltage conditions.",
      technologies: [
        { name: "ESP32 Microcontroller", icon: Cpu },
        { name: "PZEM-004T", icon: Activity },
        { name: "I²C LCD Display", icon: Gauge },
        { name: "Relay Modules", icon: Zap },
        { name: "IoT Module", icon: Cpu },
        { name: "Voltage Dimmer", icon: Cable },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Innovation in renewable energy and smart systems
            </p>
          </div>

          <div className="space-y-10">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="overflow-hidden bg-card shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`grid ${project.image ? "md:grid-cols-2" : "grid-cols-1"} gap-8`}>
                  {project.image && (
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-primary px-4 py-2 rounded-full">
                        <span className="text-white font-medium text-sm">Featured Project</span>
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <Sun className="h-5 w-5 text-accent" />
                          Description
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">Goal</h4>
                        <p className="text-muted-foreground leading-relaxed">{project.goal}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <a
                              key={i}
                              href={`https://www.google.com/search?q=${encodeURIComponent(tech.name)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                            >
                              <tech.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                              {tech.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
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

export default ProjectsSection;
