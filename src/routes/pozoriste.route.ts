import express from "express"
import { PozoristeService } from "../services/pozoriste.service"
import { defineRequest, dataExists } from "../utils"

const PozoristeRoute = express.Router()

PozoristeRoute.get("/", async (req, res) => {
    defineRequest(res, async () => {
        const pozorista = await PozoristeService.getPozorista()
        return dataExists(pozorista)
    })
})

PozoristeRoute.get("/:id", async (req, res) => {
    defineRequest(res, async () => {
        const id = parseInt(req.params.id)
        const pozoriste = await PozoristeService.getPozoristeById(id)
        return dataExists(pozoriste)
    })
})

export default PozoristeRoute