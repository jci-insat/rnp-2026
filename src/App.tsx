import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ForumEntreprisesPage from "./pages/ForumEntreprisesPage";
import HackathonPage from "./pages/HackathonPage";
import SoireePage from "./pages/SoireePage";
import CyePage from "./pages/CyePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/activites/forum-entreprises" element={<ForumEntreprisesPage />} />
          <Route path="/activites/hackathon" element={<HackathonPage />} />
          <Route path="/activites/soiree" element={<SoireePage />} />
          <Route path="/activites/cye" element={<CyePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
