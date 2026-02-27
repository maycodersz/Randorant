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