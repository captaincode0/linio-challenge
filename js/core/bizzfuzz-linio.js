var BizzFuzzLinio = /** @class */ (function () {
    function BizzFuzzLinio() {
        this.messages = ["IT", "Linio", "Linianos"];
    }
    /**
     * [run executes bizz fuzz linio algorithm]
     */
    BizzFuzzLinio.prototype.run = function () {
        var isDivisibleByBoth = 0;
        var isDivisibleByThree = 0;
        for (var i = 1; i <= 100; i++) {
            isDivisibleByBoth = Number(i % 3 == 0 && i % 5 == 0);
            isDivisibleByThree = Number(i % 3 == 0 && i % 5 > 0);
            if (i % 3 == 0 || i % 5 == 0) {
                console.log(this.messages[(isDivisibleByBoth * 2) + isDivisibleByThree]);
                continue;
            }
            console.log(i);
        }
    };
    /**
     * [getMessageByNumber given one number gets the message]
     */
    BizzFuzzLinio.prototype.getMessageByNumber = function (n) {
        return (n % 3 == 0 || n % 5 == 0) ? this.messages[(Number(n % 3 == 0 && n % 5 == 0) * 2) + Number(n % 3 == 0 && n % 5 > 0)] : String(n);
    };
    return BizzFuzzLinio;
}());

module.exports = new BizzFuzzLinio();