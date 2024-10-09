import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

const ThemeSelection = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Palette className="mr-2" size={18} />
          Theme Selection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4">
          <Button onClick={() => document.body.classList.remove("dark")}>
            Light
          </Button>
          <Button onClick={() => document.body.classList.add("dark")}>
            Dark
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeSelection;
