import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";

const ProfilePreview = ({ formData, setFormData }) => {
  // const [previewData, setPreviewData] = useState(formData);
  // useEffect(() => {
  //   setPreviewData(formData);
  // }, [formData]);
  const handleProfilePictureChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, profilePicture: reader.result }));
        // setFormData((prev) => ({ ...prev, [name]: value }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setPreviewData((prev) => ({ ...prev, [name]: value }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Input
            name="name"
            placeholder="Full Name"
            defaultValue={formData?.name || ""}
            onChange={handleInputChange}
          />
          <Textarea
            name="shortHeadline"
            placeholder="Short Headline (e.g., Software Development Engineer | MERN Stack | React Js | SQL | Node | Mongo DB)"
            defaultValue={formData?.shortHeadline || ""}
            maxLength={120}
            onChange={handleInputChange}
            style={{ resize: "none" }}
          />
          <Textarea
            name="careerObjective"
            placeholder="Career Objective"
            defaultValue={formData?.careerObjective || ""}
            onChange={handleInputChange}
            style={{ resize: "none" }}
          />
          <Input
            name="employmentDuration"
            placeholder="Total Duration of Employment"
            defaultValue={formData?.employmentDuration || ""}
            onChange={handleInputChange}
            type="number"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            defaultValue={formData?.email || ""}
            onChange={handleInputChange}
          />
          <Input
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            defaultValue={formData?.phoneNumber || ""}
            onChange={handleInputChange}
          />
          <Input
            name="linkedinProfile"
            placeholder="LinkedIn Profile URL"
            defaultValue={formData?.linkedinProfile || ""}
            onChange={handleInputChange}
          />
          <Input
            name="githubProfile"
            placeholder="GitHub Profile URL"
            defaultValue={formData?.githubProfile || ""}
            onChange={handleInputChange}
          />
          <div className="space-y-2">
            <Label htmlFor="profilePicture">Profile Picture</Label>
            <Input
              id="profilePicture"
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </div>
        </div>
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardTitle className="text-2xl font-bold">
                {formData?.name || "Your Name"}
              </CardTitle>
              <CardDescription className="text-gray-100">
                {formData?.shortHeadline || "Your Headline"}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                  <AvatarImage
                    src={
                      formData?.profilePicture ||
                      "/placeholder.svg?height=96&width=96"
                    }
                  />
                  <AvatarFallback>
                    {formData?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 overflow-x-wrap">
                    {formData?.email || "email@example.com"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formData?.phoneNumber || "+1 234 567 890"}
                  </p>
                  <div className="flex space-x-2">
                    {formData?.linkedinProfile && (
                      <a
                        href={formData?.linkedinProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        LinkedIn
                      </a>
                    )}
                    {formData?.githubProfile && (
                      <a
                        href={formData?.githubProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold">Career Objective</h3>
                <p className="text-sm text-gray-600">
                  {formData?.careerObjective ||
                    "Your career objective goes here..."}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Total Experience:{" "}
                  {`${formData?.employmentDuration || 0} Years`}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProfilePreview;
