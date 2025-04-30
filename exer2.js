//1 -  Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, 
// bunların hervbirini 1'den başlayarak alt alta yazalım.

const seriesList = list => {
  
  list.forEach((series, index) => {
    console.log(`${index+1}. ${series}`) 
  });
};

seriesList(["Firefly", "The Mandalorian","Breaking Bad", "Shawnshawk", "Inception"]);
/* output: 1. Firefly 2. The Mandalorian 3. Breaking Bad */