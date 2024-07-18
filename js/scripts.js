function calculateBMI(event) {
    event.preventDefault(); // Mencegah form dari submit otomatis

    // Mendapatkan input dari pengguna
    let weight = document.getElementById('input-berat-badan').value; // Berat badan dalam kilogram
    let height = document.getElementById('input-tinggi-badan').value; // Tinggi badan dalam centimeter

    // Konversi tinggi badan dari centimeter ke meter
    height = height / 100;

    // Validasi input
    if (weight <= 0 || height <= 0) {
        document.getElementById('bmi-result').innerText = "Masukkan berat dan tinggi yang valid!";
        return;
    }

    // Menghitung BMI
    let bmi = weight / (height * height);

    // Menentukan kategori BMI
    let category = "";
    if (bmi < 18.5) {
        category = "Berat Badan Kurang";
    } else if (bmi < 24.9) {
        category = "Berat Badan Normal";
    } else if (bmi < 29.9) {
        category = "Berat Badan Berlebih";
    } else {
        category = "Obesitas";
    }

    // Menampilkan hasil
    document.getElementById('bmi-result').innerText =  bmi.toFixed(2) + " (" + category + ")";

    // Menampilkan hasil di konsol (opsional)
    console.log( bmi.toFixed(2) + " (" + category + ")");
}
