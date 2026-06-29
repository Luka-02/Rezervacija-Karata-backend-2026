import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { AppDataSource } from './db'
import PozoristeRoute from './routes/pozoriste.route'
import PredstavaRoute from './routes/predstava.route'
import { UserRoute } from './routes/user.route'
import { UserService } from './services/user.service'
import { RezervacijaRoute } from './routes/rezervacija.route'

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.use(UserService.authenticateToken)
app.use("/api/pozoriste", PozoristeRoute)
app.use("/api/predstava", PredstavaRoute)
app.use('/api/user', UserRoute)
app.use("/api/rezervacija", RezervacijaRoute)


AppDataSource.initialize()
    .then(() => {
        console.log('Connected to database')
        const port = 3000
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`)
        })
    })