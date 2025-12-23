import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingDown, DollarSign, FileText, Package, Truck, Factory, Wrench, ClipboardCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface DocumentType {
  id: string;
  name: string;
  module: string;
  icon: React.ElementType;
  pricePerDoc: number;
  description: string;
}

const documentTypes: DocumentType[] = [
  { id: "po", name: "Purchase Orders", module: "MM", icon: Package, pricePerDoc: 0.11, description: "Create/Change PO" },
  { id: "grn", name: "Goods Receipts", module: "MM", icon: Package, pricePerDoc: 0.11, description: "Material receipt posting" },
  { id: "invoice", name: "Supplier Invoices", module: "FI", icon: DollarSign, pricePerDoc: 0.11, description: "MIRO / Invoice posting" },
  { id: "salesOrder", name: "Sales Orders", module: "SD", icon: FileText, pricePerDoc: 0.11, description: "Create/Change SO" },
  { id: "delivery", name: "Delivery Documents", module: "SD", icon: Truck, pricePerDoc: 0.11, description: "Outbound/Inbound delivery" },
  { id: "prodOrder", name: "Production Orders", module: "PP", icon: Factory, pricePerDoc: 0.11, description: "Create production order" },
  { id: "prodConfirm", name: "Production Confirmations", module: "PP", icon: Factory, pricePerDoc: 0.11, description: "Yield/scrap/time" },
  { id: "maintOrder", name: "Maintenance Orders", module: "PM", icon: Wrench, pricePerDoc: 0.11, description: "Create/Change PM order" },
  { id: "inspection", name: "Inspection Lots", module: "QM", icon: ClipboardCheck, pricePerDoc: 0.11, description: "Quality inspection posting" },
];

const DigitalLicenseCalculator = () => {
  const [volumes, setVolumes] = useState<Record<string, number>>({});
  const [namedUserLicenseCost, setNamedUserLicenseCost] = useState<number>(3000);
  const [currentNamedUsers, setCurrentNamedUsers] = useState<number>(50);

  const handleVolumeChange = (id: string, value: string) => {
    const numValue = parseInt(value) || 0;
    setVolumes(prev => ({ ...prev, [id]: numValue }));
  };

  const calculations = useMemo(() => {
    const totalDocuments = Object.values(volumes).reduce((sum, vol) => sum + vol, 0);
    const digitalLicenseCost = totalDocuments * 0.11; // ~$0.11 per document (average estimate)
    const currentLicenseCost = currentNamedUsers * namedUserLicenseCost;
    const estimatedUsersReduction = Math.floor(currentNamedUsers * 0.7); // 70% reduction potential
    const newLicenseCost = (currentNamedUsers - estimatedUsersReduction) * namedUserLicenseCost;
    const totalNewCost = newLicenseCost + digitalLicenseCost;
    const savings = currentLicenseCost - totalNewCost;
    const savingsPercentage = currentLicenseCost > 0 ? (savings / currentLicenseCost) * 100 : 0;

    return {
      totalDocuments,
      digitalLicenseCost,
      currentLicenseCost,
      estimatedUsersReduction,
      newLicenseCost,
      totalNewCost,
      savings,
      savingsPercentage,
    };
  }, [volumes, namedUserLicenseCost, currentNamedUsers]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <section id="license-calculator" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              <Calculator className="w-3 h-3 mr-1" />
              Cost Estimator
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SAP Digital License Cost Calculator
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estimate your potential savings by entering your annual document volumes and current license costs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Setup */}
          <ScrollReveal delay={0.1}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Current License Setup</CardTitle>
                <CardDescription>Enter your current SAP licensing details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="namedUsers">Number of Named Users</Label>
                  <Input
                    id="namedUsers"
                    type="number"
                    value={currentNamedUsers}
                    onChange={(e) => setCurrentNamedUsers(parseInt(e.target.value) || 0)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-4">
                  <Label>Annual Cost per Named User: {formatCurrency(namedUserLicenseCost)}</Label>
                  <Slider
                    value={[namedUserLicenseCost]}
                    onValueChange={(value) => setNamedUserLicenseCost(value[0])}
                    min={1000}
                    max={10000}
                    step={100}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$1,000</span>
                    <span>$10,000</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Current Annual Cost:</span>
                    <span className="text-xl font-bold">{formatCurrency(calculations.currentLicenseCost)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Document Volumes */}
          <ScrollReveal delay={0.2}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Annual Document Volumes</CardTitle>
                <CardDescription>Enter estimated yearly document counts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {documentTypes.map((doc) => (
                    <div key={doc.id} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Label htmlFor={doc.id} className="flex items-center gap-2 text-sm">
                          <doc.icon className="w-4 h-4 text-primary" />
                          <span>{doc.name}</span>
                          <Badge variant="secondary" className="text-xs">{doc.module}</Badge>
                        </Label>
                      </div>
                      <Input
                        id={doc.id}
                        type="number"
                        placeholder="0"
                        value={volumes[doc.id] || ""}
                        onChange={(e) => handleVolumeChange(doc.id, e.target.value)}
                        className="bg-background"
                      />
                    </div>
                  ))}
                </div>
                <div className="pt-4 mt-4 border-t border-border/50">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Documents:</span>
                    <span className="text-xl font-bold">{formatNumber(calculations.totalDocuments)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal delay={0.3}>
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-green-500" />
                  Estimated Savings
                </CardTitle>
                <CardDescription>With Sharvi Web Apps + Digital Access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Users Shifted to Web Apps:</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      ~{calculations.estimatedUsersReduction} users (70%)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Remaining Named User Cost:</span>
                    <span className="font-semibold">{formatCurrency(calculations.newLicenseCost)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Digital Access License Cost:</span>
                    <span className="font-semibold">{formatCurrency(calculations.digitalLicenseCost)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">New Total Annual Cost:</span>
                    <span className="font-semibold">{formatCurrency(calculations.totalNewCost)}</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Estimated Annual Savings</p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(Math.max(0, calculations.savings))}
                    </p>
                    <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                      ({calculations.savingsPercentage.toFixed(0)}% reduction)
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  * Estimates based on industry averages. Actual costs vary based on SAP contract terms.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DigitalLicenseCalculator;
