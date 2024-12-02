$("#products").css(
    {   width: "50px",
        height: "40px",
        }
)

$("#products").click(()=>{
    
})

var request="http://localhost:3000/api/products?searchTerm=";

$("input:text").on('keydown', function(event) {
    if (event.key === "Enter") { 
        request += this.value;
        console.log(request);
    }
});

