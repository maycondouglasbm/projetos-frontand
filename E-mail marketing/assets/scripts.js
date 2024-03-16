window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("voltar-topo").style.display = "block";
  } else {
    document.getElementById("voltar-topo").style.display = "none";
  }
}

document.getElementById("voltar-topo").addEventListener("click", function() {
  scrollToTop(1000);
});

function scrollToTop(scrollDuration) {
  var scrollStep = -window.scrollY / (scrollDuration / 15);
  var scrollInterval = setInterval(function(){
    if ( window.scrollY != 0 ) {
        window.scrollBy( 0, scrollStep );
    }
    else clearInterval(scrollInterval); 
  },15);
}


