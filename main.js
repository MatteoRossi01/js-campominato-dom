
    /* Funzione che gestisce il grado di difficoltà*/
    function setDifficult(level) {
        let caselle = 0;
        let numeroCaselle = '';
        
        
        if (level == "easy") {
            caselle = 100;
            numeroCaselle = "dieci";
        } else if (level == "normal") {
            caselle = 81;
            numeroCaselle = "nove";
        } else if (level == "hard") {
            caselle = 49;
            numeroCaselle = "sette";
        } else {
            alert("Impostare una difficoltà per iniziare il gioco!")
        }   

        return [caselle, numeroCaselle];
    }

    const container = document.getElementById('container');

    /* Funzione usata per la creazione della grid */
    function createGrid(container, caselle, numeroCaselle) {
        
        for (let i=1; i<=caselle; i++) {

            /* Creo gli elementi della griglia */
            const node = document.createElement('div');
            node.classList.add("box")
            node.classList.add(numeroCaselle)

            container.appendChild(node)

            let numero = document.createTextNode(i);
            node.appendChild(numero);

            node.addEventListener('click', clickEvent );

        }
        
    }

    /* Funzione evento per il click */
    function clickEvent() {
        this.classList.add('clicked');

        this.removeEventListener('click', clickEvent);

    }

    const start = document.getElementById('start');
    start.addEventListener("click", function clickEvent(){

        let level = document.getElementById("difficolta").value;
        

        if (level == "easy") {
            caselle = 100;
        } else if (level == "normal") {
            caselle = 81;
        } else if (level == "hard") {
            caselle = 49;
        }

        document.getElementById("container").innerHTML = "";

        setDifficult(level);

        createGrid(container, setDifficult(level)[0], setDifficult(level)[1]);

        generaBombe(numeroBombe, caselle)

    });

    const numeroBombe = 16;

    function generaBombe(numeroBombe, caselle) {

        const bombeGenerate = [];
        while (bombeGenerate.length < numeroBombe) {
            const bomba = getRandomNumber(1, caselle)
            if (!bombeGenerate.includes(bomba)) {
                bombeGenerate.push(bomba)
            }
        }
        console.log(bombeGenerate)

        const cell = parseInt(this.innerText)
    }

    function getRandomNumber (min, max) {
        return Math.floor(Math.random() * (max - min - 1)) + min;
    }
