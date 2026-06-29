import { Repository } from "typeorm"
import { AppDataSource } from "../db";
import { Predstava } from "../entities/Predstava"

export class PredstavaService {
    private static repository: Repository<Predstava> = AppDataSource.getRepository(Predstava);

    static async getPredstave(): Promise<Predstava[]> {
        return await this.repository.find({
            relationLoadStrategy: "join",
            relations: {
                pozoriste: true
            }
        })
    }

    static async getPredstavaById(id: number): Promise<Predstava> {
        const predstava = await this.repository.findOne({
            where: { predstavaId: id },
            relations: {
                pozoriste: true
            }
        })

        if (!predstava) {
            const error: any = new Error("Predstava nije pronadjeno.");
            error.status = 404
            throw error
        }

        return predstava
    }
}