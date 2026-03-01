import type { FormHeaderProps } from "../../props"

const FormHeader : React.FC<FormHeaderProps> = ({Icon, title, description}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
        <Icon className="text-7xl text-violet-900 xl:text-8xl"/>
        <h1 className="font-bold text-2xl xl:text-3xl">{title}</h1>
        <p className="w-4/5 font-light text-sm xl:text-base">{description}</p>
    </div>
  )
}

export default FormHeader