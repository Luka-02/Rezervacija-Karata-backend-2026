import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import type { Pozoriste } from "./Pozoriste";
import type { Rezervacija } from "./Rezervacija";
@Index("fk_predstava_pozoriste_id_idx", ["pozoristeId"], {})
@Entity("predstava", { schema: "rezervacija_karata" })
export class Predstava {
  @PrimaryGeneratedColumn({ type: "int", name: "predstava_id", unsigned: true })
  predstavaId!: number;

  @Column("int", { name: "pozoriste_id", unsigned: true })
  pozoristeId!: number;

  @Column("varchar", { name: "naziv", length: 45 })
  naziv!: string;

  @Column("text", { name: "opis" })
  opis!: string;

  @Column("varchar", { name: "baner", length: 255 })
  baner!: string;

  @ManyToOne(() => require("./Pozoriste").Pozoriste, (pozoriste: any) => pozoriste.predstavas, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
@JoinColumn([{ name: "pozoriste_id", referencedColumnName: "pozoristeId" }])
pozoriste!: Pozoriste;

 @OneToMany(() => require("./Rezervacija").Rezervacija, (rezervacija: any) => rezervacija.predstava)
rezervacijas!: Rezervacija[];
}
