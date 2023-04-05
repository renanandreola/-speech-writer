const titles = []

function getTexts() {
    $.get('/getInfo', function (res) {
        console.log("res ", res);

        if(res.status == 200) {
            var text = res.text;
            
            if (text.includes('assunto')) {
                var words = text.split(" ");
                console.log(titles);

                // existe
                if(titles.indexOf(words[1]) !== -1) {
                    alert("assunto existe")
                } else {
                    alert("assunto nao existe")
                    titles.push(words[1]);

                    // Cria o novo card
                    var newCard = document.createElement("div");
                    newCard.classList.add("card");
    
                    // Cria o titulo
                    var newTitle = document.createElement("span");
                    newTitle.classList.add("title-card");
    
                    // Adiciona o texto ao titulo
                    newTitle.textContent = 'Assunto: ' + words[1];
    
                    // Adiciona o titulo ao card
                    newCard.appendChild(newTitle);
    
                    // Adiciona o novo card ao painel principal
                    var containerDiv = document.getElementById("card-content");
                    containerDiv.appendChild(newCard);
                }
                
                


            }


        } else {
            alert('Ocorreu um erro!');
        }

    })
}