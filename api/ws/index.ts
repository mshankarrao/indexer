import { io } from "socket.io-client"

const REACT_APP_PROD_ADDRESS = "https://ws.explorer-v2-api.hmny.io";

const socket = io(REACT_APP_PROD_ADDRESS as string, {
    transports: ["websocket"],
});

socket.connect()
export const transport = <T = any>(method: string, params: any[]) => {
    return new Promise<T>((resolve, reject) => {
        socket.emit(method, params, (res: any) => {
            try {
                const payload = JSON.parse(res.payload)
                if (res.event === "Response") {
                    resolve(payload)
                } else {
                    reject(payload)
                }
            } catch (err) {
                reject(null)
            }
        })
    })
}