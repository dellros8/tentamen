// JavaScript för att implementera kraven A-E.

$.get("https://demo.edument.se/api/products")
    .done(function (data) {

        $("#nameone").text(`${data[0].Name}`);
        $("#nameone").css("color", "red");
        $("#priceone").text(`${data[0].Price}`);
        $("#descriptionone").text(`${data[0].Description}`);
        $("#imageone").attr("src", `${data[0].Image}`);
        $("<p></p>").text(`${data[0].valueOf(6)}`);

        // data[0].lagerstatus = value(Math.floor((Math.random() * 10) +1));
        //
        // if (data[0].valueOf(lagerstatus) === 0){
        //     $("#buttonone").hidden();
        // }

        $("#nametwo").text(`${data[1].Name}`);
        $("#pricetwo").text(`${data[1].Price}`);
        $("#descriptiontwo").text(`${data[1].Description}`);
        $("#imagetwo").attr("src", `${data[1].Image}`);
        $("<p></p>").text(`${data[1].valueOf(6)}`);

        // data[1].lagerstatus = value(Math.floor((Math.random() * 10) +1));
        //
        // if (data[1].valueOf(lagerstatus) === 0){
        //     $("#buttonone").hidden();
        // }

        $("#namethree").text(`${data[2].Name}`);
        $("#pricethree").text(`${data[2].Price}`);
        $("#descriptionthree").text(`${data[2].Description}`);
        $("#imagethree").attr("src", `${data[2].Image}`);
        $("<p></p>").text(`${data[2].valueOf(6)}`);

        // data[2].lagerstatus = value(Math.floor((Math.random() * 10) +1));
        //
        // if (data[2].valueOf(lagerstatus) === 0){
        //     $("#buttonone").hidden();
        // }

        $("#namefour").text(`${data[3].Name}`);
        $("#pricefour").text(`${data[3].Price}`);
        $("#descriptionfour").text(`${data[3].Description}`);
        $("#imagefour").attr("src", `${data[3].Image}`);
        $("<p></p>").text(`${data[3].valueOf(6)}`);

        // data[3].lagerstatus = value(Math.floor((Math.random() * 10) +1));
        //
        // if (data[3].valueOf(lagerstatus) === 0){
        //     $("#buttonone").hidden();
        // }

        $("#namefive").text(`${data[4].Name}`);
        $("#pricefive").text(`${data[4].Price}`);
        $("#descriptionfive").text(`${data[4].Description}`);
        $("#imagefive").attr("src", `${data[4].Image}`);
        $("<p></p>").text(`${data[4].valueOf(6)}`);

        // data[4].lagerstatus = value(Math.floor((Math.random() * 10) +1));
        //
        // if (data[4].valueOf(lagerstatus) === 0){
        //     $("#buttonone").hidden();
        // }

        $("#namesix").text(`${data[5].Name}`);
        $("#pricesix").text(`${data[5].Price}`);
        $("#descriptionsix").text(`${data[5].Description}`);
        $("#imagesix").attr("src", `${data[5].Image}`);
        $("<p></p>").text(`${data[5].valueOf(6)}`);

        // data[5].lagerstatus = value(Math.floor((Math.random() * 10) +1));
        //
        // if (data[5].valueOf(lagerstatus) === 0){
        //     $("#buttonone").hidden();
        // }

        $("#nameseven").text(`${data[6].Name}`);
        $("#priceseven").text(`${data[6].Price}`);
        $("#descriptionseven").text(`${data[6].Description}`);
        $("#imageseven").attr("src", `${data[6].Image}`);
        $("<p></p>").text(`${data[6].valueOf(6)}`);

        // data[6].lagerstatus = value(Math.floor((Math.random() * 10) +1));
        //
        // if (data[6].valueOf(lagerstatus) === 0){
        //     $("#buttonone").hidden();
        // }

        $("#nameeight").text(`${data[7].Name}`);
        $("#priceeight").text(`${data[7].Price}`);
        $("#descriptioneight").text(`${data[7].Description}`);
        $("#imageeight").attr("src", `${data[7].Image}`);
        $("<p></p>").text(`${data[7].valueOf(6)}`);

        // data[7].lagerstatus = value(Math.floor((Math.random() * 10) +1));
        //
        // if (data[7].valueOf(lagerstatus) === 0){
        //     $("#buttonone").hidden();
        // }

        let cart = [];

        $("#buttonone").on("click", function(data){
            cart.push(data[0]);
            buildProductInCart();
            lagerstatus--
        });
        $("#buttontwo").on("click", function(data){
            cart.push(data[1]);
            buildProductInCart();
            lagerstatus--
        });
        $("#buttonthree").on("click", function(data){
            cart.push(data[2]);
            buildProductInCart();
            lagerstatus--
        });
        $("#buttonfour").on("click", function(data){
            cart.push(data[3]);
            buildProductInCart();
            lagerstatus--
        });
        $("#buttonfive").on("click", function(data){
            cart.push(data[4]);
            buildProductInCart();
            lagerstatus--
        });
        $("#buttonsix").on("click", function(data){
            cart.push(data[5]);
            buildProductInCart();
            lagerstatus--
        });
        $("#buttonseven").on("click", function(data){
            cart.push(data[6]);
            buildProductInCart();
            lagerstatus--
        });
        $("#buttoneight").on("click", function(data){
            cart.push(data[7]);
            buildProductInCart();
            lagerstatus--
        });

        function productCount(theproduct) {
            let quantity = 0;
            if (data.Name === theproduct.Name){
                quantity ++
            }
            return quantity
        }


        function buildProductInCart(data) {
            let displayCart = $("#displayCart");
            let productDiv = $("<div></div>").addClass("productdiv");
            let name = $("<p></p>").text(data.Name);
            let count = $("<p></p>").addClass("count").text(`${(productCount(data))}`);
            productDiv.append(name, count);
            displayCart.append(productDiv);
        }

        function calculateTotal(cart) {

        }

        console.log(cart);

    })

    .fail(function (error){
        console.log("error found")
    });


$("#ordercart").on("click", function(){

    $.post("http://localhost:3000/orders")
        .done(function(){
            cart
        })
        .fail(function(){

        });

    alert("Order placed, thank you!");

});

// JSON.stringify