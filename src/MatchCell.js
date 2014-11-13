define(["lodash"], function(_){
    var MatchCell = function(r,c, co){
        var row = r;
        var column = c;
        var color = co;
        this.getRow = function(){
            return row;
        };
        this.getColumn = function(){
            return column;
        };
        this.getColor = function(){
            return color;
        };
    };
    return MatchCell;
});
