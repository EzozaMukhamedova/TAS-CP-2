import Hero from "@/components/hero"
import ServicesOverview from "@/components/bizningXizmatlarimiz"
import TrackRecordPreview from "@/components/track-record-preview"
import RentalPreview from "@/components/rental-preview"
import RecruitmentPreview from "@/components/recruitment-preview"
import NewsPreview from "@/components/boshIsh"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      {/* <TrackRecordPreview /> */}
      {/* <RentalPreview /> */}
      {/* <RecruitmentPreview /> */}
      <NewsPreview />
    </main>
  )
}
