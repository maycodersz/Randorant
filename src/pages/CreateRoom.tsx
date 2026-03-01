import CreateForm from "../components/layout/CreateForm"
import Quote from "../components/ui/Quote"

const CreateRoom : React.FC = () => {
  return (
    <section className="w-full min-h-[60vh] flex py-8 px-[10%] font-[family-name:Poppins] text-center items-center justify-center lg:min-h-[80vh] lg:space-x-16 xl:space-x-32">
        <Quote quote="Great meals start with great decisions."/>
        <CreateForm/>
    </section>
  )
}

export default CreateRoom