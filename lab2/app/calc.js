var calc;
(function (calc) {
    var Operation;
    (function (Operation) {
        Operation[Operation["Addition"] = 0] = "Addition";
        Operation[Operation["Multiplication"] = 1] = "Multiplication";
        Operation[Operation["None"] = 2] = "None";
    })(Operation || (Operation = {}));
    var ButtonType;
    (function (ButtonType) {
        ButtonType[ButtonType["NothingPressedYet"] = 0] = "NothingPressedYet";
        ButtonType[ButtonType["Number"] = 1] = "Number";
        ButtonType[ButtonType["Addition"] = 2] = "Addition";
        ButtonType[ButtonType["Multiplication"] = 3] = "Multiplication";
        ButtonType[ButtonType["Equals"] = 4] = "Equals";
    })(ButtonType || (ButtonType = {}));
    console.log('We have jQuery', $.fn.jquery);
    var Calculator = (function () {
        function Calculator() {
            this.lastButtonType = ButtonType.NothingPressedYet;
            this.init();
        }
        Calculator.prototype.init = function () {
            this.displayNumber = 0;
            this.cacheNumber = 0;
            this.activeOperation = Operation.None;
            this.lastButtonType = ButtonType.NothingPressedYet;
        };
        Calculator.prototype.pushNumericButton = function (number) {
            if (!this.isNonActionButtonType(this.lastButtonType)) {
                this.displayNumber = 0;
            }
            this.displayNumber = this.displayNumber * 10 + number;
            this.lastButtonType = ButtonType.Number;
        };
        Calculator.prototype.pushAddition = function () {
            if (this.isNonActionButtonType(this.lastButtonType)) {
                this.cacheNumber = this.displayNumber;
            }
            this.lastButtonType = ButtonType.Addition;
            this.activeOperation = Operation.Addition;
        };
        Calculator.prototype.pushMultiplication = function () {
            if (this.isNonActionButtonType(this.lastButtonType)) {
                this.cacheNumber = this.displayNumber;
            }
            else {
                var oldCache = this.cacheNumber;
                this.cacheNumber = this.displayNumber;
                this.displayNumber *= oldCache;
            }
            this.lastButtonType = ButtonType.Multiplication;
            this.activeOperation = Operation.Multiplication;
        };
        Calculator.prototype.isNonActionButtonType = function (buttonType) {
            return this.lastButtonType == ButtonType.NothingPressedYet ||
                this.lastButtonType == ButtonType.Number;
        };
        Calculator.prototype.pushEquals = function () {
            switch (this.activeOperation) {
                case Operation.Addition:
                    this.displayNumber += this.cacheNumber;
                    break;
                case Operation.Multiplication:
                    this.displayNumber *= this.cacheNumber;
                case Operation.None:
                    break;
            }
            this.lastButtonType = ButtonType.Equals;
        };
        Calculator.prototype.pushClear = function () {
            this.init();
        };
        return Calculator;
    }());
    var calculator = new Calculator();
    $(".btn").click(function () {
        var buttonString = $(this).text();
        var buttonAsNumber = parseInt(buttonString);
        if (!isNaN(buttonAsNumber)) {
            var value = parseInt($(this).text());
            calculator.pushNumericButton(value);
        }
        else if (buttonString.includes("+")) {
            calculator.pushAddition();
        }
        else if (buttonString.includes("x")) {
            calculator.pushMultiplication();
        }
        else if (buttonString.includes("=")) {
            calculator.pushEquals();
        }
        else if (buttonString.includes("C")) {
            calculator.pushClear();
        }
        $("input").val(calculator.displayNumber);
    });
})(calc || (calc = {}));
//# sourceMappingURL=calc.js.map