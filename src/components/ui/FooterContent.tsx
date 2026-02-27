import { Link } from 'react-router-dom';
import type { FooterContentProps } from '../../props';

const FooterContent : React.FC<FooterContentProps> = ({title, description, links, socialLinks}) => {
  return (
    <div className='w-full flex flex-col space-y-2 md:max-w-1/4'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <div className={`flex flex-col space-y-2 ${socialLinks && 'flex-row space-y-0 space-x-4'}`}>
            {description && <p className='text-sm w-3/4'>{description}</p>}
            {links && links.length > 0 && links.map(link => {
                return(<Link to={link.path} className='text-sm'>{link.title}</Link>);
            })}
            {socialLinks && socialLinks.length > 0 && socialLinks.map(socialLink => {
                return(<Link to={socialLink.path}><socialLink.Icon className='text-lg'/></Link>);
            })}
        </div>
    </div>
  )
}

export default FooterContent;