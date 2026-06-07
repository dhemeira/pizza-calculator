import { Trans } from 'react-i18next';
import Sup from '~/components/ui/Sup';

function Footer() {
  return (
    <footer className="text-text-muted text-center text-sm font-normal">
      <Trans i18nKey="footer" components={{ pi: <span>&#960;</span>, sup: <Sup /> }} />
    </footer>
  );
}

export default Footer;
