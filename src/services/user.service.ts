import type { Request, Response } from "express"
import { AppDataSource } from "../db"
import { User } from "../entities/User"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { configDotenv } from "dotenv"

configDotenv()
const repo = AppDataSource.getRepository(User)
const JWT_KEY = String(process.env.JWT_KEY)

export class UserService {

    static async getSafeUserById(id: number) {
        return await repo.findOneOrFail({
            select: {
                userId: true,
                ime: true,
                prezime: true,
                email: true
            },
            where: {
                userId: id
            }
        })
    }

    static async getUserByEmail(email: string) {
        return await repo.findOneOrFail({
            where: {
                email: email
            }
        })
    }

    static async login(email: string, password: string) {
        const user = await this.getUserByEmail(email)
        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                id: user.userId,
                name: user.email
            }

            return {
                access: jwt.sign(payload, JWT_KEY, { expiresIn: '30m' }),
                refresh: jwt.sign(payload, JWT_KEY, { expiresIn: '8d' })
            }
        }

        throw new Error('INCORECT_EMAIL_OR_PASSWORD')
    }

    static async signup(ime: string, prezime: string, email: string, password: string) {
        const data = await repo.findOne({
            select: {
                userId: true
            },
            where: {
                email: email
            }
        })

        if (data != undefined)
            throw new Error('User already exists!')

        const passwordHash = await bcrypt.hash(password, 12)
        await repo.save({
            ime: ime,
            prezime: prezime,
            email: email,
            password: passwordHash,
            createdAt: new Date()
        })
    }

    static async refreshToken(refresh: string) {
        try {
            const decoded: any = jwt.verify(refresh, JWT_KEY)
            const payload = {
                id: decoded.id,
                name: decoded.name
            }

            return {
                access: jwt.sign(payload, JWT_KEY, { expiresIn: '30m' }),
                refresh: refresh
            }
        } catch (e) {
            throw new Error('REFRESH_FAILED')
        }
    }

    static async authenticateToken(req: Request, res: Response, next: Function) {
        const publicPaths = [
            '/api/user/login',
            '/api/user/signup',
            '/api/user/refresh',
            '/api/predstava'
        ]

        for (let publicPath of publicPaths) {
            if (req.path.startsWith(publicPath)) {
                next()
                return
            }
        }

        const auth = req.headers.authorization
        const token = auth && auth.split(' ')[1]
        if (token == null) {
            return res.status(401).json({
                message: 'NO_TOKEN_FOUND',
                timestamp: new Date()
            })
        }

        try {
            //@ts-ignore
            req.user = jwt.verify(token, JWT_KEY)
            next()
        } catch (e) {
            return res.status(403).json({
                message: 'INVALID_TOKEN',
                timestamp: new Date()
            })
        }
    }

    static async update(userId: number, ime: string, prezime: string, email: string) {
        const user = await repo.findOneByOrFail({ userId: userId })

        if (user.email !== email) {
            const existingUser = await repo.findOne({ where: { email: email } });
            if (existingUser) {
                throw new Error('EMAIL_ALREADY_EXISTS');
            }
        }

        user.ime = ime
        user.prezime = prezime
        user.email = email
        user.updatedAt = new Date()

        return await repo.save(user)
    }

    static async updatePassword(userId: number, currentPassword: string, newPassword: string) {
        const user = await repo.findOneByOrFail({ userId: userId })

        if (!(await bcrypt.compare(currentPassword, user.password))) {
            throw new Error('INCORRECT_OLD_PASSWORD');
        }

        const passwordHash = await bcrypt.hash(newPassword, 12)

        user.password = passwordHash
        user.updatedAt = new Date()

        return await repo.save(user)
    }
}