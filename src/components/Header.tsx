
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
      flex justify-between px-4 py-4 items-center border-b-2 border-neutral-200">
        <div className="flex items-center gap-6">
          <LogoSvg className="w-7 h-7 fill-purple-500" />
          <h1 
            onClick={() => navigate('/')}
            className="text-3xl font-bold text-purple-500 cursor-pointer"   
            role="banner"    
          >ChatBot</h1>
          <nav role="navigation" className="flex gap-2">
            <Link className="font-semibold" to="/">{t('home')}</Link>
            <Link className="font-semibold" to="/favorite">{t('favorites')}</Link>
            <Link className="font-semibold" to="/about">{t('about')}</Link>
          </nav>
        </div>
        <div className="flex gap-2">
          <ModeSwitch />  
          <LanguageSwitch /> 
        </div>         
      </div>
    </>
  );
}