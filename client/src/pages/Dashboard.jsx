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
        certification: response?.certification,
        "personal-details": response?.personalDetails,
      };

      // Populate items based on the response map
      const populatedSections = sections.map((section) => ({
        ...section,
        items: responseMap[section.id] || [],
      }));
      setSections(populatedSections);
    } catch (error) {
      console.error("Failed to fetch portfolio data:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleAddItem = async (sectionId, newItem) => {
    let id;
    if (sectionId === "projects" || sectionId === "personal-details") {
      id = await handleCreateFormData(sectionId, newItem);
    } else {
      id = await createData(sectionId, newItem);
    }
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? { ...section, items: [...section.items, { ...newItem, _id: id }] }
          : section
      )
    );
  };

  const handleEditItem = async (sectionId, itemIndex, updatedItem) => {
    if (sectionId === "projects" || sectionId === "personal-details") {
      await handleUpdateFormData(sectionId, updatedItem._id, updatedItem);
    } else {
      await updateData(sectionId, updatedItem._id, updatedItem);
    }
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

  const handleDeleteItem = async (sectionId, itemIndex, id) => {
    await deleteData(sectionId, id);
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
  };

  // console.log(sections);
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

          <ThemeSelection sections={sections} />
          <SectionReorderInstructions />
        </>
      )}
    </div>
  );
};

export default Dashboard;
