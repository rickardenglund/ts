
namespace calc{

    enum Operation {
            Addition,
            Multiplication, 
            None
    }

    enum ButtonType {
        NothingPressedYet,
        Number,
        Addition,
        Multiplication,
        Equals
    }

    console.log('We have jQuery', $.fn.jquery )
    class Calculator {
        displayNumber : number;
        cacheNumber : number;
        activeOperation : Operation;
        lastButtonType = ButtonType.NothingPressedYet;

        constructor() {
            this.init();
        }

        init() {
            this.displayNumber = 0;
            this.cacheNumber = 0;
            this.activeOperation = Operation.None;
            this.lastButtonType = ButtonType.NothingPressedYet;
        }

        pushNumericButton(number : number) {
            if (!this.isNonActionButtonType(this.lastButtonType)) {
                this.displayNumber = 0;
            }

            this.displayNumber    = this.displayNumber * 10 + number;
            this.lastButtonType   = ButtonType.Number;
        }

        pushAddition() {
            if (this.isNonActionButtonType(this.lastButtonType)) {
                this.cacheNumber     = this.displayNumber;
            }

            this.lastButtonType   = ButtonType.Addition;
            this.activeOperation  = Operation.Addition;
        }

        pushMultiplication() {
            if (this.isNonActionButtonType(this.lastButtonType)){
                this.cacheNumber      = this.displayNumber;
            } else {
                let oldCache = this.cacheNumber;
                this.cacheNumber = this.displayNumber;
                this.displayNumber *= oldCache;
            }

            this.lastButtonType   = ButtonType.Multiplication;
            this.activeOperation  = Operation.Multiplication;
        }

        private isNonActionButtonType(buttonType : ButtonType) : boolean {
            return this.lastButtonType == ButtonType.NothingPressedYet || 
                   this.lastButtonType == ButtonType.Number;
        }

        pushEquals() {
            switch (this.activeOperation) {
                case Operation.Addition : 
                    this.displayNumber += this.cacheNumber;
                    break;
                case Operation.Multiplication :
                    this.displayNumber *= this.cacheNumber;
                case Operation.None:
                    break;
            }

            this.lastButtonType = ButtonType.Equals;
        }

        pushClear() {
            this.init();
        }
    }

    let calculator : Calculator = new Calculator();  

     $(".btn").click(function() {
         let buttonString : string = $(this).text();
         let buttonAsNumber : number = parseInt(buttonString);
         if (!isNaN(buttonAsNumber)) {
            let  value : number = parseInt($(this).text());
            calculator.pushNumericButton(value);
     } else if (buttonString.includes("+")){
         calculator.pushAddition();
     } else if (buttonString.includes("x")) {
         calculator.pushMultiplication();
     } else if (buttonString.includes("=")) {
         calculator.pushEquals();
     } else if (buttonString.includes("C")) {
         calculator.pushClear();
     }

    $("input").val(calculator.displayNumber);
        
    })
}