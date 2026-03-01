import type { FormHeaderProps } from "../../props"

const FormHeader : React.FC<FormHeaderProps> = ({Icon, title, description}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
        <Icon className="text-7xl text-violet-900 xl:text-8xl 2xl:text-9xl"/>
        <h1 className="font-bold text-2xl xl:text-3xl 2xl:text-4xl">{title}</h1>
        <p className="w-4/5 font-[family-name:Inter] text-gray-700 text-base xl:text-lg 2xl:text-xl">{description}</p>
    </div>
  )
}

export default FormHeader