import PageTransitionWrapper from "@/components/Animate/PageTransitionWrapper/PageTransitionWrapper";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";
import DevSetupClient from "./DevSetupClient";

export const metadata: Metadata = {
  title: `Dev Setup Guide | ${APP_CONFIG.title}`,
  description:
    "Step-by-step guide to set up Firebase for local development of the MMSWE project. Beginner-friendly.",
  openGraph: {
    title: `Dev Setup Guide | ${APP_CONFIG.title}`,
    description:
      "Step-by-step guide to set up Firebase for local development of the MMSWE project. Beginner-friendly.",
    images: "https://mmswe.com/images/mmswe-seo.png",
  },
};

export default function DevSetupPage() {
  return (
    <PageTransitionWrapper>
      <DevSetupClient />
    </PageTransitionWrapper>
  );
}
