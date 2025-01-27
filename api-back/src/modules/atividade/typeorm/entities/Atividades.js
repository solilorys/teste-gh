import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("atividades")
class Atividades {
  @PrimaryGeneratedColumn()
  id;

  @Column({ type: "varchar", nullable: false })
  name;

  @Column({ type: "timestamp", nullable: false })
  start_time;

  @Column({ type: "timestamp", nullable: false })
  end_time;
}

module.exports = Atividades;
