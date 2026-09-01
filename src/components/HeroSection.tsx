import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Zap, Award, TrendingUp, Code } from "lucide-react";
import profilePhoto from "@/assets/manas-profile-latest.jpg";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const badges = [{
    text: "Electrical Engineering",
    color: "bg-primary",
    icon: Zap
  }, {
    text: "IoT Integration",
    color: "bg-energy-cyan",
    icon: Code
  }, {
    text: "Smart Energy Systems",
    color: "bg-accent",
    icon: TrendingUp
  }, {
    text: "Renewable Technologies",
    color: "bg-energy-green",
    icon: Award
  }];
  const statsCards = [{
    value: "B.Tech",
    label: "Graduate",
    icon: Award,
    delay: "0s"
  }, {
    value: "IoT",
    label: "Specialization",
    icon: Code,
    delay: "0.2s"
  }, {
    value: "Smart",
    label: "Energy Focus",
    icon: Zap,
    delay: "0.4s"
  }];
  return <section id="home" className="bg-gradient-hero relative overflow-hidden pt-20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float blur-xl" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-accent/10 animate-float blur-xl" style={{
        animationDelay: "1s"
      }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-energy-cyan/10 animate-float blur-xl" style={{
        animationDelay: "2s"
      }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-tech-purple/10 animate-float blur-xl" style={{
        animationDelay: "1.5s"
      }} />
        <div className="absolute bottom-1/3 right-10 w-28 h-28 rounded-full bg-primary/5 animate-float blur-2xl" style={{
        animationDelay: "2.5s"
      }} />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Status Badge with Pulse */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full shadow-lg border border-primary/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <p className="text-sm font-medium text-foreground">Available for hire</p>
            </div>
            
            <div>
              <h1 className="font-heading text-5xl font-bold mb-2 md:text-5xl">
                Hello, I'm
              </h1>
              <h2 className="font-heading text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 md:text-6xl">
                Manas Ranjan Matiary
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                Exploring Smart Energy, IoT, and Renewable Innovation
              </p>
            </div>

            {/* Enhanced Skill Badges with Icons */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => <div key={index} className={`${badge.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-110 hover:shadow-xl transition-all cursor-pointer flex items-center gap-2 animate-fade-in`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <badge.icon className="h-4 w-4" />
                  {badge.text}
                </div>)}
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Developing intelligent solutions with a focus on energy efficiency and sustainable technologies
            </p>

            {/* CTA Buttons with Enhanced Effects */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all hover:scale-105 group" onClick={() => scrollToSection("projects")}>
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-primary/10 hover:border-primary transition-all hover:scale-105" onClick={() => scrollToSection("contact")}>
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>

            {/* Animated Stats Cards - Popup Effect */}
            <div className="flex flex-wrap gap-4 pt-6">
              {statsCards.map((stat, index) => <Card key={index} className="px-4 py-3 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-110 hover:shadow-lg cursor-pointer animate-fade-in-up" style={{
              animationDelay: stat.delay
            }}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <stat.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-lg leading-none">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>

          {/* Right Content - Enhanced Profile Photo Section */}
          <div className="flex flex-col items-center gap-6 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            {/* Main Profile Photo with Glassmorphic Frame */}
            <div className="relative">
              {/* Animated Glow Rings */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{
              animationDelay: "1s"
            }} />
              
              {/* Profile Image */}
              <div className="relative">
                <img src={profilePhoto} alt="Manas Ranjan Matiary - Electrical Engineering Student" className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover shadow-2xl ring-8 ring-card/50 backdrop-blur-sm" />
                
                {/* Floating Badge on Profile */}
                <Card className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-primary text-white shadow-xl animate-fade-in-up border-0">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    <div>
                      <p className="font-bold text-sm">2026</p>
                      <p className="text-xs opacity-90">Graduate</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Floating Info Cards - Popup Effect */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm animate-fade-in-up" style={{
            animationDelay: "0.6s"
          }}>
              <Card className="p-4 bg-card/60 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-2 bg-energy-cyan/20 rounded-lg">
                    <Zap className="h-5 w-5 text-energy-cyan" />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground">Focus Area</p>
                  <p className="font-heading font-bold text-sm">Smart Energy</p>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/60 backdrop-blur-md border-accent/20 hover:border-accent/40 transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground">Expertise</p>
                  <p className="font-heading font-bold text-sm">IoT Systems</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;