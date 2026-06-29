import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import type { Predstava } from "./Predstava";
import type { User } from "./User";

@Index("fk_rezervacija_predstava_id_idx", ["predstavaId"], {})
@Index("fk_rezervacija_user_id_idx", ["userId"], {})
@Entity("rezervacija", { schema: "rezervacija_karata" })
export class Rezervacija {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "rezervacija_id",
    unsigned: true,
  })
  rezervacijaId!: number;

  @Column("int", { name: "predstava_id", unsigned: true })
  predstavaId!: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId!: number;

  @Column("int", { name: "broj_karata", unsigned: true })
  brojKarata!: number;

  @Column("datetime", { name: "paid_at", nullable: true })
  paidAt!: Date | null;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt!: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt!: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt!: Date | null;

  @ManyToOne(() => require("./User").User, (user: User) => user.rezervacijas)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne(() => require("./Predstava").Predstava, (predstava: Predstava) => predstava.rezervacijas)
  @JoinColumn({ name: "predstava_id" })
  predstava!: Predstava;
}
