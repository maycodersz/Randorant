import { Link } from 'react-router-dom';
import type { FooterContentProps } from '../../types';

const FooterContent : React.FC<FooterContentProps> = ({title, description, links, socialLinks}) => {
  return (
    <div className='w-full flex flex-col space-y-2 md:max-w-1/4'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <div className={`flex flex-col space-y-2 ${socialLinks && 'flex-row space-y-0 space-x-4'}`}>
            {description && <p className='text-sm w-3/4'>{description}</p>}
            {links && links.length > 0 && links.map((link, index) => {
                return(<Link key={`link-${index}`} to={link.href} className='text-sm'>{link.label}</Link>);
            })}
            {socialLinks && socialLinks.length > 0 && socialLinks.map((socialLink, index) => {
                return(<Link key={`social-link-${index}`} to={socialLink.href}><socialLink.Icon className='text-lg'/></Link>);
            })}
        </div>
    </div>
  )
}

export default FooterContent;