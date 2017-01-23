
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
        Equals
    }

    console.log('We have jQuery', $.fn.jquery )
    class Calculator {
        displayNumber : number;
        cacheNumber : number;
        ActiveOperation : Operation;
        LastButtonType = ButtonType.NothingPressedYet;

        constructor() {
            this.init();
        }

        init() {
            this.displayNumber = 0;
            this.cacheNumber = 0;
            this.ActiveOperation = Operation.None;
            this.LastButtonType = ButtonType.NothingPressedYet;
        }

        pushNumericButton(number : number) {
            if (this.LastButtonType != ButtonType.Number) {
                this.displayNumber = 0;
            }

            this.displayNumber = this.displayNumber*10 + number;
            this.LastButtonType = ButtonType.Number;
        }

        pushAddition() {
            this.LastButtonType = ButtonType.Addition;
            this.ActiveOperation = Operation.Addition;
            this.cacheNumber += this.displayNumber;
            this.displayNumber = this.cacheNumber;
        }

    

        pushEquals() {
            switch (this.ActiveOperation) {
                case Operation.Addition : 
                    this.displayNumber += this.cacheNumber;
                    break;
                case Operation.None:
                    break;
            }
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
     } else if (buttonString.includes("=")) {
         calculator.pushEquals();
     } else if (buttonString.includes("C")) {
         calculator.pushClear();
     }

    $("input").val(calculator.displayNumber);
        
    })
}