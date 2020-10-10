export class Cart {
    public id:number;
    public name:string;
	public quantity:number;
	public price:number;
    public total:number;
    public amount:number;
    public category:string;
    public userid:number;
    public getId():number {
		return this.id;
	}
	public setId( id:number):void {
		this.id = id;
	}
	public getName():string {
		return this.name;
	}
	public setName(name:string):void {
		this.name = name;
	}
	public getQuantity():number {
		return this.quantity;
	}
	public setQuantity(quantity:number):void {
		this.quantity = quantity;
	}
	public getPrice():number {
		return this.price;
	}
	public setPrice(price:number):void {
		this.price = price;
	}
	public getTotal():number {
		return this.total;
	}
	public setTotal(total:number):void {
		this.total = total;
	}

}
