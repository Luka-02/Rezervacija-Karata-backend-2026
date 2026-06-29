import { Router } from "express"
import { RezervacijaService } from "../services/rezervacija.service"
import { defineRequest } from "../utils"

export const RezervacijaRoute = Router()

RezervacijaRoute.get('/my', async (req: any, res) => {
    defineRequest(res, async () => {
        return await RezervacijaService.getAllByUserId(req.user.id)
    })
})

RezervacijaRoute.get('/my/:id', async (req: any, res) => {
    defineRequest(res, async () => {
        return await RezervacijaService.getByRezervacijaIdByUserId(parseInt(req.params.id), req.user.id)
    })
})

RezervacijaRoute.post('/create', async (req: any, res) => {
    defineRequest(res, async () => {
        const { predstavaId, brojKarata } = req.body
        return await RezervacijaService.create(req.user.id, predstavaId, brojKarata)
    })
})

RezervacijaRoute.put('/update/:id', async (req: any, res) => {
    defineRequest(res, async () => {
        const { brojKarata } = req.body
        return await RezervacijaService.update(parseInt(req.params.id), req.user.id, brojKarata)
    })
})

RezervacijaRoute.put('/:id/pay', async (req: any, res) => {
    defineRequest(res, async () => {
        return await RezervacijaService.pay(parseInt(req.params.id), req.user.id);
    });
});

RezervacijaRoute.delete('/delete/:id', async (req: any, res) => {
    defineRequest(res, async () => {
        return await RezervacijaService.delete(parseInt(req.params.id), req.user.id)
    })
})