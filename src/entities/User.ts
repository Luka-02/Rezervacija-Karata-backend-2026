import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rezervacija } from "./Rezervacija";

@Entity("user", { schema: "rezervacija_karata" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id", unsigned: true })
  userId!: number;

  @Column("varchar", { name: "ime", length: 45 })
  ime!: string;

  @Column("varchar", { name: "prezime", length: 45 })
  prezime!: string;

  @Column("varchar", { name: "email", length: 45 })
  email!: string;

  @Column("varchar", { name: "password", length: 255 })
  password!: string;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt!: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt!: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt!: Date | null;

  @OneToMany(() => Rezervacija, (rezervacija) => rezervacija.user)
  rezervacijas!: Rezervacija[];
}
