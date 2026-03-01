import type { IconType } from "react-icons";

export type FooterLink = {
    title : string;
    path : string;
}

export type FooterSocialLink = {
    Icon : IconType;
    path : string;
}

export type FooterContentProps = {
    title : string;
    description? : string;
    links? : FooterLink[];
    socialLinks? : FooterSocialLink[];
}

export type NavBarProps = {
  visible : boolean;
}

export type StatusItem = {
    status: string;
    description: string;
}

export type StatusProps = {
    statuses: StatusItem[];
}

export type CarouselProps = {
    icons : IconType[];
}

export type Card = {
    title : string;
    Icon : IconType;
    description : string;
}

export type AboutCardProps = {
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