import {BaseEntity, Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class ArtistEntity extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column({nullable:true})
  external_urls_json: string

  @Column({nullable:true})
  followers_href: string

  @Column({nullable:true})
  followers_total: number

  @Column({nullable:true})
  genres_json: string

  @Column({nullable:true})
  href: string

  @Column({nullable:true})
  name: string

  @Column({nullable:true})
  popularity: number

  @Column({nullable:true})
  type: string

  @Column({nullable:true})
  uri: string

  @Column({nullable:true})
  images_json: string
}
