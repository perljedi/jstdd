define(["MatchBoard"], function(MatchBoard){
    describe("MatchBoard", function(){
        var board, rows, columns;
        beforeEach(function(){
            rows = 8;
            columns = 10;
            board = new MatchBoard(rows, columns);
        });
        it("is an object", function(){
            expect(board).toBeDefined();
        });
        it("has the specified number of columns", function(){
            expect(board.getColumns().length).toBe(columns);
        });
        it("has the correct number of rows", function(){
            expect(board.getRows().length).toBe(rows);
        });
        it("has the correct number of cells", function(){
            expect(board.getCells().length).toBe(rows*columns);
        });
    });
});
