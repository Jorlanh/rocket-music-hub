import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import AIChatWidget from "@/components/AIChatWidget";
import Dashboard from "@/pages/Dashboard";
import AlbumPage from "@/pages/AlbumPage";
import ProfilePage from "@/pages/ProfilePage";
import RankingPage from "@/pages/RankingPage";
import AlbumsPage from "@/pages/AlbumsPage";
import ListsPage from "@/pages/ListsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/album/:id" element={<AlbumPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/albums" element={<AlbumsPage />} />
            <Route path="/lists" element={<ListsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <AIChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
