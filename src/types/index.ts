import type { IconType } from "react-icons";

export type FooterLink = {
    label : string;
    href : string;
}

export type FooterSocialLink = {
    Icon : IconType;
    href : string;
}

export type FooterContentProps = {
    title : string;
    description? : string;
    links? : readonly FooterLink[];
    socialLinks? : readonly FooterSocialLink[];
}

export type NavBarProps = {
  isVisible : boolean;
}

export type Status = {
    value: string;
    description: string;
}

export type HeroStatsProps = {
    stats: readonly Status[];
}

export type IconCarouselProps  = {
    icons : readonly IconType[];
}

export type CardProps = {
    title : string;
    Icon : IconType;
    description : string;
}

export type FormHeaderProps = {
    Icon : IconType;
    title : string;
    description : string;
}

export type FormInputProps = {
    label : string;
    placeholder : string;
}

export type FormSwitchProps = {
    label: string;
    Icon : IconType;
    defaultChecked?: boolean;
}

export type FormButtonProps = {
    children : React.ReactNode;
}

export type FormSliderProps = {
    label : string;
    Icon : IconType;
    description : string;
    unit : string;
    min : number;
    max : number;
    step?: number;
}