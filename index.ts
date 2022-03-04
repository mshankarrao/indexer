import getNumberOfTransferedTokens from "./client"


const erc20TransferTopic = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'

async function parseB2FData(hash: string) {
    try {
        const logs  = await getNumberOfTransferedTokens(hash)
        console.log("checking the logs from the transactions",logs)
        const hrc20AddressLogs = await Promise.all(
            (logs).filter((l) => l.topics.includes(erc20TransferTopic))
        )
        const addressEvents = await hrc20AddressLogs.map((l) =>
                l.topics[2]   
            ).filter((e) => e)
        addressEvents.map((e: any, index) => {
            const terraAddress = e
            console.log(`B2F Address: ${terraAddress}`)
        })
    } catch(error) {
        console.log(error)
    }
}

parseB2FData("0xaaf9dd8979d1f50793d8dd40d5c66caebab79fab6ca3ee695af54c023af56584");
