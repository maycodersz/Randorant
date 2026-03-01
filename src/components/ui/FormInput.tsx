type FormInputProps = {
    label : string;
    placeholder : string;
}

const FormInput : React.FC<FormInputProps> = ({label, placeholder}) => {
  return (
    <div className="w-full flex flex-col items-start space-y-2">
        <label className="font-bold text-lg xl:text-xl 2xl:text-2xl">{label}</label>
        <input type="text" placeholder={placeholder} className="border-1 w-full py-1.5 px-3 rounded-lg font-[family-name:Inter] text-sm xl:text-base 2xl:text-lg"/>
    </div>
  )
}

export default FormInput