export class Task {

  constructor(

    public id: number,
    public taskName: string,
    public status: boolean = false,
    public taskDescription?: string,
    public due?: Date,

  ) {}

}
