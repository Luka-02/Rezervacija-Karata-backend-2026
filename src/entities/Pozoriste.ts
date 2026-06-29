import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("pozoriste", { schema: "rezervacija_karata" })
export class Pozoriste {
  @PrimaryGeneratedColumn({ type: "int", name: "pozoriste_id", unsigned: true })
  pozoristeId!: number;

  @Column("varchar", { name: "naziv", length: 45 })
  naziv!: string;

  @OneToMany(() => require("./Predstava").Predstava, (predstava: any) => predstava.pozoriste)
  predstavas!: any[];
}
