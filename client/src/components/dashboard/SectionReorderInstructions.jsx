import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SectionReorderInstructions = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Reorder Sections</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Drag and drop the section cards above to reorder them. The order will
          be reflected in your portfolio.
        </p>
      </CardContent>
    </Card>
  );
};

export default SectionReorderInstructions;
