export class Comic {
  constructor(
    public name: string,
    public rate: number
  ) {}
}

export interface UpdatedComic {
  index: number,
  comic: Comic
}