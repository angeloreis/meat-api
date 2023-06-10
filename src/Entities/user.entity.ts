import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { USER_TABLE, globalVars } from '../Commons/SetupVariable';

@Entity({
  database: globalVars.database.database,
  schema: USER_TABLE,
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: false, width: 256 })
  password: string;

  @Column({ nullable: false, unique: true })
  cpf: string;

  @Column()
  gender: string;
}
