import { useRef, useState, useEffect } from 'react';
import type { FormSliderProps } from '../../types';



const FormSlider: React.FC<FormSliderProps> = ({label, Icon ,description, unit, min, max, step = 1}) => {
    const outerDiv = useRef<HTMLDivElement>(null);
    const iconDiv = useRef<HTMLDivElement>(null);
    const [percentage, setPercentage] = useState<number>(0);
    const [translateValue, setTranslateValue] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    
    const totalSteps = (max - min) / step;
    const currentStep = Math.round((percentage / 100) * totalSteps);
    const unitValue = min + (currentStep * step);

    useEffect(() => {
        if (outerDiv.current && iconDiv.current) {
            const outerWidth = outerDiv.current.offsetWidth;
            const iconWidth = iconDiv.current.offsetWidth;

            const availableWidth = outerWidth - iconWidth;
            
            setTranslateValue(availableWidth * (percentage / 100));
        }
    }, [percentage]);

    const snapToStep = (rawPercentage: number): number => {
        const stepIndex = Math.round((rawPercentage / 100) * totalSteps);
        return (stepIndex / totalSteps) * 100;
    };

    const calculatePercentageFromMouse = (clientX: number) => {
        if (!outerDiv.current || !iconDiv.current) return;
        
        const rect = outerDiv.current.getBoundingClientRect();
        const iconWidth = iconDiv.current.offsetWidth;
        
        const x = clientX - rect.left - (iconWidth / 2);
        const availableWidth = rect.width - iconWidth;
        
        let rawPercentage = (x / availableWidth) * 100;
        rawPercentage = Math.min(100, Math.max(0, rawPercentage));
        
        const snappedPercentage = snapToStep(rawPercentage);
        
        setPercentage(snappedPercentage);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        calculatePercentageFromMouse(e.clientX);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        calculatePercentageFromMouse(e.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        calculatePercentageFromMouse(e.clientX);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                e.preventDefault();
                setPercentage(prev => Math.min(100, prev + (100 / totalSteps)));
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                e.preventDefault();
                setPercentage(prev => Math.max(0, prev - (100 / totalSteps)));
                break;
            case 'Home':
                e.preventDefault();
                setPercentage(0);
                break;
            case 'End':
                e.preventDefault();
                setPercentage(100);
                break;
        }
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="w-full flex flex-col space-y-2">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg xl:text-xl 2xl:text-2xl">{label}</h1>
                <span className="text-xs text-gray-700 lg:text-sm">
                    {unit === '$' 
                        ? '$'.repeat(Math.max(1, Math.min(4, Math.ceil(unitValue)))) 
                        : `${unitValue.toFixed(step < 1 ? 1 : 0)} ${unit}`}
                </span>
            </div>
            <div 
                ref={outerDiv} 
                className="relative w-full h-7 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400 cursor-pointer"
                onMouseDown={handleMouseDown}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={unitValue}
                aria-label={label}
            >
                <div 
                    className="absolute top-0 left-0 h-full bg-violet-900 rounded-full"
                    style={{ width: translateValue + 28 }}
                />
                
                <div 
                    ref={iconDiv}
                    style={{ left: translateValue }}
                    className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center h-7 w-7 rounded-full bg-white text-sm shadow-md z-10 ${
                        isDragging ? 'cursor-grabbing scale-110' : 'cursor-pointer'
                    } transition-all duration-75`}
                >
                    <Icon className="text-lg lg:text-xl text-violet-900" />
                </div>
            </div>
            <p className="text-left text-xs text-gray-700 lg:text-sm">{description}</p>
        </div>
    );
};

export default FormSlider;