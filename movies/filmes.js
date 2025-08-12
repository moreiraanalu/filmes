const data = [
    { 
        id: "01",
        nome: "A princesa e o sapo",
        nota: "5/5",
        img: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/89/74/19962669.jpg",
        descricao: "Tiana, uma jovem sonhadora de Nova Orleans, embarca em uma jornada mágica após beijar um príncipe transformado em sapo, descobrindo o verdadeiro significado de amor e persistência."
    },
    { 
        id: "02",
        nome: "O auto da compadecida",
        nota: "5/5",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEji3RPKdbGIymUnugVsL7BQcRT0Ymwdm2bFfDLBL2exhgw8qN2q-DOH3HGXsyNMeNS74no_dTgeHNLXBvy19b3qy4sawKrLJEe_0uWKZxrYvZL6wxe3nU9U9T_7sUHrcRE3gQHBMjxeTW91qsrzTCkKACqrK80KIMDg5ynOtn92SU3vj0y21icjKIC8KurT/s867/02%20-%20O%20Auto%20da%20Compadecida%20(2000).jpg",
        descricao: "Baseado na obra de Ariano Suassuna, o filme segue as aventuras de João Grilo e Chicó no sertão nordestino, misturando comédia, crítica social e religiosidade popular."
    },
    { 
        id: "03",
        nome: "Como eu era antes de você",
        nota: "5/0",
        img: "https://br.web.img3.acsta.net/c_310_420/pictures/16/02/03/19/11/303307.jpg",
        descricao: "Louisa, uma jovem cheia de vida, se torna cuidadora de Will, um homem tetraplégico. Juntos, eles aprendem sobre amor, limites e escolhas difíceis."
    },
    { 
        id: "04",
        nome: "10 coisas que eu odeio em você",
        nota: "5/5",
        img: "https://m.media-amazon.com/images/S/pv-target-images/e70e995339d0aa70e3332922116d544d7ec4848bcfa43ea3db2dfb4c65c2179d.jpg",
        descricao: "Uma adaptação moderna de Shakespeare, onde uma adolescente rebelde entra em um jogo de amor e engano em meio às regras de namoro do colégio."
    },
    { 
        id: "05",
        nome: "Amor de aluguel",
        nota: "5/5",
        img: "https://m.media-amazon.com/images/M/MV5BYzc3MzlhMTMtMTkzNy00YjI1LTk4OGQtYTI2NzA1OTgwZjM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        descricao: "Um nerd do ensino médio paga uma garota popular para fingir ser sua namorada, mas o plano toma rumos inesperados quando sentimentos reais surgem."
    },
    {
        id: "06",
        nome: "A bela e a fera",
        nota: "5/5",
        img: "https://www.infoescola.com/wp-content/uploads/2010/10/bela-e-a-fera.jpg",
        descricao: "Bela, uma jovem inteligente e sonhadora, encontra o amor verdadeiro em uma fera encantada, mostrando que a beleza está no interior."
    },
    {
        id: "07",
        nome: "Gente grande",
        nota: "5/5",
        img: "https://br.web.img3.acsta.net/c_310_420/pictures/210/299/21029996_20130821205722213.jpg",
        descricao: "Amigos de infância se reúnem anos depois e enfrentam as alegrias e loucuras da vida adulta com muito humor e nostalgia."
    },
    {
        id: "08",
        nome: "Descendentes",
        nota: "5/5",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXuftoJZhqfkDBD0QkUhT5JSuZbR_feioRg&s",
        descricao: "Filhos dos vilões da Disney tentam encontrar seu lugar em um mundo onde precisam decidir entre seguir os passos dos pais ou mudar o próprio destino."
    },
    {
        id: "09",
        nome: "Mulan",
        nota: "5/5",
        img: "https://m.media-amazon.com/images/I/91sdJyWsqVL._AC_UF894,1000_QL80_.jpg",
        descricao: "Para proteger seu pai, Mulan se disfarça de homem e entra no exército chinês, mostrando coragem e quebrando estereótipos."
    },
    {
        id: "10",
        nome: "Esposa de mentirinha",
        nota: "5/5",
        img: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/34/28/20028730.jpg",
        descricao: "Um cirurgião plástico convence sua assistente a fingir ser sua ex-esposa para manter uma mentira, mas a farsa os aproxima mais do que imaginam."
    },
    {
        id: "11",
        nome: "Lilo e Stitch",
        nota: "5/5",
        img: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/89/85/20119071.jpg",
        descricao: "Lilo, uma menina havaiana, adota um alienígena bagunceiro pensando ser um cachorro. Juntos, eles formam uma família improvável, baseada em amor e aceitação."
    },
    {
        id: "12",
        nome: "As branquelas",
        nota: "5/5",
        img: "https://cinemacomrapadura.com.br/imagens/2005/03/as-branquelas-poster.jpg",
        descricao: "Dois agentes do FBI se disfarçam como socialites brancas para resolver um crime, criando situações hilárias em meio ao universo da alta sociedade."
    },
    {
        id: "13",
        nome: "Cinderela Live Action",
        nota: "5/5",
        img: "https://npr.brightspotcdn.com/dims4/default/3222064/2147483647/strip/true/crop/1280x2042+0+0/resize/1760x2808!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fketr%2Ffiles%2F201503%2Fcinderella.jpg",
        descricao: "Nesta versão live-action, Cinderela mantém sua bondade mesmo diante das dificuldades e conquista seu final feliz com a ajuda de uma fada madrinha."
    },
    {
        id: "14",
        nome: "Diário de uma paixão",
        nota: "5/5",
        img: "https://m.media-amazon.com/images/M/MV5BZjY0YzYwMDQtYmJjNi00Yzg5LWE3OTYtNDQzOGYxN2JiNGQ4XkEyXkFqcGc@._V1_.jpg",
        descricao: "Um romance intenso entre Noah e Allie que supera o tempo, as diferenças sociais e até a memória, sendo contado por um diário especial."
    },
    {
        id: "15",
        nome: "Alladin",
        nota: "5/5",
        img: "https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0%2C0%2C540%2C810",
        descricao: "Um jovem humilde encontra uma lâmpada mágica com um gênio que concede desejos, iniciando uma jornada cheia de magia, amor e coragem."
    }
];

export default data;
