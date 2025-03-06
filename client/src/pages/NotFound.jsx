import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// src/pages/NotFound.js
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center pb-12">
            <div className="max-w-5xl mx-auto">
              <h1 className="font-outfit font-bold text-5xl md:text-6xl text-zinc-800 dark:text-zinc-100 tracking-[-.008em]">
                Sorry, we couldn't find this page!
              </h1>
            </div>
          </div>
          <div className="text-center">
            {" "}
            <Button
              className="btn bg-zinc-800 dark:bg-zinc-100 hover:bg-zinc-950 dark:hover:bg-white text-zinc-50 dark:text-zinc-800"
              onClick={() => navigate("/")}
            >
              Back Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
