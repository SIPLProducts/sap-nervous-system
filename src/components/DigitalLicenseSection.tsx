import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle, FileText, AlertTriangle, Info } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const DigitalLicenseSection = () => {
  const chargeableDocuments = [
    { module: "MM – Materials Management", docType: "Purchase Requisition (PR)", description: "Create / Change PR", required: true },
    { module: "MM", docType: "Purchase Order (PO)", description: "Create / Change PO", required: true },
    { module: "MM", docType: "Goods Receipt (GR / GRN)", description: "Material receipt posting", required: true },
    { module: "MM", docType: "Material Document", description: "Stock transfer / adjustment", required: true },
    { module: "MM", docType: "Service Entry Sheet (SES)", description: "Service confirmation", required: true },
    { module: "FI – Finance", docType: "Supplier Invoice", description: "MIRO / Invoice posting", required: true },
    { module: "FI", docType: "Financial Accounting Document", description: "GL / AP / AR posting", required: true },
    { module: "SD – Sales & Distribution", docType: "Sales Order", description: "Create / Change SO", required: true },
    { module: "SD", docType: "Delivery Document", description: "Outbound / Inbound delivery", required: true },
    { module: "SD", docType: "Billing Document", description: "Customer invoice", required: true },
    { module: "PP – Production Planning", docType: "Production Order", description: "Create production order", required: true },
    { module: "PP", docType: "Production Confirmation", description: "Yield / scrap / time", required: true },
    { module: "QM – Quality Management", docType: "Inspection Lot", description: "Quality inspection posting", required: true },
    { module: "PM – Plant Maintenance", docType: "Maintenance Order", description: "Create / Change PM order", required: true },
    { module: "PM", docType: "Maintenance Confirmation", description: "Time / cost posting", required: true },
    { module: "PS – Project System", docType: "Project / WBS", description: "Create / Change project", required: true },
    { module: "PS", docType: "Network / Activity Confirmation", description: "Project progress", required: true },
    { module: "HCM / SF", docType: "Time Event", description: "Attendance / time posting", required: true },
  ];

  const nonChargeableActivities = [
    { module: "MM", activity: "View PO / PR", example: "Display only", required: false },
    { module: "MM", activity: "Material Master View", example: "Read material data", required: false },
    { module: "FI", activity: "Financial Reports", example: "Trial balance, P&L", required: false },
    { module: "SD", activity: "Sales Analytics", example: "Order status", required: false },
    { module: "PP", activity: "Production Reports", example: "Plan vs actual", required: false },
    { module: "PM", activity: "Equipment Display", example: "Asset details", required: false },
    { module: "PS", activity: "Project Dashboard", example: "CPI / SPI view", required: false },
    { module: "All", activity: "Dashboards", example: "KPIs, charts", required: false },
    { module: "All", activity: "External Approvals", example: "Web / mobile approval only", required: false },
  ];

  const gateEntryExample = [
    { function: "Fetch PO & Vendor", sapImpact: "Read-only", required: false },
    { function: "Capture Gate Entry", sapImpact: "External system", required: false },
    { function: "Approval Workflow", sapImpact: "External", required: false },
    { function: "Post GRN to SAP", sapImpact: "MM document creation", required: true },
    { function: "Update PO quantities", sapImpact: "Change PO", required: true },
  ];

  return (
    <section id="digital-license" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              <FileText className="w-3 h-3 mr-1" />
              SAP Digital Access
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is SAP Digital License?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              SAP Digital Access License is required when external (non-SAP) applications create, change, or post 
              business documents in SAP without a named SAP user. Defined by SAP, this model applies only to 
              <span className="text-primary font-semibold"> write-back scenarios</span>, not read-only usage.
            </p>
          </div>
        </ScrollReveal>

        {/* Chargeable Documents Table */}
        <ScrollReveal delay={0.1}>
          <Card className="mb-8 border-destructive/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <CheckCircle className="w-5 h-5" />
                SAP Digital License – Module-wise Chargeable Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/50">
                      <TableHead className="font-semibold">SAP Module</TableHead>
                      <TableHead className="font-semibold">Digital Document Type</TableHead>
                      <TableHead className="font-semibold">Description</TableHead>
                      <TableHead className="font-semibold text-center">License Required</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {chargeableDocuments.map((doc, index) => (
                      <TableRow key={index} className="border-border/30 hover:bg-destructive/5">
                        <TableCell className="font-medium text-foreground">{doc.module}</TableCell>
                        <TableCell>{doc.docType}</TableCell>
                        <TableCell className="text-muted-foreground">{doc.description}</TableCell>
                        <TableCell className="text-center">
                          <Badge variant="destructive" className="gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Yes
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Non-Chargeable Activities Table */}
        <ScrollReveal delay={0.2}>
          <Card className="mb-8 border-green-500/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <XCircle className="w-5 h-5" />
                Module-wise Activities Where Digital License is NOT Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/50">
                      <TableHead className="font-semibold">SAP Module</TableHead>
                      <TableHead className="font-semibold">Activity</TableHead>
                      <TableHead className="font-semibold">Example</TableHead>
                      <TableHead className="font-semibold text-center">Digital License</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {nonChargeableActivities.map((activity, index) => (
                      <TableRow key={index} className="border-border/30 hover:bg-green-500/5">
                        <TableCell className="font-medium text-foreground">{activity.module}</TableCell>
                        <TableCell>{activity.activity}</TableCell>
                        <TableCell className="text-muted-foreground">{activity.example}</TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className="gap-1 border-green-500/50 text-green-600 dark:text-green-400">
                            <XCircle className="w-3 h-3" />
                            Not Required
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Gate Entry Example */}
        <ScrollReveal delay={0.3}>
          <Card className="mb-8 border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Example: Gate Entry Application (License View)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/50">
                      <TableHead className="font-semibold">Gate Entry Function</TableHead>
                      <TableHead className="font-semibold">SAP Impact</TableHead>
                      <TableHead className="font-semibold text-center">Digital License</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {gateEntryExample.map((item, index) => (
                      <TableRow key={index} className="border-border/30">
                        <TableCell className="font-medium text-foreground">{item.function}</TableCell>
                        <TableCell className="text-muted-foreground">{item.sapImpact}</TableCell>
                        <TableCell className="text-center">
                          {item.required ? (
                            <Badge variant="destructive" className="gap-1">
                              <CheckCircle className="w-3 h-3" />
                              Required
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="gap-1 border-green-500/50 text-green-600 dark:text-green-400">
                              <XCircle className="w-3 h-3" />
                              Not Required
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Legal Notice */}
        <ScrollReveal delay={0.4}>
          <Card className="border-amber-500/30 bg-amber-500/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Legal Notice</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This document does not constitute an official SAP licensing position. Digital Access licensing 
                    requirements are subject to SAP's contractual definitions, measurement methodology, and audit outcomes. 
                    Customers are advised to obtain formal confirmation from SAP or an authorized SAP licensing partner.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DigitalLicenseSection;
