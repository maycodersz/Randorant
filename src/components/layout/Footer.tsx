import FooterContent from "../ui/FooterContent"
import {ABOUT, QUICK_LINKS, LEGAL_LINKS, SOCIAL_LINKS} from '../../constants/index'

const Footer : React.FC = () => {
  return (
    <footer className="w-full font-[family-name:Poppins] bg-violet-900 text-[#FFF] py-16 px-[10%] flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between">
      <FooterContent {...ABOUT}/>
      <FooterContent {...QUICK_LINKS}/>
      <FooterContent {...LEGAL_LINKS}/>
      <FooterContent {...SOCIAL_LINKS}/>
    </footer>
  )
}

export default Footer