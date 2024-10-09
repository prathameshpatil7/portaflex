import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { fetch } from "@/service/fetch";
import { useNavigate } from "react-router-dom";

export default function SetRoute({ onSetApp, userId }) {
  const [routeName, setRouteName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setRouteName(userId);
    userId && setIsUpdating(true);
  }, [userId]);
  const handleInputChange = (e) => {
    setRouteName(e.target.value);
    setSuccessMessage(""); // Clear message when input changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsChecking(true);

    try {
      const isAvailable = await checkAvailability(routeName);

      if (isAvailable) {
        setSuccessMessage(
          `The route "${routeName}" is available. Redirecting....`
        );
        await updateUserRoute(routeName);
        setTimeout(() => {
          setIsChecking(false);
          onSetApp({ userId: routeName });
          navigate("/dashboard");
        }, 2000);
      } else {
        setSuccessMessage(`Sorry, the route "${routeName}" is not available.`);
        setIsChecking(false);
      }
    } catch (error) {
      console.error(error);
      setIsChecking(false);
      setSuccessMessage("An error occurred. Please try again.");
    }
  };

  const updateUserRoute = async (route) => {
    try {
      await fetch(
        {
          url: `/user/update`,
          body: {
            userId: route,
          },
        },
        "PUT"
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const checkAvailability = async (route) => {
    try {
      const response = await fetch(
        {
          url: `/user/check-unique-id/${route}`,
        },
        "GET"
      );

      return response.available || false;
    } catch (error) {
      console.log(error);
      if (error.message === "User ID is already taken") {
        return false;
      } else {
        throw error;
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="routeName" className="text-primary">
            Route Name
          </Label>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="text"
              id="routeName"
              value={routeName}
              onChange={handleInputChange}
              className="flex-grow bg-input"
              placeholder="Name"
              required
              disabled={isChecking}
            />
            <Button
              type="submit"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isChecking}
            >
              {isUpdating
                ? isChecking
                  ? "Checking..."
                  : "Update"
                : isChecking
                ? "Checking..."
                : "Check Availability"}
            </Button>
          </div>
        </div>
        <div className="h-10">
          {successMessage && (
            <p className="text-secondary-foreground mt-2">{successMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
}
