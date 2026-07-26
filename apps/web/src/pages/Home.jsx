import { Hero } from "@/components/sections/Hero"
import { FeatureStrip } from "@/components/sections/FeatureStrip"
import { NewArrivals } from "@/components/sections/NewArrivals"
import { CollectionsSection } from "@/components/sections/CollectionsSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"

export function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <NewArrivals />
      <CollectionsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}