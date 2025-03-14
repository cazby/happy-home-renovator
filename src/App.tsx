
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Additions from "./pages/Additions";
import Kitchens from "./pages/Kitchens";
import Bathrooms from "./pages/Bathrooms";
import Floors from "./pages/Floors";
import Basements from "./pages/Basements";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/additions" element={<Additions />} />
          <Route path="/kitchens" element={<Kitchens />} />
          <Route path="/bathrooms" element={<Bathrooms />} />
          <Route path="/floors" element={<Floors />} />
          <Route path="/basements" element={<Basements />} />
          <Route path="/quote" element={<Quote />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
