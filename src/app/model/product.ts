import { Fabric } from "./fabric";
import { Color } from "./color";
export class Product {
  constructor(
    public _id: string,
    public ProductName: string,
    public Fabric: Fabric,
    public note: string,
    public ProductDetail: string,
    public ProductImage: string,
    public Color: Color[],
    public MakeToOrder: string,
    public HomeTryOn: string,
    public ReadyToShip: string
  ) {}
}
