import { useState } from "react";
import type { FormSwitchProps } from "../../types";

const FormSwitch: React.FC<FormSwitchProps> = ({ 
    label, 
    Icon,
    defaultChecked = false 
}) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleToggle = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
    };

    return (
        <div className="w-full flex items-center justify-between space-x-4">
            <label className="text-xs text-gray-700 lg:text-sm" htmlFor="form-switch">{label}</label>
            <label className="relative inline-block w-[50px] h-[30px] cursor-pointer lg:w-[60px] lg:h-[34px]">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleToggle}
                    id="form-switch"
                    className="opacity-0 w-0 h-0 absolute"
                />
                <span className={`absolute top-0 left-0 right-0 bottom-0 border border-violet-900 rounded-full flex items-center px-1 transition-colors duration-300 ${isChecked ? "bg-violet-900" : "bg-white"}`}>
                    <div className={`flex items-center justify-center h-[26px] w-[26px] rounded-full bg-white text-sm transition-transform duration-300 ${isChecked ? "translate-x-[15px] md:translate-x-[16px] lg:translate-x-[26px]" : ""}`}>
                        <Icon className={`text-lg lg:text-xl ${isChecked ? "text-violet-900" : "text-gray-700"}`} />
                    </div>
                </span>
            </label>
        </div>
    );
}

export default FormSwitch;