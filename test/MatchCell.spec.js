define(["MatchCell"], function(MatchCell){
    describe("Match Cell", function(){
        var cell, row, column, color;
        beforeEach(function(){
            row = 1;
            column = 1;
            color = "red";
            cell = new MatchCell(row, column, color);   
        });
        it("is an object", function(){
            expect(cell).toBeDefined();
        });
        it("knows its row", function(){
            expect(cell.getRow()).toBe(row);
        });
        it("knows its column", function(){
            expect(cell.getColumn()).toBe(column);
        });
    });
});
