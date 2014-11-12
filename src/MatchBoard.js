define(["lodash"], function(_){
    var MatchBoard = function(rows, columns){
        this.rows = rows;
        this.columns = columns;
        var board = [];
        for(var c in _.range(0, columns)){
            var column = [];
            for(var r in _.range(0, rows)){
                column.push({});
            }
            board.push(column);
        }
        this.getColumns = function(){
            return board;
        };
        this.getRows = function(){
            return _.zip(board);
        }
        this.getCells = function(){
            return _.flatten(board);
        };
    };
    return MatchBoard;
});
