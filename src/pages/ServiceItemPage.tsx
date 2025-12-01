import { useParams } from "react-router-dom";
import { servicesData } from "../components/Services/servicesData";
import { slugify } from "../components/Services/slug";
import { useEffect, useState, type JSX,  } from "react";

import BrandConsulting from "../components/Services/Brands/BrandConsulting/BrandConsulting";
 import IndustrialProductDesign from "../components/Services/Brands/IndustrialProductDesign/IndustrialProductDesign";
import GraphicDesign from "../components/Services/Brands/GraphicDesigning/GraphicDesigning";
import MarketingMaterials from "../components/Services/Brands/Marketing/MarketingMaterials";
import BackgroundWrapper from "./Background";

import Business from "../components/Services/Brands/BusinessDevelopment/Business";

import AiMachineLearning from "../components/Services/Technology/MachineLearning/AiMachineLearning";
import WebDevelopment from "../components/Services/Technology/WebDevelopment/Webdevelopment";
import Ecommerce from "../components/Services/Technology/Ecommerce/Ecommerce";
import MobileApp from "../components/Services/Technology/MobileApp/MobileApp";
import Quality from "../components/Services/Technology/Quality/Quality";
import Cloud from "../components/Services/Technology/Cloud/Cloud";
import CyberSecurity from "../components/Services/Technology/Cyber/Cyber";


 import SEO from "../components/Services/SocialMedia/Search Engine Optimisation/Seo";
 import SEM from "../components/Services/SocialMedia/Search Engine Marketing/Sem";
import SocialMediaManagement from "../components/Services/SocialMedia/Social Media Management/Sem";
import PerformanceMarketing from "../components/Services/SocialMedia/ Performance Marketing/Perfomance";
 import ContentMarketing from "../components/Services/SocialMedia/ Content Marketing/Content";
import MarketingAutomation from "../components/Services/SocialMedia/ Marketing Automation/Marketing";
 import Analytics from "../components/Services/SocialMedia/ Analytics/Analytics";

 import UIUXDesign from "../components/Services/DESIGNS/UI/UX Design/ux";
import WebsiteDesign from "../components/Services/DESIGNS/Website Design/Web";
import MobileExperience from "../components/Services/DESIGNS/Mobile Experience/Mobile";
import CommerceExperience from "../components/Services/DESIGNS/Commerce Experience/Commerce";
import HMI from "../components/Services/DESIGNS/Human Machine Interface/Human";
import LogoDesign from "../components/Services/DESIGNS/Logo Design/Logo";

import Cinematography from "../components/Services/AD FILM MAKING/Cinematography/Cinema";
import ADFilmShoot from "../components/Services/AD FILM MAKING/AD Film Shoot/Ad";
import Portfolio from "../components/Services/AD FILM MAKING/Portfolio/Portfolio";

import PersonalPhotography from "../components/Services/PHOTOGRAPHY/Personal Photography/Personal";
import BusinessPhotography from "../components/Services/PHOTOGRAPHY/Business Photography/Business";

import VFX from "../components/Services/ANIMATION & VFX/VFX/Vfx";
import CGI from "../components/Services/ANIMATION & VFX/CGI/cgi";
import MotionGraphics from "../components/Services/ANIMATION & VFX/Motion Graphics/Motion";
import VisualEffectsAnimation from "../components/Services/ANIMATION & VFX/Visual Effects Animation/Visual";
import VFXStoryBoarding from "../components/Services/ANIMATION & VFX/VFX Story Boarding/Vfxstory";
import VirtualProduction from "../components/Services/ANIMATION & VFX/Virtual Production/Virtual";
import Animation2D from "../components/Services/ANIMATION & VFX/2D Animation/2d";
import Animation3D from "../components/Services/ANIMATION & VFX/3D Animation/3d";

export const specialServicePages: Record<string, JSX.Element> = {
  // BRANDING
  "branding/brand-consulting": <BrandConsulting />,
  "branding/industrial--product-design": <IndustrialProductDesign />,
  "branding/graphic-design": <GraphicDesign />,
  "branding/marketing-materials": <MarketingMaterials />,
  "branding/business-development": <Business />,

  // TECHNOLOGY
  "technology/ai--machine-learning": <AiMachineLearning />,
  "technology/web-development": <WebDevelopment />,
  "technology/e-commerce": <Ecommerce />,
  "technology/mobile-app-development": <MobileApp />,
  "technology/quality-assurance--testing": <Quality />,
  "technology/cloud-services": <Cloud />,
  "technology/cyber-security": <CyberSecurity />,

  // SOCIAL MEDIA
  "social-media/search-engine-optimisation": <SEO />,
  "social-media/search-engine-marketing": <SEM />,
  "social-media/social-media-management": <SocialMediaManagement />,
  "social-media/performance-marketing": <PerformanceMarketing />,
  "social-media/content-marketing": <ContentMarketing />,
  "social-media/marketing-automation": <MarketingAutomation />,
  "social-media/analytics": <Analytics />,

  // DESIGNS
  "designs/uiux-design": <UIUXDesign />,
  "designs/website-design": <WebsiteDesign />,
  "designs/mobile-experience": <MobileExperience />,
  "designs/commerce-experience": <CommerceExperience />,
  "designs/human-machine-interface": <HMI />,
  "designs/logo-design": <LogoDesign />,

  // AD FILM MAKING
  "ad-film-making/cinematography": <Cinematography />,
  "ad-film-making/ad-film-shoot": <ADFilmShoot />,
  "ad-film-making/portfolio": <Portfolio />,

  // PHOTOGRAPHY
  "photography/personal-photography": <PersonalPhotography />,
  "photography/business-photography": <BusinessPhotography />,

  // ANIMATION & VFX
  "animation--vfx/vfx": <VFX />,
  "animation--vfx/cgi": <CGI />,
  "animation--vfx/motion-graphics": <MotionGraphics />,
  "animation--vfx/visual-effects-animation": <VisualEffectsAnimation />,
  "animation--vfx/vfx-story-boarding": <VFXStoryBoarding />,
  "animation--vfx/virtual-production": <VirtualProduction />,
  "animation--vfx/2d-animation": <Animation2D />,
  "animation--vfx/3d-animation": <Animation3D />,
};

export default function ServiceItemPage() {
  const { categorySlug, itemSlug } = useParams();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const category = servicesData.find(
    (cat) => slugify(cat.title) === categorySlug
  );
  if (!category) return <p className="p-10 text-xl">Category not found</p>;

  const item = category.items.find((i) => slugify(i) === itemSlug);
  if (!item) return <p className="p-10 text-xl">Service not found</p>;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const pageKey = `${categorySlug}/${itemSlug}`;
  const specialPage = specialServicePages[pageKey];

  // If page exists → wrap with Background
  if (specialPage)
    return (
      <BackgroundWrapper mousePosition={mousePosition}>
        {specialPage}
      </BackgroundWrapper>
    );

  // Default page
  return (
    <BackgroundWrapper mousePosition={mousePosition}>
      <div className="p-10 text-white">
        <h1 className="text-4xl font-bold mb-4">{item}</h1>
        <div className="bg-gray-800 p-6 rounded-xl">
          <p className="text-lg">
            Detailed content for <strong>{item}</strong> will be displayed here.
          </p>
        </div>
      </div>
    </BackgroundWrapper>
  );
}
