// buat pilihan comp , sama kaya latihan suwit jawa pertama, tapi lebih ringkas lagi kita buatnya
function getComputerChoice() {
  const comp = Math.random();
  if (comp < 0.34) return "rock";
  if (comp >= 0.34 && comp < 0.67) return "paper";
  return "scissor";
}

// Rulesnya utk mendapatkan hasil siapa menangnya

function getResult(comp, player) {
  if (player == comp) return "Seri!";
  if (player == "rock") return comp == "paper" ? "Lose!" : "Win!";
  if (player == "paper") return comp == "scissor" ? "Lose!" : "Win!";
  if (player == "scissor") return comp == "rock" ? "Lose!" : "Win!";
}

//supaya lebih interaktif lagi. Gambar komputer seolah mengacak2 sebelum memilih pilihannya
// Kita gunaka konsep timing pada js nya di vid quick tpi sdh membahas mengenai set interval, dan set timeout

function randomPic()  {
  const imgComputer = document.querySelector(".img-computer"); //selection element yg dituju
  const pic = ["rock", "paper", "scissor"]; //buat variable pic yg bentuknya array. Jadi kita ganti gambarnya sesuai dg array-nya ini
  let i = 0;

  const timeStart = new Date().getTime();

  setInterval(function () {
    if(new Date().getTime() - timeStart > 1000)  {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', `img/${pic[i++]}.png`); //lalu kita ambil img nya terus i++ supaya nambah terus
    if( i == pic.length) i = 0; // jika i sudah mencapai length pic, kembalikan nilainya ke 0. suruh balik lagi dg i diisi = 0. jadi balik terus 0 1 2 0 1 2
  }, 100);
} 


// yg lebih efeektif, dg 1 block aja bisa membuat event utk ke 3 gambar 
const choice = document.querySelectorAll("li img");
choice.forEach(function (choose) { //
  choose.addEventListener("click", function () {
    const computerChoice = getComputerChoice();
    const playerChoice = choose.className;
    const result = getResult(computerChoice, playerChoice);

    randomPic();

    setTimeout(function() {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute('src', `img/${computerChoice}.png`);

      const info = document.querySelector(".info");
      info.innerHTML = result;  
    }, 1000);

  });
});

// tugas! tambahkan scoring masing2 computer dan player berapa2 disamping



// // Event. Kita akan jalan kan eventnya ketika kita klik salah satu tombolnya
// // pertama kita coba ambil dulu yg rock ketika pilih rock

// // Kita selection dulu tombolnya yg element classnya rock
// const playerRock = document.querySelector(".rock");
// //kita kasih event
// playerRock.addEventListener("click", function () {
//   const computerChoice = getComputerChoice(); //kita ambil dulu pilihan computer mgunakan function yg kita tulis diatas tadi. isi dg pangggil getComputerChoice. shg angka random akan masuk kedlm var computerChoosing atau pilihan si komputer
//   const playerChoice = playerRock.className; // di ambil berdasarkan classnya
//   const result = getResult(computerChoice, playerChoice); //kita buat var resultnya, kita isi parameternya computerchoice-nya dan playerchoice-nya

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", `img/${computerChoice}.png`);

//   //Tinggal kita masukkan resultnya win atau lose
//   const info = document.querySelector(".info");
//   //kita ambil tengah html-nya diisi dg hasil resultnya
//   info.innerHTML = result;
// });

// const playerPaper = document.querySelector(".paper");
// playerPaper.addEventListener("click", function () {
//   const computerChoice = getComputerChoice();
//   const playerChoice = playerPaper.className;
//   const result = getResult(computerChoice, playerChoice);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", `img/${computerChoice}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = result;
// });

// const playerScissor = document.querySelector(".scissor");
// playerScissor.addEventListener("click", function () {
//   const computerChoice = getComputerChoice();
//   const playerChoice = playerScissor.className;
//   const result = getResult(computerChoice, playerChoice);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", `img/${computerChoice}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = result;
// });

