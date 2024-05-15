import express, { Router } from 'express'
import path from 'path'

export interface EnvsOptions {
    port: number
    routes: Router
    pathPublic?: string
}

export class Server {

    private app = express()
    private readonly port: number
    private readonly pathPublic: string
    private readonly routes: Router

    constructor(options: EnvsOptions) {
        const { port, routes, pathPublic='public' } = options

        this.port = port
        this.pathPublic = pathPublic
        this.routes = routes
    }

    async start() {
        // Middleware
        this.app.use(express.json()) // row
        this.app.use(express.urlencoded({ extended: true })) // x-wwww-form-urlencoded

        // Public folder
        this.app.use(express.static(this.pathPublic))

        // Routes
        this.app.use(this.routes)

        this.app.get('*', (request, response) => {
            response.sendFile(path.join(`${__dirname}../../../${this.pathPublic}/index.html`))
        })

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }

}