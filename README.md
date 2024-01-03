# DiscordFont

[![License](https://img.shields.io/badge/license-Ms._Dysphoria-blue.svg)](LICENSE)

## Description

A BetterDiscord plugin that enables fonts for the chat.

## Table of Contents
- [Information](#information)
- [Installation](#installation)
- [Usage](#usage)
- [Fonts](#fonts)
- [Limitations](#limitations)
- [Known Issues](#knownissues)
- [To-Do](#to-do)
- [Contact](#contact)

## Information
`What it is` <br />
- It's an open source third party plugin written for BetterDiscord. At first it was going to be for my personal use, but then I decided to share. It's essentially a character converter one could find on the internet by searching for 'Discord Font Generator', the only difference is that the conversion happens as the user sends messages, without any extra steps to make things more fluent and quicker.
 
`𝗛𝗼𝘄 𝗶𝘁 𝘄𝗼𝗿𝗸𝘀` <br />
- DiscordFont allows different fonts to be used in chat. It does it through replacing the letters and numbers of the message that is about to be sent with the special characters defined inside the arrays in the code. Upon sending a message, each character in it is replaced with the font and number style chosen, and the result can be seen after the message is sent.
   
## Installation

To install and use this plugin, follow these steps:

1. Download `DiscordFont.plugin.js`.
2. Either click on `Open Plugins Folder` which is inside the Plugins section of BetterDiscord inside Discord Settings or locate the usual directory of plugins which is `AppData\Roaming\BetterDiscord\plugins`
3. Drag and drop the downloaded file into the folder.

## Usage
- Head to Settings/Plugins/DiscordFont's Plugin Settings.
  
![image](https://github.com/MsDysphoria/DiscordFont/assets/93496667/d7e4df74-85df-4ceb-bf7f-818117d39233)

- In the Plugin's settings, pick a font and number style you want.

![Settings-Preview](https://github.com/MsDysphoria/DiscordFont/assets/93496667/237f5741-ab5a-4788-bf36-c76d521c41eb)

- Write and send a message

𝒮𝒸𝓇𝒾𝓅𝓉<br /><br />
![Text-Preview-1](https://github.com/MsDysphoria/DiscordFont/assets/93496667/1c330739-572e-4c10-b54a-84a5e25cc588)

𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎<br /><br />
![Text-Preview-2](https://github.com/MsDysphoria/DiscordFont/assets/93496667/9a67b4c2-446b-4f7b-b271-890db7c07c4f)

𝗦𝗮𝗻𝘀-𝗦𝗲𝗿𝗶𝗳 𝗕𝗼𝗹𝗱<br /><br />
![Text-Preview-3](https://github.com/MsDysphoria/DiscordFont/assets/93496667/d5c73edf-35ba-40e7-9ddf-08d719c2f55d)

- If you don't want every message you send to be affected by these font changes, you can set the `Wrapper Mode` to `Enabled` and wrap the whole message with `++` to change the font.

𝔉𝔯𝔞𝔨𝔱𝔲𝔯 (Wrapper Mode Enabled)<br /><br />
![Text-Wrapper-Preview](https://github.com/MsDysphoria/DiscordFont/assets/93496667/fab017a8-6ca8-4c62-8e74-57b131f96ff1)


## Fonts
Text:
- 𝖲𝖺𝗇𝗌-𝖲𝖾𝗋𝗂𝖿
- 𝗦𝗮𝗻𝘀-𝗦𝗲𝗿𝗶𝗳 𝗕𝗼𝗹𝗱
- 𝘚𝘢𝘯𝘴-𝘚𝘦𝘳𝘪𝘧 𝘐𝘵𝘢𝘭𝘪𝘤
- 𝙎𝙖𝙣𝙨-𝙎𝙚𝙧𝙞𝙛 𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘
- 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎
- 𝐌𝐚𝐭𝐡𝐞𝐦𝐚𝐭𝐢𝐜𝐚𝐥 𝐁𝐨𝐥𝐝
- 𝑀𝑎𝑡ℎ𝑒𝑚𝑎𝑡𝑖𝑐𝑎𝑙 𝐼𝑡𝑎𝑙𝑖𝑐
- 𝑴𝒂𝒕𝒉𝒆𝒎𝒂𝒕𝒊𝒄𝒂𝒍 𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄
- 𝒮𝒸𝓇𝒾𝓅𝓉
- 𝓢𝓬𝓻𝓲𝓹𝓽 𝓑𝓸𝓵𝓭
- 𝔉𝔯𝔞𝔨𝔱𝔲𝔯
- 𝕱𝖗𝖆𝖐𝖙𝖚𝖗 𝕭𝖔𝖑𝖉
- 𝔻𝕠𝕦𝕓𝕝𝕖-𝕊𝕥𝕣𝕦𝕔𝕜

Numbers:
- 𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫
- 𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵
- 𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿
- 𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗
- 𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡
  
## Limitations
- Links are not affected by font changes to preserve their functionality.
- Font letters take 2 characters for each letter. A message including 500 regular characters would be 1000 special characters upon sending. For that reason, messages are capped at 1000 regular characters while using the plugin to comply with Discord's limitations for everyone.
  
## Known Issues
- Font changes don't happen when sending a message with a media file.

## To-Do
- [ ] Improving the logic for the wrapper to make it function like Discord's `** **` & `|| ||`
- [ ] Allowing users to manually set characters and their equivalent in settings, i.e. `- > ▬`
- [ ] Adding more fonts
## Contact
E-mail: msdysphoria.official@gmail.com<br />
Discord: `msdysphoria`<br />
[Discord Group](https://discord.gg/r8VVXuYVTa)
