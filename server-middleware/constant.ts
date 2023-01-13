
const BOT_TOKEN = process.env.BOT_TOKEN as string
const BOT_CLIENT_ID = process.env.BOT_CLIETN_ID as string

export function getBOTTOKEN() {
    return BOT_TOKEN
}

export function getBOTCLIENTID() {
    return BOT_CLIENT_ID
}