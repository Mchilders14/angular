class Customer {

    id: number;
    name: string;
    sales: number;

   constructor(id: number, name: string, sales: number) {
       this.id = id;
       this.name = name;
       this.sales = sales;
   }

   log(): void{
        console.log(`[${this.id}] + [${this.name}] + [${this.sales}]`);
   }
}

let customers: Customer[] = [];

let cust = new Customer(1, "MAX", 1000);

customers.push(cust);
customers.push(new Customer(2, "GA", 10000))
customers.push(new Customer(2, "GA", 1000000))

for(let c of customers){
    c.log();
}

cust.log();