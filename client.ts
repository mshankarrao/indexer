import { transport } from "./api/ws"
import { Log } from "./types"


export default function getNumberOfTransferedTokens(txHash: string) {
    try {
        return transport("getLogsByField", [
            0,
            "transaction_hash",
            txHash,
          ]) as Promise<Log[]>
    } catch(error) {
        console.log(error)
    }
  }