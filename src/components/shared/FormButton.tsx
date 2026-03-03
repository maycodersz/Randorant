import type { FormButtonProps } from "../../types"

const FormButton : React.FC<FormButtonProps> = ({children}) => {
  return (
    <button className="w-full font-bold text-sm py-2 px-4 bg-violet-900 text-[#FFF] cursor-pointer rounded-lg hover:bg-violet-950 xl:text-base 2xl:text-lg xl:rounded-xl">{children}</button>
  )
}

export default FormButton