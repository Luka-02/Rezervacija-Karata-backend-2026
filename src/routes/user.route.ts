import { Router } from "express";
import { defineRequest } from "../utils";
import { UserService } from "../services/user.service";

export const UserRoute = Router()

UserRoute.get('/self', async (req: any, res) => {
    defineRequest(res, async () => {
        return await UserService.getSafeUserById(req.user.id)
    })
})

UserRoute.post('/login', async (req, res) => {
    defineRequest(res, async () => {
        const body = req.body
        return await UserService.login(body.email, body.password)
    })
})

UserRoute.post('/signup', async (req, res) => {
    defineRequest(res, async () => {
        const body = req.body
        return await UserService.signup(body.ime, body.prezime, body.email, body.password)
    })
})

UserRoute.post('/refresh', async (req, res) => {
    defineRequest(res, async () => {
        const token = req.headers.authorization?.replace('Bearer ', '') as string
        return await UserService.refreshToken(token)
    })
})

UserRoute.put('/update', async (req: any, res) => {
    defineRequest(res, async () => {
        const { ime, prezime, email } = req.body
        return await UserService.update(req.user.id, ime, prezime, email)
    })
})

UserRoute.put('/update-password', async (req: any, res) => {
    defineRequest(res, async () => {
        const { currentPassword, newPassword} = req.body
        return await UserService.updatePassword(req.user.id, currentPassword, newPassword)
    })
})