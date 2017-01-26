

describe("The set implementation ", () => {

    it("Create myCollection", () => {
        let collection : collections.MyCollection<number>  = 
            new collections.MyCollection<number>();  
        expect(collection.size()).toBe(0);
        expect(collection.isEmpty()).toBe(true);
    });


    it("Add object test", () => {
        let collection : collections.MyCollection<number> = 
            new collections.MyCollection<number>();
        collection.add(2);
        expect(collection.size()).toBe(1);
    })

    it("Add object and verify that it exists", () => {
        let collection : collections.MyCollection<number> = 
            new collections.MyCollection<number>();
        let myNumber : number = 2;
        collection.add(myNumber);
        expect(collection.contains(myNumber)).toBe(true);
    });
});