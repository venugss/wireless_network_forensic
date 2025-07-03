
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import Layout from '@/components/Layout';
import { 
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Upload, File, Check, X } from 'lucide-react';

// This is our mock sample data
const sampleTrafficData = [
  { time: '00:00', packets: 45, bandwidth: 3 },
  { time: '01:00', packets: 38, bandwidth: 2.8 },
  { time: '02:00', packets: 22, bandwidth: 1.5 },
  { time: '03:00', packets: 15, bandwidth: 1.2 },
  { time: '04:00', packets: 18, bandwidth: 1.3 },
  { time: '05:00', packets: 24, bandwidth: 1.8 },
  { time: '06:00', packets: 35, bandwidth: 2.5 },
  { time: '07:00', packets: 62, bandwidth: 4.2 },
  { time: '08:00', packets: 85, bandwidth: 6.5 },
  { time: '09:00', packets: 110, bandwidth: 8.2 },
  { time: '10:00', packets: 132, bandwidth: 9.8 },
  { time: '11:00', packets: 145, bandwidth: 10.5 },
];

const deviceTypeData = [
  { name: 'Mobile', value: 45 },
  { name: 'Desktop', value: 28 },
  { name: 'IoT Devices', value: 18 },
  { name: 'Unknown', value: 9 },
];

const protocolData = [
  { name: 'HTTP', value: 38 },
  { name: 'HTTPS', value: 52 },
  { name: 'DNS', value: 15 },
  { name: 'SMTP', value: 8 },
  { name: 'Other', value: 7 },
];

