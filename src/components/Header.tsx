
import ModeSwitch from './ModeSwitch';
import LanguageSwitch from './LanguageSwitch';
import { ReactComponent as LogoSvg } from '../assets/circle-nodes-solid.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div
        id="header"
        data-testid="header"
        className="fixed top-0 z-10 w-full bg-white dark:bg-black dark:text-white 
        grid grid-cols-12 px-4 py-4 items-center border-b-2 border-neutral-200">
        <div className="col-span-4 flex items-center gap-6 sm:col-span-12">
          <LogoSvg className="w-7 h-7 fill-purple-500" />
          <h1 
            onClick={() => navigate('/')}
            className="text-3xl font-bold text-purple-500 cursor-pointer"   
            role="banner"    
          >ChatBot</h1>    
        </div>
        <nav role="navigation" className="col-span-6 flex gap-2 sm:col-span-8">
          <Link className="font-semibold" to="/">{t('home')}</Link>
          <Link className="font-semibold" to="/favorite">{t('favorites')}</Link>
          <Link className="font-semibold" to="/about">{t('about')}</Link>
        </nav>

        <div className="col-span-2 flex gap-2 sm:col-span-4 place-self-end">
          <ModeSwitch />  
          <LanguageSwitch /> 
        </div>         
      </div>
    </>
  );
}