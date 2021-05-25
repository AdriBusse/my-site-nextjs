import SectionOne from "../components/SectionOne";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <SectionOne />
      <div className="w-full h-screen bg-red-500" >hello</div>
      <div className="w-full h-screen bg-red-200" >hello</div>
    </div>
  )
}
