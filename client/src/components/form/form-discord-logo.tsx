import React from 'react';
import discordTextLogo from '../../images/discord-text-logo.png';
import discordWhiteLogo from '../../images/discord-white-logo.png';
import './styles/form-styles.css';

const FormDiscordLogo = () => (
  <div className="discord-logo text-center">
    <img className="discord-white-logo mx-2" src={discordWhiteLogo} alt="Discord White Logo" />
    <img className="discord-text-logo" src={discordTextLogo} alt="Discord Text Logo" />
  </div>
);

export default FormDiscordLogo;
