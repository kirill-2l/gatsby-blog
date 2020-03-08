import React from "react"

import GithubLogo from "../../assets/images/svg/github.svg"
import TelegramLogo from "../../assets/images/svg/telegram.svg"

const Contacts = () => {
  return (
    <div className="contacts">
      <a className="contacts__link" href="https://github.com/kirill-2l" target="_blank" rel="noopener noreferrer">
      <GithubLogo />
      </a>
      <a href="https://t.me/kirill_petrovv" target="_blank" rel="noopener noreferrer">
      <TelegramLogo width="24"/>
      </a>
    </div>
  )
}

export default Contacts
