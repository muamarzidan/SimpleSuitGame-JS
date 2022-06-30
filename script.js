var nama = alert('Kamu mulai permainan');
var tanya = true;

while (true) {
        var player = prompt('Luffy, Bleach, Naruto');

        var comp = Math.random;

        if ( comp < 0.34 ) {
            comp = 'Naruto';
        } else if ( comp >= 0.34 && comp < 0.67 ) {
            comp = 'Bleach';
        } else {
            comp = 'Luffy';
        }


        var hasil = '';

        if ( player == comp ) {
            hasil = 'Kamu dan komputer Seri!';
        } else if ( player == 'Naruto' ) {
            if ( comp == 'Bleach') {
                hasil = 'Kamu Menang!';
            } else {
                hasil = 'Kamu Menang';
            }
        } else if ( player == 'Bleach') {
            if ( comp == 'Naruto') {
                hasil = ' Kamu Kalah';
            }else {
                hasil = 'Kamu Menang';
            }
        } else if ( player == 'Luffy') {
            if ( comp == 'Naruto') {
                hasil = 'Kamu Kalah';
            } else {
                hasil = 'Kamu Kalah';
            }
        } else {
            hasil = 'Salah input';
        }

        alert  ('Kamu memilih : ' + player + '\ndan komputer memilih : ' + comp + '\nMaka Hasilnya : ' + hasil);

        tanya = confirm('Lagi?');
        if (tanya == true) {
            continue;
        } else {
            tutug.break;
        }
}





























// var s = '';

// for ( var i = 10; i > 0; i--) {
//     for ( var j = 0; j < i; j++) {
//         s += '+';
//     }
//     s += '\n';
// }
// console.log(s);

// var jumlahmobil = 10;
// var mobiljalan = 6;

// for ( var nomormobil = 1; nomormobil <= jumlahmobil; nomormobil++) {
//     if (nomormobil <= mobiljalan) {
//         console.log("Mobil ke-" + nomormobil + " berjalan dengan baik");
//     }else if (nomormobil === 8) {
//         console.log("Mobil ke-" + nomormobil + " lembur cuuyy");
//     } else {
//         console.log("Mobil ke-" + nomormobil + " tidak berjalan dengan baik");
//     }
// }  

// var jumlahmobil = 10;
// var mobilawal = 6;
// var

// while(nomormobil <= mobilawal ) {
//     console.log("Mobil ke " + nomormobil + " berjalan dengan baik");
//     nomormobil++;
// }

// for ( nomormobil = 7; nomormobil <= jumlahmobil; nomormobil++) {
//     console.log("Mobil ke " + nomormobil + " tidak berjaalan dengan baik");
// }
// var mobil_jalan = 1;
// while(mobil_jalan <= 10 ) {
//     console.log("Mobil ke " + mobil_jalan + " berhasil berjalan");
//     mobil_jalan++;
// }

// for ( var mobilawal = 1; mobilawal <= 10; mobilawal++) {
//     console.log("Mobil ke " + mobilawal + " berjalan dengan baik");
// }
