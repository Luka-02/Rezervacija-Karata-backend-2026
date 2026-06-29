import express from "express"
import { PredstavaService } from "../services/predstava.service"
import { defineRequest, dataExists } from "../utils"

const PredstavaRoute = express.Router()

PredstavaRoute.get("/", async (req, res) => {
    defineRequest(res, async () => {
        const predstave = await PredstavaService.getPredstave()
        return dataExists(predstave)
    })
})

PredstavaRoute.get("/:id", async (req, res) => {
    defineRequest(res, async () => {
        const id = parseInt(req.params.id)
        const predstava = await PredstavaService.getPredstavaById(id)
        return dataExists(predstava)
    })
})

export default PredstavaRoute