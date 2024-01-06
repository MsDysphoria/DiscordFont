/**
 * @name DiscordFont
 * @description Different fonts to be used in Discord chat.
 * @version 1.0.0.0
 * @author Ms. Dysphoria
 * @authorId 830817860925652992
 * @invite r8VVXuYVTa
 * @website https://github.com/MsDysphoria/DiscordFont/tree/main
 * @source https://github.com/MsDysphoria/DiscordFont/blob/main/DiscordFont.plugin.js
 */

const config = {
    info: {
        name: "Discord Font",
        authors: [
            {
                name: "Ms. Dysphoria",
                discord_id: "830817860925652992",
                github_username: "MsDysphoria",
            }
        ],
        version: "1.0.0.0",
        description: "Different fonts to be used in Discord chat.",
        github: "https://github.com/MsDysphoria/DiscordFont/tree/main",
        github_raw: "https://github.com/MsDysphoria/DiscordFont/blob/main/DiscordFont.plugin.js"
    },
    main: "index.js",
    defaultConfig: [
        {
            type: "dropdown",
            id: "fontstyle",
            name: "Font Style",
            value: 0,
            options: [
                {
                    label: "Default",
                    value: 0
                },
                {
                    label: "𝖲𝖺𝗇𝗌-𝖲𝖾𝗋𝗂𝖿",
                    value: 1
                },
                {
                    label: "𝗦𝗮𝗻𝘀-𝗦𝗲𝗿𝗶𝗳 𝗕𝗼𝗹𝗱",
                    value: 2
                },
                {
                    label: "𝘚𝘢𝘯𝘴-𝘚𝘦𝘳𝘪𝘧 𝘐𝘵𝘢𝘭𝘪𝘤",
                    value: 3
                },
                {
                    label: "𝙎𝙖𝙣𝙨-𝙎𝙚𝙧𝙞𝙛 𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘",
                    value: 4
                },
                {
                    label: "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎",
                    value: 5
                },
                {
                    label: "𝐌𝐚𝐭𝐡𝐞𝐦𝐚𝐭𝐢𝐜𝐚𝐥 𝐁𝐨𝐥𝐝",
                    value: 6
                },
                {
                    label: "𝑀𝑎𝑡ℎ𝑒𝑚𝑎𝑡𝑖𝑐𝑎𝑙 𝐼𝑡𝑎𝑙𝑖𝑐",
                    value: 7
                },
                {
                    label: "𝑴𝒂𝒕𝒉𝒆𝒎𝒂𝒕𝒊𝒄𝒂𝒍 𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄",
                    value: 8
                },
                {
                    label: "𝒮𝒸𝓇𝒾𝓅𝓉",
                    value: 9
                },
                {
                    label: "𝓢𝓬𝓻𝓲𝓹𝓽 𝓑𝓸𝓵𝓭",
                    value: 10
                },
                {
                    label: "𝔉𝔯𝔞𝔨𝔱𝔲𝔯",
                    value: 11
                },
                {
                    label: "𝕱𝖗𝖆𝖐𝖙𝖚𝖗 𝕭𝖔𝖑𝖉",
                    value: 12
                },
                {
                    label: "𝔻𝕠𝕦𝕓𝕝𝕖-𝕊𝕥𝕣𝕦𝕔𝕜",
                    value: 13
                },
            ]
        },
        {
            type: "dropdown",
            id: "numberstyle",
            name: "Number Style",
            value: 0,
            options: [
                {
                    label: "Default",
                    value: 0
                },
                {
                    label: "𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫𝟢",
                    value: 1
                },
                {
                    label: "𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿𝟶",
                    value: 2
                },
                {
                    label: "𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗𝟎",
                    value: 3
                },
                {
                    label: "𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟬",
                    value: 4
                },
                {
                    label: "𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡𝟘",
                    value: 5
                }
            ]
        },
        {
            type: "dropdown",
            id: "spacewidth",
            name: "Space Width",
            value: 0,
            options: [
                {
                    label: "Default",
                    value: 0
                },
                {
                    label: "Lorem Ipsum",
                    value: 1
                },
                {
                    label: "Lorem Ipsum",
                    value: 2
                },
                {
                    label: "Lorem Ipsum",
                    value: 3
                },
                {
                    label: "Lorem Ipsum",
                    value: 4
                },
                {
                    label: "Lorem　Ipsum",
                    value: 5
                }
            ]
        },
        {
            type: "dropdown",
            id: "wrappermode",
            name: "Wrapper Mode",
            note: "Enables/disables the need for the whole message to be wrapped. (i.e. ++text++)",
            value: 0,
            options: [
                {
                    label: "Disabled",
                    value: 0
                },
                {
                    label: "Enabled",
                    value: 1
                }
            ]
        },
    ]
};

