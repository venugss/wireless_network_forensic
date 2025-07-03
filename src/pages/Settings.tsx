
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from '@/components/Layout';
import { Check, Settings } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");
  
  // General settings
  const [maxResults, setMaxResults] = useState<number[]>([100]);
  const [darkMode, setDarkMode] = useState(false);
  const [saveReports, setSaveReports] = useState(true);
  
  // Detection settings
  const [sensitivityLevel, setSensitivityLevel] = useState<number[]>([75]);
  const [enableAnomalyDetection, setEnableAnomalyDetection] = useState(true);
  const [enableMalwareDetection, setEnableMalwareDetection] = useState(true);
  const [enableIntrusionDetection, setEnableIntrusionDetection] = useState(true);
  
  // Data settings
  const [autoDelete, setAutoDelete] = useState(false);
  const [retentionDays, setRetentionDays] = useState("30");
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };
  
  return (
    <Layout>
      <div className="container px-4 py-10 md:py-12">
        <div className="mb-8 flex items-center gap-3">
          <Settings className="h-8 w-8 text-forensic-light" />
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="detection">Detection</TabsTrigger>
            <TabsTrigger value="data">Data Management</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure the basic behavior of the forensic analysis tool
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="max-results">Maximum Results</Label>
                    <span className="text-sm text-muted-foreground">{maxResults[0]} items</span>
                  </div>
                  <Slider
                    id="max-results"
                    min={10}
                    max={1000}
                    step={10}
                    value={maxResults}
                    onValueChange={setMaxResults}
                  />
                  <p className="text-sm text-muted-foreground">
                    Set the maximum number of items to display in analysis results
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="dark-mode"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="save-reports"
                    checked={saveReports}
                    onCheckedChange={setSaveReports}
                  />
                  <Label htmlFor="save-reports">Automatically Save Reports</Label>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-notifications">Email for Notifications</Label>
                  <Input
                    id="email-notifications"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                  <p className="text-sm text-muted-foreground">
                    We'll send analysis completion notifications to this email
                  </p>
                </div>
                
                <Button onClick={handleSaveSettings} className="w-full">
                  Save General Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="detection" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detection Settings</CardTitle>
                <CardDescription>
                  Configure sensitivity and detection parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sensitivity">Detection Sensitivity</Label>
                    <span className="text-sm text-muted-foreground">{sensitivityLevel[0]}%</span>
                  </div>
                  <Slider
                    id="sensitivity"
                    min={10}
                    max={100}
                    step={5}
                    value={sensitivityLevel}
                    onValueChange={setSensitivityLevel}
                  />
                  <p className="text-sm text-muted-foreground">
                    Higher sensitivity may increase false positives but catch more potential issues
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Detection Modules</h3>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="anomaly-detection"
                      checked={enableAnomalyDetection}
                      onCheckedChange={setEnableAnomalyDetection}
                    />
                    <Label htmlFor="anomaly-detection">Anomaly Detection</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="malware-detection"
                      checked={enableMalwareDetection}
                      onCheckedChange={setEnableMalwareDetection}
                    />
                    <Label htmlFor="malware-detection">Malware Detection</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="intrusion-detection"
                      checked={enableIntrusionDetection}
                      onCheckedChange={setEnableIntrusionDetection}
                    />
                    <Label htmlFor="intrusion-detection">Intrusion Detection</Label>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="custom-signatures">Custom Detection Signatures</Label>
                  <Input
                    id="custom-signatures"
                    placeholder="Path to custom signatures file"
                  />
                  <p className="text-sm text-muted-foreground">
                    Add your own custom signatures to enhance detection capabilities
                  </p>
                </div>
                
                <Button onClick={handleSaveSettings} className="w-full">
                  Save Detection Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
                <CardDescription>
                  Configure how analysis data is stored and managed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="storage-location">Storage Location</Label>
                  <Input
                    id="storage-location"
                    placeholder="/path/to/storage"
                    defaultValue="./data"
                  />
                  <p className="text-sm text-muted-foreground">
                    Location where analysis data and reports will be stored
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="auto-delete"
                    checked={autoDelete}
                    onCheckedChange={setAutoDelete}
                  />
                  <Label htmlFor="auto-delete">Automatically Delete Old Data</Label>
                </div>
                
                {autoDelete && (
                  <div className="space-y-2">
                    <Label htmlFor="retention-days">Retention Period (Days)</Label>
                    <Input
                      id="retention-days"
                      type="number"
                      value={retentionDays}
                      onChange={(e) => setRetentionDays(e.target.value)}
                      min="1"
                      max="365"
                    />
                    <p className="text-sm text-muted-foreground">
                      Data older than this many days will be automatically deleted
                    </p>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Data Export Options</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center p-3 border border-border rounded-lg">
                      <input
                        type="checkbox"
                        id="export-csv"
                        className="mr-2 h-4 w-4"
                        defaultChecked
                      />
                      <Label htmlFor="export-csv">CSV</Label>
                    </div>
                    <div className="flex items-center p-3 border border-border rounded-lg">
                      <input
                        type="checkbox"
                        id="export-json"
                        className="mr-2 h-4 w-4"
                        defaultChecked
                      />
                      <Label htmlFor="export-json">JSON</Label>
                    </div>
                    <div className="flex items-center p-3 border border-border rounded-lg">
                      <input
                        type="checkbox"
                        id="export-pdf"
                        className="mr-2 h-4 w-4"
                        defaultChecked
                      />
                      <Label htmlFor="export-pdf">PDF Report</Label>
                    </div>
                    <div className="flex items-center p-3 border border-border rounded-lg">
                      <input
                        type="checkbox"
                        id="export-xml"
                        className="mr-2 h-4 w-4"
                      />
                      <Label htmlFor="export-xml">XML</Label>
                    </div>
                  </div>
                </div>
                
                <Button onClick={handleSaveSettings} className="w-full flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Save Data Settings</span>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-destructive/50">
              <CardHeader className="text-destructive">
                <CardTitle>Danger Zone</CardTitle>
                <CardDescription>
                  Actions here can't be undone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="destructive" className="w-full">
                  Clear All Analysis Data
                </Button>
                <p className="text-sm text-muted-foreground">
                  This will permanently delete all stored analysis data and reports
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SettingsPage;
