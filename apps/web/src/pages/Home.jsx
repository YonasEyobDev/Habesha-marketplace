
import { Hero } from "@/components/sections/Hero"
import { FeatureStrip } from "@/components/product/FeatureStrip"
import { NewArrivals } from "@/components/sections/NewArrivals"

export function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <NewArrivals />
    </>
  )
}