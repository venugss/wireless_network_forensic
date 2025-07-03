import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from '@/components/Layout';
import ToolsDiagram from '@/components/ToolsDiagram';

const Index: React.FC = () => {
  return (
    <Layout>
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Integrated Wireless Network Forensic Analysis
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Analyze network traffic, detect security incidents, and visualize insights with our powerful forensic tool.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-forensic-medium hover:bg-forensic-dark text-white">
                <Link to="/analysis">Start Analysis</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ToolsDiagram />
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our framework provides comprehensive tools for wireless network forensics
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-stretch mt-12 px-4">
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-2">Traffic Analysis</h3>
              <p className="text-muted-foreground">
                Parse and analyze network traffic patterns to identify anomalies and security incidents.
              </p>
            </div>
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-2">Intrusion Detection</h3>
              <p className="text-muted-foreground">
                Advanced algorithms to detect potential security breaches and unauthorized access attempts.
              </p>
            </div>
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
              <p className="text-muted-foreground">
                Interactive charts and graphs to visualize network traffic and security insights.
              </p>
            </div>
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-2">Packet Inspection</h3>
              <p className="text-muted-foreground">
                Deep packet inspection to analyze the content and structure of network packets.
              </p>
            </div>
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-2">Timeline Analysis</h3>
              <p className="text-muted-foreground">
                Chronological analysis of events to trace the progression of network activities.
              </p>
            </div>
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-2">Security Reports</h3>
              <p className="text-muted-foreground">
                Detailed reports with actionable insights about network security and potential threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our framework makes it easy to analyze network data in just a few steps
            </p>
          </div>
          <div className="grid gap-12 sm:grid-cols-3 items-center mt-12">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-16 h-16 rounded-full bg-forensic-light/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-forensic-light">1</span>
              </div>
              <h3 className="text-xl font-bold">Upload Data</h3>
              <p className="text-muted-foreground">Upload your network capture files or connect to a live data source.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-16 h-16 rounded-full bg-forensic-light/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-forensic-light">2</span>
              </div>
              <h3 className="text-xl font-bold">Analyze</h3>
              <p className="text-muted-foreground">Our system processes the data and applies forensic analysis algorithms.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-16 h-16 rounded-full bg-forensic-light/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-forensic-light">3</span>
              </div>
              <h3 className="text-xl font-bold">Visualize Results</h3>
              <p className="text-muted-foreground">Review detailed reports, charts, and actionable security insights.</p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="bg-forensic-medium hover:bg-forensic-dark text-white">
              <Link to="/analysis">Start Your Analysis Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
