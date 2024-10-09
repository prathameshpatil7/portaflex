import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SectionForm from "./SectionForm";
const SectionCard = ({ section, onAddItem, onEditItem, onDeleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (newItem) => {
    if (isEditing) {
      onEditItem(section.id, section.items.indexOf(editingItem), newItem);
    } else {
      onAddItem(section.id, newItem);
    }
    setIsEditing(false);
    setEditingItem(null);
    setIsDialogOpen(false);
  };
  const isSingleEntrySection =
    section.id === "summary" || section.id === "user";

  const truncateSummary = (summary, maxLength) => {
    if (summary.length <= maxLength) {
      return summary;
    }
    return summary.substring(0, maxLength - 3) + "...";
  };

  function extractPlainText(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    return doc.body.textContent.trim();
  }
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <section.icon className="mr-2" size={18} />
          {section?.title}
        </CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {" "}
          {!isSingleEntrySection || section.items.length === 0 ? (
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => {
                  setIsEditing(false);
                  setEditingItem(null);
                  setIsDialogOpen(true); // Open dialog
                }}
              >
                <span className="sr-only">Add item</span>
                <Plus className="h-4 w-4" />
              </Button>
            </DialogTrigger>
          ) : null}
          <DialogContent className="w-[400px] sm:w-[50vw] sm:max-w-[50vw] max-w-[400px] h-[80vh] sm:h-auto max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {isEditing ? `Edit ${section?.title}` : `Add ${section?.title}`}
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <SectionForm
                sectionId={section.id}
                onSubmit={handleSubmit}
                initialData={editingItem}
              />
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {section.items.length === 0 ? (
          <p className="text-sm text-muted-foreground">No items yet.</p>
        ) : (
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="text-sm flex justify-between items-center"
              >
                <span className="truncate flex-1 mr-2">
                  {item?.title ||
                    item?.category ||
                    item?.name ||
                    item?.degreeTitle ||
                    `${
                      item?.content
                        ? truncateSummary(extractPlainText(item?.content), 10)
                        : ""
                    }`}
                </span>
                <div className="flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => {
                      setIsEditing(true);
                      setEditingItem(item);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() =>
                      onDeleteItem(section?.id, itemIndex, item?._id)
                    }
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default SectionCard;
