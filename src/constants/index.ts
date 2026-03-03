import { FaHtml5, FaJsSquare, FaCss3Alt, FaReact  } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss  } from "react-icons/si";
import { BsHouseAddFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";
import { BsIncognito } from "react-icons/bs";
import { IoRestaurantSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaGithub  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import type { HeroStatsProps, IconCarouselProps, CardProps, FormHeaderProps, FormInputProps, FormSwitchProps, FooterContentProps } from "../types";

//Hero.tsx
export const HERO_STATS : HeroStatsProps = {
    stats : [
        {value: '860+', description:'Room Created'},
        {value: '96%', description:'Satisfaction Rate'},
        {value: '5 min', description:'Average Time'},
    ]
} as const;

export const TECH_ICONS : IconCarouselProps = {
    icons : [FaHtml5, FaCss3Alt, FaJsSquare, FaReact, BiLogoTypescript, SiTailwindcss]
} as const;

//HowItWorks.tsx
export const CARDS : CardProps[] = [
    {title : "Create" , Icon : BsHouseAddFill, description : "Set your location and budget. We’ll find matching restaurants."}, 
    {title : "Join", Icon : FaUserFriends, description : "Share the unique room code with friends via any messaging app. No accounts needed."}, 
    {title : "Decide", Icon : GiChampions, description : "Vote on restaurant cards. Watch votes tally up and celebrate the winner."}
] as const;

//JoinForm.tsx
export const JOIN_HEADER : FormHeaderProps = {
    title : "Join your friends",
    Icon : BsFillHouseFill,
    description : "Enter the room code and your display name to join your friend's restaurant voting session."
} as const;

export const JOIN_INPUTS : FormInputProps[] = [
    {
    label : "Room Code", 
    placeholder : "Enter your 6-digit room code"
    },
    {
    label : "Display Name", 
    placeholder : "Enter your display name"
    }
] as const;

export const JOIN_SWITCH : FormSwitchProps = {
    label : "Join as “Hungry Voter” (Random Name)",
    Icon : BsIncognito
} as const;

//CreateForm.tsx
  export const CREATE_HEADER : FormHeaderProps= {
      title : "Find Restaurants",
      Icon : IoRestaurantSharp,
      description : "Set your location and budget. We’ll find matching restaurants."
  } as const;
  
  export const CREATE_INPUT : FormInputProps ={
      label : "Room Name", 
      placeholder : "Enter room name"
  } as const;
  
  export const CREATE_SWITCH : FormSwitchProps= {
      label : "Only show open restaurants now",
      Icon : FaRegClock
  } as const;

export const ABOUT : FooterContentProps = {
    title : "About",
    description : "Randorant helps friends, families, and coworkers make dining decisions in minutes instead of hours."
}

export const QUICK_LINKS : FooterContentProps = {
    title : "Quick Links",
    links : [
        {label : 'How It Works', href : '/#how-it-works'},
        {label : 'Join Room', href : '/join'},
        {label : 'Create Room', href : '/create'},
    ]
}

export const LEGAL_LINKS : FooterContentProps = {
    title : "Legal Links",
    links : [
        {label : 'Terms of Services', href : ''},
        {label : 'Privacy Policy', href : ''},
        {label : 'Cookies', href : ''},
    ]
}

export const SOCIAL_LINKS : FooterContentProps = {
    title : "Social Links",
    socialLinks : [
        {Icon : FaFacebook, href : ''},
        {Icon : FaInstagram, href : ''},
        {Icon : FaGithub, href : ''},
    ]
}

export const CREATE_SLIDERS = [
    {
        label : "Distance",
        Icon : FaLocationDot,
        description : "How far are you willing to go?",
        unit : "miles",
        min : 0,
        max : 5,
    },
    {
        label : "Budget",
        Icon : BiDollar,
        description : "What's your spending comfort zone?",
        unit : "$",
        min : 0,
        max : 4,
    },
    {
        label : "Voters",
        Icon : FaUser,
        description : "How many voices in the decision?",
        unit : "voters",
        min : 2,
        max : 10,
    }
]