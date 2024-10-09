import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import WorkFormFields from "./WorkFormFields";
import ProjectFormFields from "./ProjectFormFields";
import EducationFormFields from "./EducationFormFields";
import SkillsFormFields from "./SkillsFormFields";
import AchievementsFormFields from "./AchievementsFormFields";
import CertificationsFormFields from "./CertificationsFormFields";
import SummaryFormFields from "./SummaryFormFields";
import ProfilePreview from "./ProfilePreview";

export default function SectionForm({ sectionId, onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmit(formData);
  };

  const renderFormFields = () => {
    switch (sectionId) {
      case "experiences":
        return <WorkFormFields formData={formData} setFormData={setFormData} />;
      case "projects":
        return (
          <ProjectFormFields formData={formData} setFormData={setFormData} />
        );
      case "education":
        return (
          <EducationFormFields formData={formData} setFormData={setFormData} />
        );
      case "skills":
        return (
          <SkillsFormFields formData={formData} setFormData={setFormData} />
        );
      case "achievements":
        return (
          <AchievementsFormFields
            formData={formData}
            setFormData={setFormData}
          />
        );
      case "certifications":
        return (
          <CertificationsFormFields
            formData={formData}
            setFormData={setFormData}
          />
        );
      case "summary":
        return (
          <SummaryFormFields formData={formData} setFormData={setFormData} />
        );
      case "personal-details":
        return <ProfilePreview formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {renderFormFields()}
      <Button type="submit">{initialData?.id ? "Update" : "Add"}</Button>
    </form>
  );
}
