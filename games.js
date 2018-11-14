
    $(document).ready(function () {

        // variables to store inputs (empty at the begining)
        var input1 = "";
        var input2 = "";
        var oper = "";
        // control variables: operatorChosen controls the inputs, alreadyCalculated is to make sure there is one operator for 2 numbers
        var operatorChosen = false;
        var alreadyCalculated = false;

        // reset function
        function clear() {
          $("#first-number").empty();
          $("#operator").empty();
          $("#second-number").empty();
          $("#result").empty();
          input1 = "";
          input2 = "";
          operatorChosen = false;
          alreadyCalculated = false;
        }

        // function to recive number input
        $(".btn.btn-primary.number").on("click", function () {
          if (operatorChosen && alreadyCalculated) {
            input2 += $(this).val();
            console.log(`input2 is ${input2}`)
            $("#second-number").text(input2);
          } else {
            clear();
            input1 += $(this).val();
            console.log(`input1 is ${input1}`)
            $("#first-number").text(input1);
          }
        })

        // function to recive operator input
        $(".btn.btn-danger.operator").on("click", function () {
          if (!alreadyCalculated) {
            operatorChosen = true;
            oper = $(this).val();
            $("#operator").text($(this).text());
            alreadyCalculated = true;
          } else {
            false;
          }
        })

        // calculation happends when user clicks equal button
        $(".btn.btn-success.equal").on("click", function () {
          if (input1 !== "" && oper !== "" && input2 !== "") {
            alreadyCalculated = true;
            input1 = parseInt(input1);
            input2 = parseInt(input2);
            var res = "";
            if (oper === "divide") {
              res = input1 / input2;
              clear();
              $("#first-number").text(res);
            } else if (oper === "minus") {
              res = input1 - input2;
              clear();
              $("#first-number").text(res);
            } else if (oper === "power") {
              res = Math.pow(input1, input2)
              clear();
              $("#first-number").text(res);
            } else if (oper === "times") {
              res = input1 * input2;
              clear();
              $("#first-number").text(res);
            } else if (oper === "plus") {
              res = input1 + input2;
              clear();
              $("#first-number").text(res);
            }
          } else {
            alert("You need to insert 2 numbers!")
          }
        })

        // reset happens when user clicks on clear button
        $(".btn.btn-dark.clear").on("click", function () {
          clear();
        })
  
      })
  