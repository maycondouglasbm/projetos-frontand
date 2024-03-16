const items = [
    {
        id: 0,
        nome: 'camiseta',
        img: 'assets/img/camisa.webp',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'short',
        img: 'assets/img/short.webp', 
        quantidade: 0
    },
    {
        id: 2,
        nome: 'tênis',
        img: 'assets/img/tenis.png',
        quantidade: 0
    }
]

inicializarLoja = () => {
    var conteinerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        conteinerProdutos.innerHTML += `
        
        <div class="produto-single">
            <img src="`+val.img+`" />
            <p>`+val.nome+`</p> 
            <a key="`+val.id+`"  href="#">Adicionar ao carrinho!</a>
            
        </div>


        `
    })
}

inicializarLoja();


atualizarCarrinho = () => {
    var conteinerCarrinho = document.getElementById('carrinho');
    conteinerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
        conteinerCarrinho.innerHTML+= `
        
        <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
        <hr></hr>



        `;
        }
    })
}


var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
} 


