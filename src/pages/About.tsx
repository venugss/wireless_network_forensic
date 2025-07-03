
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import Layout from '@/components/Layout';
import { File, Search, Shield, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container px-4 py-10 md:py-12">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About WiNetForensic</h1>
          <p className="text-xl text-muted-foreground">
            An integrated framework for wireless network forensic analysis, designed to help identify security threats and analyze network behavior.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <Card className="stat-card">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-forensic-light/20 flex items-center justify-center">
                <File className="h-6 w-6 text-forensic-light" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Data Collection</h3>
              <p className="text-muted-foreground">
                Our framework gathers detailed packet-level information from wireless networks, enabling in-depth forensic analysis.
              </p>
            </CardContent>
          </Card>
          
          <Card className="stat-card">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-forensic-light/20 flex items-center justify-center">
                <Search className="h-6 w-6 text-forensic-light" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Analysis Algorithms</h3>
              <p className="text-muted-foreground">
                Utilizes machine learning and pattern recognition to detect anomalies and potential security incidents.
              </p>
            </CardContent>
          </Card>
          
          <Card className="stat-card">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-forensic-light/20 flex items-center justify-center">
                <Shield className="h-6 w-6 text-forensic-light" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security Incident Detection</h3>
              <p className="text-muted-foreground">
                Identify and categorize security threats including unauthorized access, malware communication, and data exfiltration.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
            <p className="text-muted-foreground">
              We follow a systematic approach to network forensics that ensures comprehensive analysis and reliable results.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-forensic-medium flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold">Data Collection</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We gather network traffic data from various sources including packet captures, 
                flow data, and system logs to create a comprehensive view of network activity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Packet capture with minimal overhead</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Support for multiple capture formats</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Non-intrusive monitoring options</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-forensic-medium flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold">Analysis & Processing</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Our specialized algorithms process the collected data to identify patterns, 
                anomalies, and potential security incidents.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Statistical traffic analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Protocol-specific decoders</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Behavior-based anomaly detection</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-forensic-medium flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold">Visualization</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We transform complex data into intuitive visualizations that help 
                security professionals understand network behavior and identify issues.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Interactive traffic flow diagrams</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Timeline-based event correlation</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Device relationship mapping</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-forensic-medium flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold">Reporting & Action</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We generate comprehensive reports with actionable insights to help 
                organizations respond to security incidents effectively.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Detailed incident reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Remediation recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-forensic-light" />
                  <span>Exportable findings in multiple formats</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
        </div>
        
        <Card className="mb-16">
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Specification</th>
                  </tr>
                </thead>
                <tbody className="bg-background divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Supported File Formats</td>
                    <td className="px-6 py-4">PCAP, PCAPNG, CAP, NetFlow, Syslog</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Analysis Algorithms</td>
                    <td className="px-6 py-4">Statistical, Machine Learning, Pattern Matching, Signature-based</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Protocols Supported</td>
                    <td className="px-6 py-4">TCP/IP, UDP, HTTP/S, DNS, DHCP, SMB, FTP, SSH, TLS, and more</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Detection Capabilities</td>
                    <td className="px-6 py-4">Intrusion Detection, Malware Communication, Data Exfiltration, Scanning, Brute Force</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Visualization Tools</td>
                    <td className="px-6 py-4">Traffic Flow Maps, Time Series Charts, Protocol Distribution, Entity Relationship</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Export Formats</td>
                    <td className="px-6 py-4">PDF, CSV, JSON, XML, HTML</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-muted/50 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to analyze your network?</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Start using our wireless network forensic analysis framework today and strengthen your network security.
          </p>
          <Button asChild size="lg" className="bg-forensic-medium hover:bg-forensic-dark text-white">
            <Link to="/analysis">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
