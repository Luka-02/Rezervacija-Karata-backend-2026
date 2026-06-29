import { AppDataSource } from "../db"
import { Rezervacija } from "../entities/Rezervacija"
import { Equal, IsNull } from "typeorm"

const repo = AppDataSource.getRepository(Rezervacija)

export class RezervacijaService {

    static async getAllByUserId(userId: number) {
        return await repo.find({
            where: { 
                userId: Equal(userId), 
                deletedAt: IsNull() 
            },
            relations: { 
                predstava: {
                    pozoriste: true
                } 
            }
        })
    }

    static async getByRezervacijaIdByUserId(rezervacijaId: number, userId: number) {
        return await repo.findOneOrFail({
            where: { 
                rezervacijaId: Equal(rezervacijaId),
                userId: Equal(userId), 
                deletedAt: IsNull() 
            },
            relations: { 
                predstava: {
                    pozoriste: true
                } 
            }
        })
    }

    static async create(userId: number, predstavaId: number, brojKarata: number) {
        const novaRezervacija = repo.create({
            userId: userId,
            predstavaId: predstavaId,
            brojKarata: brojKarata,
            createdAt: new Date()
        })
        return await repo.save(novaRezervacija)
    }

    static async update(rezervacijaId: number, userId: number, brojKarata: number) {
        const rezervacija = await repo.findOneOrFail({
            where: { 
                rezervacijaId: Equal(rezervacijaId), 
                userId: Equal(userId), 
                deletedAt: IsNull() 
            }
        })

        rezervacija.brojKarata = brojKarata
        rezervacija.updatedAt = new Date()

        return await repo.save(rezervacija)
    }

    static async pay(rezervacijaId: number, userId: number) {
        const rezervacija = await repo.findOneOrFail({
            where: { 
                rezervacijaId: Equal(rezervacijaId), 
                userId: Equal(userId),
                deletedAt: IsNull()
            }
        });

        rezervacija.paidAt = new Date()

        return await repo.save(rezervacija)
    }

    static async delete(rezervacijaId: number, userId: number) {
        const rezervacija = await repo.findOneOrFail({
            where: { 
                rezervacijaId: Equal(rezervacijaId), 
                userId: Equal(userId) 
            }
        })
        rezervacija.deletedAt = new Date()
        return await repo.save(rezervacija)
    }
}