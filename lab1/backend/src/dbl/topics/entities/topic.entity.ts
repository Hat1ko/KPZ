import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index';
import { ITopic } from '../../../core/interfaces/topics/entities'

@Entity({ name: 'topic' })
export class Topic extends BaseEntity implements ITopic {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  name: string

  @Column({ nullable: true })
  description?: string
}
