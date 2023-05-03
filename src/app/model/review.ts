import { Customer } from "./customer"
import { ReviewImage } from "./reviewimage";
export class Review{
  constructor(
    public _id: string,
    public Date: string,
    public ReviewID: number,
    public Customer: Customer,
    public Comment: string,
    public ReviewImage: ReviewImage[],
    public Rate: number
  ) {}
}

