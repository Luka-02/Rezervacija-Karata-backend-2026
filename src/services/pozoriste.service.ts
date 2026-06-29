import { Repository } from "typeorm"
import { AppDataSource } from "../db";
import { Pozoriste } from "../entities/Pozoriste"

export class PozoristeService {
    
    private static repository: Repository<Pozoriste> = AppDataSource.getRepository(Pozoriste);

    static async getPozorista(): Promise<Pozoriste[]> {
        return await this.repository.find()
    }

    static async getPozoristeById(id: number): Promise<Pozoriste> {
        const pozoriste = await this.repository.findOneBy({ pozoristeId: id });

        if (!pozoriste) {
            const error: any = new Error("Pozoriste nije pronadjeno.");
            error.status = 404
            throw error
        }

        return pozoriste
    }
}