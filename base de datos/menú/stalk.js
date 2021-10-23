const stalk = (prefix, Dragon, Dragonbot) => {
        return `
「 *${Dragonbot}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${Dragon}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk`
}
exports.stalk = stalk
