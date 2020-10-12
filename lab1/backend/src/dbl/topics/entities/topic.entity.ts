import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm/index';
import { ITopic } from '../../../core/interfaces/topics/entities'
import { Question } from '../../questions/entities';

@Entity({ name: 'topic' })
export class Topic extends BaseEntity implements ITopic {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  name: string

  @Column({ nullable: true })
  description?: string

  @OneToMany(() => Question, question => question.topic)
  questions?: Question[]
}
