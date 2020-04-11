function mortgage(){
    let amount = document.getElementById("amount").value;
    let rate = document.getElementById("rate").value;
    let period = document.getElementById("period").value;

    let r = (rate/100) / 12;
    let n = period * 12;

    let x = Math.pow(1 + r, n)

    let res = amount * r * (x / (x- 1));
    let totalAmount = res * n;
    let interestPayment = totalAmount - amount;

    res = res.toFixed(2);
    totalAmount = totalAmount.toFixed(2);
    interestPayment = interestPayment.toFixed(2);

    

    let divNew = document.getElementById("result");


    divNew.innerHTML = `<p>Monthly payment is: <strong> ${res}</strong></p>
          <p>Total amount to be paid is: <strong>${totalAmount}</strong></p>
          <p>Total interest is: <strong>${interestPayment}</strong></p>  `;

    }

    
