import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/scroll-to-top";
import Home from "@/pages/home";
import Admin from "@/pages/admin";
import BlogPost from "@/pages/blog-post";
import AGB from "@/pages/agb";
import Datenschutz from "@/pages/datenschutz";
import Danke from "@/pages/danke";
import Impressum from "@/pages/impressum";
import NotFound from "@/pages/not-found";
import SEOExample from "@/pages/seo-example";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/agb" component={AGB} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/danke" component={Danke} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/seo-example" component={SEOExample} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
