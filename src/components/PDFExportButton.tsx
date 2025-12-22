import { useState } from 'react';
import { FileDown, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { toast } from 'sonner';

const PDFExportButton = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    toast.info('Generating PDF... This may take a moment.');

    try {
      const mainElement = document.querySelector('main');
      if (!mainElement) {
        toast.error('Could not find content to export');
        return;
      }

      // Get all sections
      const sections = mainElement.querySelectorAll('section');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      let isFirstPage = true;

      for (const section of Array.from(sections)) {
        const canvas = await html2canvas(section as HTMLElement, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#0a0f1c',
          logging: false,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        if (!isFirstPage) {
          pdf.addPage();
        }

        // Add image, potentially splitting across pages if needed
        let heightLeft = imgHeight;
        let position = 0;

        while (heightLeft > 0) {
          if (position > 0) {
            pdf.addPage();
          }
          
          pdf.addImage(imgData, 'JPEG', 0, position === 0 ? 0 : -position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          position += pageHeight;
        }

        isFirstPage = false;
      }

      pdf.save('Sharvi-Infotech-Presentation.pdf');
      toast.success('PDF exported successfully!');
    } catch (error) {
      console.error('PDF export error:', error);
      toast.error('Failed to export PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={handleExport}
      disabled={isExporting}
      variant="outline"
      size="sm"
      className="gap-2 bg-secondary/50 border-border hover:bg-secondary hover:border-primary/30"
    >
      {isExporting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Exporting...
        </>
      ) : (
        <>
          <FileDown className="w-4 h-4" />
          Export PDF
        </>
      )}
    </Button>
  );
};

export default PDFExportButton;
