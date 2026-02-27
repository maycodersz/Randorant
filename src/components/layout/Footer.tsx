import type { FooterContentProps} from "../../props"
import { FaFacebook, FaInstagram, FaGithub  } from "react-icons/fa";
import FooterContent from "../ui/FooterContent"

const Footer : React.FC = () => {
  const about : FooterContentProps = {
    title : "About",
    description : "Randorant helps friends, families, and coworkers make dining decisions in minutes instead of hours."
  }

  const quickLinks : FooterContentProps = {
    title : "Quick Links",
    links : [
      {title : 'How It Works', path : ''},
      {title : 'Join Room', path : ''},
      {title : 'Create Room', path : ''},
    ]
  }

  const legalLinks : FooterContentProps = {
    title : "Legal Links",
    links : [
      {title : 'Terms of Services', path : ''},
      {title : 'Privacy Policy', path : ''},
      {title : 'Cookies', path : ''},
    ]
  }

  const socialLinks : FooterContentProps = {
    title : "Social Links",
    socialLinks : [
      {Icon : FaFacebook, path : ''},
      {Icon : FaInstagram, path : ''},
      {Icon : FaGithub, path : ''},
    ]
  }

  return (
    <footer className="w-full font-[family-name:Poppins] bg-violet-900 text-[#FFF] py-16 px-[10%] flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between">
      <FooterContent title={about.title} description={about.description}/>
      <FooterContent title={quickLinks.title} links={quickLinks.links}/>
      <FooterContent title={legalLinks.title} links={legalLinks.links}/>
      <FooterContent title={socialLinks.title} socialLinks={socialLinks.socialLinks}/>
    </footer>
  )
}

export default Footer