import JoinForm from "../components/layout/JoinForm"
import Quote from "../components/ui/Quote"

const JoinRoom : React.FC = () => {
  return (
    <section className="w-full min-h-[60vh] flex py-8 px-[10%] font-[family-name:Poppins] text-center items-center justify-center lg:min-h-[80vh] lg:space-x-16 xl:space-x-32">
        <Quote quote="Your friends are waiting. Your vote matters."/>
        <JoinForm/>
    </section>
  )
}

export default JoinRoom