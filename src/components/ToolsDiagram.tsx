
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Network, 
  Shield, 
  Database, 
  Search, 
  BarChart3, 
  Wifi, 
  Lock, 
  Eye, 
  Zap,
  Code,
  Server,
  Globe
} from "lucide-react";

interface Tool {
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

const tools: Tool[] = [
  // Analysis Tools
  { 
    name: "Wireshark", 
    category: "Packet Analysis", 
    description: "Network protocol analyzer for deep packet inspection",
    icon: Network,
    color: "bg-blue-500"
  },
  { 
    name: "tcpdump", 
    category: "Packet Capture", 
    description: "Command-line packet analyzer for traffic capture",
    icon: Database,
    color: "bg-green-500"
  },
  { 
    name: "Nmap", 
    category: "Network Discovery", 
    description: "Network exploration tool and security scanner",
    icon: Search,
    color: "bg-purple-500"
  },
  
  // Security Tools
  { 
    name: "Aircrack-ng", 
    category: "WiFi Security", 
    description: "Complete suite of tools to assess WiFi network security",
    icon: Wifi,
    color: "bg-orange-500"
  },
  { 
    name: "Hashcat", 
    category: "Password Recovery", 
    description: "Advanced password recovery utility",
    icon: Lock,
    color: "bg-red-500"
  },
  { 
    name: "Snort", 
    category: "Intrusion Detection", 
    description: "Real-time network intrusion detection system",
    icon: Shield,
    color: "bg-indigo-500"
  },
  
  // Visualization & Analysis
  { 
    name: "NetworkMiner", 
    category: "Network Forensics", 
    description: "Network forensic analysis tool for PCAP files",
    icon: Eye,
    color: "bg-teal-500"
  },
  { 
    name: "Maltego", 
    category: "Link Analysis", 
    description: "Interactive data mining tool for link analysis",
    icon: BarChart3,
    color: "bg-pink-500"
  },
  
  // Development & Framework
  { 
    name: "React", 
    category: "Frontend Framework", 
    description: "JavaScript library for building user interfaces",
    icon: Code,
    color: "bg-cyan-500"
  },
  { 
    name: "TypeScript", 
    category: "Programming Language", 
    description: "Typed superset of JavaScript",
    icon: Code,
    color: "bg-blue-600"
  },
  { 
    name: "Tailwind CSS", 
    category: "Styling Framework", 
    description: "Utility-first CSS framework for rapid UI development",
    icon: Globe,
    color: "bg-emerald-500"
  },
  { 
    name: "Node.js", 
    category: "Runtime Environment", 
    description: "JavaScript runtime for server-side development",
    icon: Server,
    color: "bg-lime-500"
  }
];

const categories = [
  "Packet Analysis",
  "Packet Capture", 
  "Network Discovery",
  "WiFi Security",
  "Password Recovery",
  "Intrusion Detection",
  "Network Forensics",
  "Link Analysis",
  "Frontend Framework",
  "Programming Language",
  "Styling Framework",
  "Runtime Environment"
];

const ToolsDiagram: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Forensic Analysis Tools & Technologies
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive toolkit for wireless network forensic analysis, security assessment, and threat detection
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool, index) => {
          const IconComponent = tool.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${tool.color} text-white`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {tool.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {tool.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Categories Overview */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Tool Categories
          </CardTitle>
          <CardDescription>
            Organized breakdown of forensic analysis capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((category, index) => (
              <Badge key={index} variant="outline" className="justify-center p-2">
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Workflow Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5" />
            Analysis Workflow
          </CardTitle>
          <CardDescription>
            Step-by-step forensic analysis process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg min-w-0 flex-1">
              <Database className="h-8 w-8 mb-2 text-blue-500" />
              <h3 className="font-medium">Capture</h3>
              <p className="text-sm text-muted-foreground">Network traffic collection</p>
            </div>
            <div className="hidden md:block text-muted-foreground">→</div>
            <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg min-w-0 flex-1">
              <Search className="h-8 w-8 mb-2 text-green-500" />
              <h3 className="font-medium">Analyze</h3>
              <p className="text-sm text-muted-foreground">Deep packet inspection</p>
            </div>
            <div className="hidden md:block text-muted-foreground">→</div>
            <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg min-w-0 flex-1">
              <Shield className="h-8 w-8 mb-2 text-orange-500" />
              <h3 className="font-medium">Detect</h3>
              <p className="text-sm text-muted-foreground">Security threat identification</p>
            </div>
            <div className="hidden md:block text-muted-foreground">→</div>
            <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg min-w-0 flex-1">
              <BarChart3 className="h-8 w-8 mb-2 text-purple-500" />
              <h3 className="font-medium">Report</h3>
              <p className="text-sm text-muted-foreground">Forensic documentation</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ToolsDiagram;
