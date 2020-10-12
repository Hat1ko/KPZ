import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm/index'
import { IQuestion } from '../../../core/interfaces/questions/entities'
import { Topic } from '../../topics/entities'

@Entity({ name: 'question' })
export class Question extends BaseEntity implements IQuestion {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  question: string

  @Column()
  hours: number

  @Column()
  dollarsPerHour: number

  @Column()
  topicId: string

  @ManyToOne(() => Topic, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'topicId' })
  topic?: Topic
}
