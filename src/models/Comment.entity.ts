import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './User.entity';
import { Article } from './Article.entity';

/**
 * 评论实体
 */
@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 关联关系
  @ManyToOne(() => User, (user) => user.comments)
  author: User;

  @ManyToOne(() => Article, (article) => article.comments)
  article: Article;

  // 父评论（用于回复）
  @ManyToOne(() => Comment, (comment) => comment.replies, { nullable: true })
  parent?: Comment;

  // 子评论（回复列表）
  @OneToMany(() => Comment, (comment) => comment.parent)
  replies: Comment[];

  // 点赞的用户列表
  @ManyToMany(() => User)
  @JoinTable({
    name: 'comment_likes',
    joinColumn: { name: 'comment_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
  })
  likedBy: User[];
}
