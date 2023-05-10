import { SubColor } from "./subcolor";
import { SubFabric } from "./subfabric";
import { SubPromotion } from "./subpromotion";

export class Product {
  constructor(
    public _id: string,
    public ProductName: string,
    public ProductId: string,
    public Fabric: SubFabric,
    public note: string,
    public ProductDetail: string,
    public ProductImage: string,
    public Color: Array<SubColor>,
    public MakeToOrder: string,
    public HomeTryOn: string,
    public ReadyToShip: string,
    public Promotion: SubPromotion
  ) {}
}