const securityIncidentsData = [
  { type: 'Unauthorized Access', count: 5 },
  { type: 'Data Exfiltration', count: 2 },
  { type: 'Malware', count: 8 },
  { type: 'Brute Force', count: 12 },
  { type: 'DoS', count: 3 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Analysis: React.FC = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      toast({
        title: "File selected",
        description: `${e.target.files[0].name} has been selected for analysis.`,
      });
    }
  };

  const handleAnalyzeClick = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a pcap or network log file to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setProgress(0);

    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setAnalysisComplete(true);
          setActiveTab("overview");
          toast({
            title: "Analysis complete",
            description: "Your network data has been analyzed successfully.",
          });
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  const handleDemoData = () => {
    setFile(new File(["demo data"], "demo-network-trace.pcap", { type: "application/vnd.tcpdump.pcap" }));
    toast({
      title: "Demo data loaded",
      description: "Demo network trace file has been selected. You can now analyze it.",
    });
  };

  return (
    <Layout>
      <div className="container px-4 py-10 md:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Network Forensic Analysis</h1>
          <p className="text-muted-foreground">Upload and analyze wireless network traffic to detect security incidents and patterns.</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">Upload Data</TabsTrigger>
            <TabsTrigger value="overview" disabled={!analysisComplete}>Overview</TabsTrigger>
            <TabsTrigger value="details" disabled={!analysisComplete}>Detailed Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Network Data</CardTitle>
                <CardDescription>
                  Upload .pcap files, network logs, or other supported formats for analysis.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-10 text-center">
                  <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                  <div className="mb-4">
                    <h3 className="font-semibold">Drag & Drop Your Files</h3>
                    <p className="text-sm text-muted-foreground">
                      or click to browse files (PCAP, log files)
                    </p>
                  </div>
                  <Input
                    id="file-upload"
                    type="file"
                    accept=".pcap,.pcapng,.cap,.log,.txt"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <Button asChild className="mb-2">
                    <label htmlFor="file-upload" className="cursor-pointer">Select File</label>
                  </Button>
                  <div className="text-sm mt-2">
                    <Button variant="link" onClick={handleDemoData}>
                      Don't have data? Use our sample dataset
                    </Button>
                  </div>
                </div>
                
                {file && (
                  <div className="flex items-center p-4 bg-muted rounded-lg">
                    <File className="h-8 w-8 mr-4" />
                    <div className="flex-1">
                      <p className="font-medium truncate">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setFile(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                
                {isAnalyzing ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>Analyzing file...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                ) : (
                  <Button 
                    onClick={handleAnalyzeClick} 
                    disabled={!file} 
                    className="w-full"
                  >
                    {file ? "Analyze Network Data" : "Select a file first"}
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="overview">
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>Total Packets</CardDescription>
                    <CardTitle className="text-3xl">12,456</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>Unique IPs</CardDescription>
                    <CardTitle className="text-3xl">237</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>Security Incidents</CardDescription>
                    <CardTitle className="text-3xl">30</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>Analysis Duration</CardDescription>
                    <CardTitle className="text-3xl">24 hrs</CardTitle>
                  </CardHeader>
                </Card>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="analysis-section">
                  <CardHeader>
                    <CardTitle>Network Traffic Over Time</CardTitle>
                    <CardDescription>
                      Packet count and bandwidth usage over the analyzed period
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={sampleTrafficData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis yAxisId="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Legend />
                          <Line 
                            yAxisId="left" 
                            type="monotone" 
                            dataKey="packets" 
                            stroke="#8884d8" 
                            name="Packets" 
                            strokeWidth={2}
                          />
                          <Line 
                            yAxisId="right" 
                            type="monotone" 
                            dataKey="bandwidth" 
                            stroke="#82ca9d" 
                            name="Bandwidth (Mbps)" 
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="analysis-section">
                  <CardHeader>
                    <CardTitle>Security Incidents</CardTitle>
                    <CardDescription>
                      Types and counts of detected security incidents
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={securityIncidentsData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="type" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="count" fill="#ff8042" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="analysis-section">
                  <CardHeader>
                    <CardTitle>Device Type Distribution</CardTitle>
                    <CardDescription>
                      Types of devices detected in the network
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={deviceTypeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {deviceTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="analysis-section">
                  <CardHeader>
                    <CardTitle>Protocol Distribution</CardTitle>
                    <CardDescription>
                      Network protocols used in the analyzed traffic
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={protocolData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {protocolData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="details">
            <div className="space-y-6">
              <Card className="analysis-section">
                <CardHeader>
                  <CardTitle>Top Source IP Addresses</CardTitle>
                  <CardDescription>Most active IP addresses in the network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-border">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">IP Address</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Packet Count</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Data Transferred</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Risk Level</th>
                        </tr>
                      </thead>
                      <tbody className="bg-background divide-y divide-border">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">192.168.1.105</td>
                          <td className="px-6 py-4 whitespace-nowrap">3,245</td>
                          <td className="px-6 py-4 whitespace-nowrap">1.2 GB</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              High
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">10.0.0.15</td>
                          <td className="px-6 py-4 whitespace-nowrap">2,187</td>
                          <td className="px-6 py-4 whitespace-nowrap">850 MB</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Medium
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">172.16.0.8</td>
                          <td className="px-6 py-4 whitespace-nowrap">1,865</td>
                          <td className="px-6 py-4 whitespace-nowrap">720 MB</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Low
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">192.168.1.87</td>
                          <td className="px-6 py-4 whitespace-nowrap">1,542</td>
                          <td className="px-6 py-4 whitespace-nowrap">620 MB</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Low
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">10.0.0.22</td>
                          <td className="px-6 py-4 whitespace-nowrap">1,298</td>
                          <td className="px-6 py-4 whitespace-nowrap">480 MB</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Medium
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="analysis-section">
                <CardHeader>
                  <CardTitle>Security Incidents Log</CardTitle>
                  <CardDescription>Detailed log of all detected security incidents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto faded-edge">
                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between">
                        <div className="font-semibold">Unauthorized Access Attempt</div>
                        <div className="text-sm text-muted-foreground">May 20, 2025 - 14:32:15</div>
                      </div>
                      <div className="mt-2 text-sm">
                        <div><span className="font-medium">Source IP:</span> 45.15.32.10</div>
                        <div><span className="font-medium">Target:</span> Authentication Server (192.168.1.5)</div>
                        <div><span className="font-medium">Method:</span> Brute Force Attack</div>
                        <div className="mt-2">Multiple failed login attempts detected (25+ attempts in 2 minutes)</div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between">
                        <div className="font-semibold">Suspicious Data Exfiltration</div>
                        <div className="text-sm text-muted-foreground">May 20, 2025 - 13:15:42</div>
                      </div>
                      <div className="mt-2 text-sm">
                        <div><span className="font-medium">Source IP:</span> 192.168.1.105</div>
                        <div><span className="font-medium">Destination:</span> 87.245.123.74</div>
                        <div><span className="font-medium">Volume:</span> 350MB in 5 minutes</div>
                        <div className="mt-2">Unusual data transfer volume outside normal business hours</div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between">
                        <div className="font-semibold">Malware Communication</div>
                        <div className="text-sm text-muted-foreground">May 20, 2025 - 10:45:08</div>
                      </div>
                      <div className="mt-2 text-sm">
                        <div><span className="font-medium">Infected Host:</span> 10.0.0.15</div>
                        <div><span className="font-medium">C&C Server:</span> 103.56.87.12</div>
                        <div><span className="font-medium">Protocol:</span> Encrypted TCP</div>
                        <div className="mt-2">Periodic beaconing detected to known malware command & control server</div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between">
                        <div className="font-semibold">DNS Tunneling Attempt</div>
                        <div className="text-sm text-muted-foreground">May 20, 2025 - 09:12:30</div>
                      </div>
                      <div className="mt-2 text-sm">
                        <div><span className="font-medium">Source IP:</span> 192.168.1.87</div>
                        <div><span className="font-medium">Domain:</span> exfil.malicious-domain.com</div>
                        <div><span className="font-medium">Query Count:</span> 153 in 10 minutes</div>
                        <div className="mt-2">Suspicious DNS queries with encoded data in subdomain names</div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between">
                        <div className="font-semibold">Port Scanning Activity</div>
                        <div className="text-sm text-muted-foreground">May 20, 2025 - 07:45:22</div>
                      </div>
                      <div className="mt-2 text-sm">
                        <div><span className="font-medium">Source IP:</span> 45.78.123.45</div>
                        <div><span className="font-medium">Target Range:</span> 192.168.1.0/24</div>
                        <div><span className="font-medium">Scan Type:</span> TCP SYN</div>
                        <div className="mt-2">Sequential port scanning detected across multiple hosts</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="analysis-section">
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>Action items based on the forensic analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 bg-red-100 text-red-800 p-1 rounded-full">
                        <X className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Isolate Potentially Compromised Hosts</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Hosts 192.168.1.105 and 10.0.0.15 show signs of compromise. 
                          Isolate these systems from the network and perform detailed malware analysis.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 bg-amber-100 text-amber-800 p-1 rounded-full">
                        <X className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Update Firewall Rules</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Block outbound connections to suspicious IP addresses identified in the analysis, 
                          particularly 103.56.87.12 and 87.245.123.74.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 bg-amber-100 text-amber-800 p-1 rounded-full">
                        <X className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Strengthen Authentication</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Implement stricter password policies and enable two-factor authentication 
                          for all network resources, especially the authentication server.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 bg-green-100 text-green-800 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Regular Network Monitoring</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Implement ongoing monitoring of network traffic patterns, 
                          particularly focusing on data exfiltration and unusual connection attempts.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 bg-green-100 text-green-800 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Security Awareness Training</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Conduct security awareness training for all users, with a focus on recognizing 
                          phishing attempts and proper security practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Analysis;
