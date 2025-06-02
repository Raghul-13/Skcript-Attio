import Button from "@/components/ui/Button";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="items-center justify-center flex flex-col">
        <h1 className="text-6xl font-semibold text-muted-foreground mb-4">
          404
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button className="border bg-white text-black" onClick={() => navigate("/")}>
          Take me home
        </Button>
      </div>
    </main>
  );
}
