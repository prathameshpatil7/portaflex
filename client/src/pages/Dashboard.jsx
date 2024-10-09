import { useEffect, useState } from "react";
import ThemeSelection from "@/components/dashboard/ThemeSelection";
import SectionReorderInstructions from "@/components/dashboard/SectionReorderInstructions";
import { initialSections } from "@/components/dashboard/initialData";
import SectionCard from "@/components/dashboard/SectionCard";
import { fetch } from "@/service/fetch";
import DashboardSkeleton from "@/components/dashboard-skeleton";
import {
  createData,
  updateData,
  deleteData,
  handleCreateFormData,
  handleUpdateFormData,
} from "@/action/app";

const Dashboard = (props) => {
  const { userId = "" } = props;
  const [sections, setSections] = useState(initialSections);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchPortfolioData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  // Fetch all data from the backend
  const fetchPortfolioData = async () => {
    setLoading(true);
    if (!userId) return;
    try {
      const response = await fetch({ url: `/user/${userId}/portfolio` }, "GET");
      // Create a mapping of section IDs to response properties
      const responseMap = {
        experiences: response?.experience,
        skills: response?.skills,
        education: response?.education,
        achievements: response?.achievements,
        summary: response?.summary,
        projects: response?.projects,
        certifications: ["cert"],
        "personal-details": response?.personalDetails,
      };

      // Populate items based on the response map
      const populatedSections = sections.map((section) => ({
        ...section,
        items: responseMap[section.id] || [],
      }));
      setSections(populatedSections);
      console.log(populatedSections);
    } catch (error) {
      console.error("Failed to fetch portfolio data:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleAddItem = (sectionId, newItem) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? { ...section, items: [...section.items, newItem] }
          : section
      )
    );

    createData(sectionId, newItem);
  };

  const handleEditItem = (sectionId, itemIndex, updatedItem) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.map((item, index) =>
                index === itemIndex ? updatedItem : item
              ),
            }
          : section
      )
    );
  };

  const handleDeleteItem = (sectionId, itemIndex, id) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.filter((_, index) => index !== itemIndex),
            }
          : section
      )
    );
    deleteData(sectionId, id);
  };
  console.log(sections);
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Portfolio Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sections.map((section, index) => (
              <SectionCard
                key={section.id}
                section={section}
                index={index}
                onAddItem={handleAddItem}
                onEditItem={handleEditItem}
                onDeleteItem={handleDeleteItem}
              />
            ))}
          </div>

          <ThemeSelection />
          <SectionReorderInstructions />
        </>
      )}
    </div>
  );
};

export default Dashboard;
