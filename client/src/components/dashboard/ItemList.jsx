import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const ItemList = ({
  section,
  setActiveSection,
  setIsEditing,
  setEditingItem,
}) => {
  if (section.items.length === 0) {
    return <p className="text-sm text-muted-foreground">No items yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {section.items.map((item, index) => (
        <li key={index} className="text-sm flex justify-between items-center">
          <span>{item.title || item.skill || item.name || "Untitled"}</span>
          <div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => {
                setActiveSection(section);
                setIsEditing(true);
                setEditingItem(item);
              }}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => handleDeleteItem(section.id, index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
