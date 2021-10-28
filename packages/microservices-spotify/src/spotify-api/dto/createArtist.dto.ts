import {ArtistEntity} from "../../database/entity/artist.entity";

class Genre {
  id: number
  name: string
}

class Followers {
  href: string
  total: number
}

class ExternalURL {
  name: string
  url: string
}

class Image {
  width: number
  height: number
  url: string
}

export class CreateArtistDto  {

  constructor (obj) {
    if (obj === undefined || obj === null || JSON.stringify(obj) === JSON.stringify({}))
      return
    this.external_urls = obj.external_urls
    this.followers = obj.followers
    this.id = obj.id
    this.images = obj.images
    this.href = obj.href
    this.name = obj.name
    this.popularity = obj.popularity
    this.type = obj.type
    this.uri = obj.uri
    this.genres = obj.genres
  }

  external_urls: ExternalURL[]
  followers: Followers
  genres: Genre[]
  id: string
  images: Image[]
  href: string
  name: string
  popularity: number
  type: string
  uri: string

  public toEntity(): ArtistEntity {
    const e = new ArtistEntity()
    e.id = this.id
    e.href = this.href
    e.name = this.name
    e.popularity = this.popularity
    e.type = this.type
    e.uri = this.uri
    e.images_json = JSON.stringify(this.images)
    e.followers_href = this.followers.href
    e.followers_total = this.followers.total
    e.external_urls_json = JSON.stringify(this.external_urls)
    e.genres_json = JSON.stringify(this.genres)

    return e
  }
}