if (!global.ZeresPluginLibrary) {
    BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.name ?? config.info.name} is missing. Please click Download Now to install it.`, {
        confirmText: "Download Now",
        cancelText: "Cancel",
        onConfirm: () => {
            require("request").get("https://betterdiscord.app/gh-redirect?id=9", async (err, resp, body) => {
                if (err) return require("electron").shell.openExternal("https://betterdiscord.app/Download?id=9");
                if (resp.statusCode === 302) {
                    require("request").get(resp.headers.location, async (error, response, content) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.app/Download?id=9");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), content, r));
                    });
                }
                else {
                    await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                }
            });
        }
    });
}

module.exports = !global.ZeresPluginLibrary ? Dummy : (([Plugin, Api]) => {
    const plugin = (Plugin, Api) => {
        const { Patcher } = window.BdApi;
        const { DiscordModules } = Api;

        // Defaults Fonts & Letters to replace
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';

        // Symbols for placeholders for links to prevent conflict with font changes
        const symbols = [
            '!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '=', '~', '|',
            '_', '.', ',', ';', '?', '/',
            '(', ')', '[', ']', '{', '}', '<', '>', ':', '"', "'", '`'
        ];

        // Letter Fonts
        // 𝖲𝖺𝗇𝗌-𝖲𝖾𝗋𝗂𝖿
        const uppercaseLetters1 = [
            '𝖠', '𝖡', '𝖢', '𝖣', '𝖤', '𝖥', '𝖦', '𝖧', '𝖨', '𝖩', '𝖪', '𝖫', '𝖬', '𝖭', '𝖮', '𝖯',
            '𝖰', '𝖱', '𝖲', '𝖳', '𝖴', '𝖵', '𝖶', '𝖷', '𝖸', '𝖹'
        ];
        const lowercaseLetters1 = [
            '𝖺', '𝖻', '𝖼', '𝖽', '𝖾', '𝖿', '𝗀', '𝗁', '𝗂', '𝗃', '𝗄', '𝗅', '𝗆', '𝗇', '𝗈', '𝗉',
            '𝗊', '𝗋', '𝗌', '𝗍', '𝗎', '𝗏', '𝗐', '𝗑', '𝗒', '𝗓'
        ];

        // 𝗦𝗮𝗻𝘀-𝗦𝗲𝗿𝗶𝗳 𝗕𝗼𝗹𝗱
        const uppercaseLetters2 = [
            '𝗔', '𝗕', '𝗖', '𝗗', '𝗘', '𝗙', '𝗚', '𝗛', '𝗜', '𝗝', '𝗞', '𝗟', '𝗠', '𝗡', '𝗢', '𝗣',
            '𝗤', '𝗥', '𝗦', '𝗧', '𝗨', '𝗩', '𝗪', '𝗫', '𝗬', '𝗭'
        ];
        const lowercaseLetters2 = [
            '𝗮', '𝗯', '𝗰', '𝗱', '𝗲', '𝗳', '𝗴', '𝗵', '𝗶', '𝗷', '𝗸', '𝗹', '𝗺', '𝗻', '𝗼', '𝗽',
            '𝗾', '𝗿', '𝘀', '𝘁', '𝘂', '𝘃', '𝘄', '𝘅', '𝘆', '𝘇'
        ];

        // 𝘚𝘢𝘯𝘴-𝘚𝘦𝘳𝘪𝘧 𝘐𝘵𝘢𝘭𝘪𝘤
        const uppercaseLetters3 = [
            '𝘈', '𝘉', '𝘊', '𝘋', '𝘌', '𝘍', '𝘎', '𝘏', '𝘐', '𝘑', '𝘒', '𝘓', '𝘔', '𝘕', '𝘖', '𝘗',
            '𝘘', '𝘙', '𝘚', '𝘛', '𝘜', '𝘝', '𝘞', '𝘟', '𝘠', '𝘡'
        ];
        const lowercaseLetters3 = [
            '𝘢', '𝘣', '𝘤', '𝘥', '𝘦', '𝘧', '𝘨', '𝘩', '𝘪', '𝘫', '𝘬', '𝘭', '𝘮', '𝘯', '𝘰', '𝘱',
            '𝘲', '𝘳', '𝘴', '𝘵', '𝘶', '𝘷', '𝘸', '𝘹', '𝘺', '𝘻'
        ];

        // 𝙎𝙖𝙣𝙨-𝙎𝙚𝙧𝙞𝙛 𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘
        const uppercaseLetters4 = [
            '𝘼', '𝘽', '𝘾', '𝘿', '𝙀', '𝙁', '𝙂', '𝙃', '𝙄', '𝙅', '𝙆', '𝙇', '𝙈', '𝙉', '𝙊', '𝙋',
            '𝙌', '𝙍', '𝙎', '𝙏', '𝙐', '𝙑', '𝙒', '𝙓', '𝙔', '𝙕'
        ];
        const lowercaseLetters4 = [
            '𝙖', '𝙗', '𝙘', '𝙙', '𝙚', '𝙛', '𝙜', '𝙝', '𝙞', '𝙟', '𝙠', '𝙡', '𝙢', '𝙣', '𝙤', '𝙥',
            '𝙦', '𝙧', '𝙨', '𝙩', '𝙪', '𝙫', '𝙬', '𝙭', '𝙮', '𝙯'
        ];

        // 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎
        const uppercaseLetters5 = [
            '𝙰', '𝙱', '𝙲', '𝙳', '𝙴', '𝙵', '𝙶', '𝙷', '𝙸', '𝙹', '𝙺', '𝙻', '𝙼', '𝙽',
            '𝙾', '𝙿', '𝚀', '𝚁', '𝚂', '𝚃', '𝚄', '𝚅', '𝚆', '𝚇', '𝚈', '𝚉'
        ];
        const lowercaseLetters5 = [
            '𝚊', '𝚋', '𝚌', '𝚍', '𝚎', '𝚏', '𝚐', '𝚑', '𝚒', '𝚓', '𝚔', '𝚕', '𝚖', '𝚗',
            '𝚘', '𝚙', '𝚚', '𝚛', '𝚜', '𝚝', '𝚞', '𝚟', '𝚠', '𝚡', '𝚢', '𝚣'
        ];

        // 𝐌𝐚𝐭𝐡𝐞𝐦𝐚𝐭𝐢𝐜𝐚𝐥 𝐁𝐨𝐥𝐝
        const uppercaseLetters6 = [
            '𝐀', '𝐁', '𝐂', '𝐃', '𝐄', '𝐅', '𝐆', '𝐇', '𝐈', '𝐉', '𝐊', '𝐋', '𝐌', '𝐍', '𝐎', '𝐏',
            '𝐐', '𝐑', '𝐒', '𝐓', '𝐔', '𝐕', '𝐖', '𝐗', '𝐘', '𝐙'
        ];
        const lowercaseLetters6 = [
            '𝐚', '𝐛', '𝐜', '𝐝', '𝐞', '𝐟', '𝐠', '𝐡', '𝐢', '𝐣', '𝐤', '𝐥', '𝐦', '𝐧', '𝐨', '𝐩',
            '𝐪', '𝐫', '𝐬', '𝐭', '𝐮', '𝐯', '𝐰', '𝐱', '𝐲', '𝐳'
        ];

        // 𝑀𝑎𝑡ℎ𝑒𝑚𝑎𝑡𝑖𝑐𝑎𝑙 𝐼𝑡𝑎𝑙𝑖𝑐
        const uppercaseLetters7 = [
            '𝐴', '𝐵', '𝐶', '𝐷', '𝐸', '𝐹', '𝐺', '𝐻', '𝐼', '𝐽', '𝐾', '𝐿', '𝑀', '𝑁', '𝑂', '𝑃',
            '𝑄', '𝑅', '𝑆', '𝑇', '𝑈', '𝑉', '𝑊', '𝑋', '𝑌', '𝑍'
        ];
        const lowercaseLetters7 = [
            '𝑎', '𝑏', '𝑐', '𝑑', '𝑒', '𝑓', '𝑔', '𝑗', '𝑘', '𝑙', '𝑚', '𝑛', '𝑜', '𝑝', '𝑞', '𝑟',
            '𝑠', '𝑡', '𝑢', '𝑣', '𝑤', '𝑥', '𝑦', '𝑧'
        ];

        // 𝑴𝒂𝒕𝒉𝒆𝒎𝒂𝒕𝒊𝒄𝒂𝒍 𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄
        const uppercaseLetters8 = [
            '𝑨', '𝑩', '𝑪', '𝑫', '𝑬', '𝑭', '𝑮', '𝑯', '𝑰', '𝑱', '𝑲', '𝑳', '𝑴', '𝑵', '𝑶', '𝑷', '𝑸',
            '𝑹', '𝑺', '𝑻', '𝑼', '𝑽', '𝑾', '𝑿', '𝒀', '𝒁'
        ];
        const lowercaseLetters8 = [
            '𝒂', '𝒃', '𝒄', '𝒅', '𝒆', '𝒇', '𝒈', '𝒉', '𝒊', '𝒋', '𝒌', '𝒍', '𝒎', '𝒏', '𝒐', '𝒑', '𝒒',
            '𝒓', '𝒔', '𝒕', '𝒖', '𝒗', '𝒘', '𝒙', '𝒚', '𝒛'
        ];

        // 𝒮𝒸𝓇𝒾𝓅𝓉
        const uppercaseLetters9 = [
            '𝒜', 'ℬ', '𝒞', '𝒟', 'ℰ', 'ℱ', '𝒢', 'ℋ', 'ℐ', '𝒥', '𝒦', 'ℒ', 'ℳ', '𝒩', '𝒪', '𝒫', '𝒬',
            'ℛ', '𝒮', '𝒯', '𝒰', '𝒱', '𝒲', '𝒳', '𝒴', '𝒵'
        ];
        const lowercaseLetters9 = [
            '𝒶', '𝒷', '𝒸', '𝒹', 'ℯ', '𝒻', 'ℊ', '𝒽', '𝒾', '𝒿', '𝓀', '𝓁', '𝓂', '𝓃', 'ℴ', '𝓅', '𝓆',
            '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏'
        ];

        // 𝓢𝓬𝓻𝓲𝓹𝓽 𝓑𝓸𝓵𝓭
        const uppercaseLetters10 = [
            '𝓐', '𝓑', '𝓒', '𝓓', '𝓔', '𝓕', '𝓖', '𝓗', '𝓘', '𝓙', '𝓚', '𝓛', '𝓜', '𝓝', '𝓞', '𝓟',
            '𝓠', '𝓡', '𝓢', '𝓣', '𝓤', '𝓥', '𝓦', '𝓧', '𝓨', '𝓩'
        ];
        const lowercaseLetters10 = [
            '𝓪', '𝓫', '𝓬', '𝓭', '𝓮', '𝓯', '𝓰', '𝓱', '𝓲', '𝓳', '𝓴', '𝓵', '𝓶', '𝓷', '𝓸', '𝓹',
            '𝓺', '𝓻', '𝓼', '𝓽', '𝓾', '𝓿', '𝔀', '𝔁', '𝔂', '𝔃'
        ];

        // 𝔉𝔯𝔞𝔨𝔱𝔲𝔯
        const uppercaseLetters11 = [
            '𝔄', '𝔅', 'ℭ', '𝔇', '𝔈', '𝔉', '𝔊', 'ℌ', 'ℑ', '𝔍', '𝔎', '𝔏', '𝔐', '𝔑', '𝔒', '𝔓', '𝔔', 'ℜ', '𝔖', '𝔗', '𝔘', '𝔙', '𝔚', '𝔛', '𝔜', 'ℨ'
        ];
        const lowercaseLetters11 = [
            '𝔞', '𝔟', '𝔠', '𝔡', '𝔢', '𝔣', '𝔤', '𝔥', '𝔦', '𝔧', '𝔨', '𝔩', '𝔪', '𝔫', '𝔬', '𝔭', '𝔮', '𝔯', '𝔰', '𝔱', '𝔲', '𝔳', '𝔴', '𝔵', '𝔶', '𝔷'
        ];

        // 𝕱𝖗𝖆𝖐𝖙𝖚𝖗 𝕭𝖔𝖑𝖉
        const uppercaseLetters12 = [
            '𝕬', '𝕭', '𝕮', '𝕯', '𝕰', '𝕱', '𝕲', '𝕳', '𝕴', '𝕵', '𝕶', '𝕷', '𝕸', '𝕹', '𝕺', '𝕻', '𝕼', '𝕽', '𝕾', '𝕿', '𝖀', '𝖁', '𝖂', '𝖃', '𝖄', '𝖅'
        ];
        const lowercaseLetters12 = [
            '𝖆', '𝖇', '𝖈', '𝖉', '𝖊', '𝖋', '𝖌', '𝖍', '𝖎', '𝖏', '𝖐', '𝖑', '𝖒', '𝖓', '𝖔', '𝖕', '𝖖', '𝖗', '𝖘', '𝖙', '𝖚', '𝖛', '𝖜', '𝖝', '𝖞', '𝖟'
        ];

        // 𝔻𝕠𝕦𝕓𝕝𝕖-𝕊𝕥𝕣𝕦𝕔𝕜
        const uppercaseLetters13 = [
            '𝔸', '𝔹', 'ℂ', '𝔻', '𝔼', '𝔽', '𝔾', 'ℍ', '𝕀', '𝕁', '𝕂', '𝕃', '𝕄', 'ℕ', '𝕆', 'ℙ', 'ℚ', 'ℝ', '𝕊', '𝕋', '𝕌', '𝕍', '𝕎', '𝕏', '𝕐', 'ℤ'
        ];
        const lowercaseLetters13 = [
            '𝕒', '𝕓', '𝕔', '𝕕', '𝕖', '𝕗', '𝕘', '𝕙', '𝕚', '𝕛', '𝕜', '𝕝', '𝕞', '𝕟', '𝕠', '𝕡', '𝕢', '𝕣', '𝕤', '𝕥', '𝕦', '𝕧', '𝕨', '𝕩', '𝕪', '𝕫'
        ];

        // Number Fonts
        const numbers1 = ['𝟢', '𝟣', '𝟤', '𝟥', '𝟦', '𝟧', '𝟨', '𝟩', '𝟪', '𝟫'];
        const numbers2 = ['𝟬', '𝟭', '𝟮', '𝟯', '𝟰', '𝟱', '𝟲', '𝟳', '𝟴', '𝟵'];
        const numbers3 = ['𝟶', '𝟷', '𝟸', '𝟹', '𝟺', '𝟻', '𝟼', '𝟽', '𝟾', '𝟿'];
        const numbers4 = ['𝟎', '𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟕', '𝟖', '𝟗'];
        const numbers5 = ['𝟘', '𝟙', '𝟚', '𝟛', '𝟜', '𝟝', '𝟞', '𝟟', '𝟠', '𝟡'];

        return class DiscordFont extends Plugin {
            constructor() {
                super();

            }

            async onStart() {
                Patcher.before(this.name, DiscordModules.MessageActions, "sendMessage", (_, [, msg]) => {
                    msg.content = this.applyFont(msg.content);
                });
            }

            onStop() {
                Patcher.unpatchAll(this.name);
            }


            applyFont(text) {

                // Wrapper Implementation
                const wrapperModeState = this.settings.wrappermode;
                if (wrapperModeState === 1) {
                    if (!text.startsWith("++") || !text.endsWith("++"))
                        return text;
                    else if (text.startsWith("++") && text.endsWith("++")) {
                        const modifiedText = text.substring(2, text.length - 2);
                        text = modifiedText;
                    }
                }


                const linkRegex = /https?:\/\/\S+/g;
                const linkMatches = text.match(linkRegex);

                // Placeholders for links
                if (linkMatches) {

                    for (let i = 0; i < linkMatches.length; i++) {
                        const symbolIndex = i % symbols.length;
                        const symbol = symbols[symbolIndex];
                        const placeholder = ` ${symbol} `;
                        text = text.replace(linkMatches[i], placeholder);
                    }
                }

                // Retrieve settings
                let changedUppercaseLetters
                let changedLowercaseLetters
                const fontstyleValue = this.settings.fontstyle;

                let changedNumbers
                const numberstyleValue = this.settings.numberstyle;

                // Font Settings
                if (fontstyleValue === 1) {
                    changedUppercaseLetters = uppercaseLetters1
                    changedLowercaseLetters = lowercaseLetters1
                }
                else if (fontstyleValue === 2) {
                    changedUppercaseLetters = uppercaseLetters2
                    changedLowercaseLetters = lowercaseLetters2
                }
                else if (fontstyleValue === 3) {
                    changedUppercaseLetters = uppercaseLetters3
                    changedLowercaseLetters = lowercaseLetters3
                }
                else if (fontstyleValue === 4) {
                    changedUppercaseLetters = uppercaseLetters4
                    changedLowercaseLetters = lowercaseLetters4
                }
                else if (fontstyleValue === 5) {
                    changedUppercaseLetters = uppercaseLetters5
                    changedLowercaseLetters = lowercaseLetters5
                }
                else if (fontstyleValue === 6) {
                    changedUppercaseLetters = uppercaseLetters6
                    changedLowercaseLetters = lowercaseLetters6
                }
                else if (fontstyleValue === 7) {
                    changedUppercaseLetters = uppercaseLetters7
                    changedLowercaseLetters = lowercaseLetters7
                }
                else if (fontstyleValue === 8) {
                    changedUppercaseLetters = uppercaseLetters8
                    changedLowercaseLetters = lowercaseLetters8
                }
                else if (fontstyleValue === 9) {
                    changedUppercaseLetters = uppercaseLetters9
                    changedLowercaseLetters = lowercaseLetters9
                }
                else if (fontstyleValue === 10) {
                    changedUppercaseLetters = uppercaseLetters10
                    changedLowercaseLetters = lowercaseLetters10
                }
                else if (fontstyleValue === 11) {
                    changedUppercaseLetters = uppercaseLetters11
                    changedLowercaseLetters = lowercaseLetters11
                }
                else if (fontstyleValue === 12) {
                    changedUppercaseLetters = uppercaseLetters12
                    changedLowercaseLetters = lowercaseLetters12
                }
                else if (fontstyleValue === 13) {
                    changedUppercaseLetters = uppercaseLetters13
                    changedLowercaseLetters = lowercaseLetters13
                }
                // Number Settings
                if (numberstyleValue === 1) {
                    changedNumbers = numbers1
                }
                else if (numberstyleValue === 2) {
                    changedNumbers = numbers2
                }
                else if (numberstyleValue === 3) {
                    changedNumbers = numbers3
                }
                else if (numberstyleValue === 4) {
                    changedNumbers = numbers4
                }
                else if (numberstyleValue === 5) {
                    changedNumbers = numbers5
                }

                // Space Settings

                let changedSpaceWidth
                const spaceWidthValue = this.settings.spacewidth;
                if (spaceWidthValue === 1) {
                    changedSpaceWidth = " ";
                }
                else if (spaceWidthValue === 2) {
                    changedSpaceWidth = " ";
                }
                else if (spaceWidthValue === 3) {
                    changedSpaceWidth = " ";
                }
                else if (spaceWidthValue === 4) {
                    changedSpaceWidth = " ";
                }
                else if (spaceWidthValue === 5) {
                    changedSpaceWidth = "　";
                }

                // Replace spaces
                const spaceRegex = /\s/g;
                text = text.replace(spaceRegex, changedSpaceWidth);

                // Replace uppercase letters
                for (let i = 0; i < uppercaseLetters.length; i++) {
                    const uppercaseRegex = new RegExp(uppercaseLetters[i], 'g');
                    text = text.replace(uppercaseRegex, changedUppercaseLetters[i]);
                }

                // Replace lowercase letters
                for (let i = 0; i < lowercaseLetters.length; i++) {
                    const lowercaseRegex = new RegExp(lowercaseLetters[i], 'g');
                    text = text.replace(lowercaseRegex, changedLowercaseLetters[i]);
                }

                // Replace numbers
                for (let i = 0; i < numbers.length; i++) {
                    const numbersRegex = new RegExp(numbers[i], 'g');
                    text = text.replace(numbersRegex, changedNumbers[i]);
                }

                // Apply character limitation for safety
                if (text.length > 2000) {
                    text = text.substring(0, 2000);
                }

                // Restore links from placeholders
                if (linkMatches) {

                    for (let i = 0; i < linkMatches.length; i++) {
                        const symbolIndex = i % symbols.length;
                        const symbol = symbols[symbolIndex];
                        const placeholder = ` ${symbol} `;
                        text = text.replace(placeholder, linkMatches[i]);
                    }
                }
                return text;
            }



            getSettingsPanel() {
                const panel = this.buildSettingsPanel();
                panel.addListener(this.updateSettings.bind(this));
                return panel.getElement();
            }

            updateSettings(group, id, value) {

            }

        };
    };
    return plugin(Plugin, Api);
})(global.ZeresPluginLibrary.buildPlugin(config));
/*@end@*/
