//orang mau lamar kerja syaratnya dia harus berumur 17 tahun keatas
//dia harus berasal dari kota gotham
//misalnya dia dibawah 30 tahun dia masuk ke divisi junior
//diatas 30 tahun keatas masuk ke divisi senior
//memenuhi print "selamat keterima di divisi junior" atau sebaliknya 

var umur = 20
var asal = "gotham"

if (umur < 30 && asal === "gotham") console.log("Selamat keterima di divisi junior")
if (umur >= 30 && asal === "gotham") console.log("Selamat keterima di divisi senior")
else console.log ("Maaf anda tidak memenuhi kriteria")  

