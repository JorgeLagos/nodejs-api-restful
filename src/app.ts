// import http from 'http'
// import http2 from 'http2'
// import fs from 'fs'

import { envs } from './config/envs'
import { AppRoutes } from './presentation/routes'
import { Server } from './presentation/server'

// const certificateSSL = { 
//     key: fs.readFileSync('./ssl/server.key'), 
//     cert: fs.readFileSync('./ssl/server.crt') 
// }

// const server = http2.createSecureServer(certificateSSL, (request, response) => {
//     console.log(request.url)
    
//     response.write(`Hola mundo`)
//     response.end()
// })

// server.listen(3000, () => {
//     console.log(`Server running on port 3000`)
// })

(async () => { main() })()

function main() {
    const server = new Server({ 
        port: envs.PORT, 
        routes: AppRoutes.routes,
        pathPublic: envs.PATH_PUBLIC 
    })
    server.start()
}