function readURL(input) {
  // Mengecek apakah ada file yang diunggah
  if (input.files && input.files[0]) {
    // Membuat objek FileReader baru
    let reader = new FileReader();
    reader.onload = function (e) {
      $(".image-upload-wrap").hide(); //Sembunyikan wrapper untuk mengunggah gambar
      $(".file-upload-image").attr('src', e.target.result); // Set atribut 'src' gambar dengan data URL gambar yang diunggah
      $(".file-upload-content").show(); // Tampilkan konten setelah mengunggah gambar
      $(".image-title").html(input.files[0].name); // Menetapkan judul gambar dengan nama file yang diunggah
    };
    reader.readAsDataURL(input.files[0]); // Membaca dan mengonversi gambar menjadi data URL
  } else {
    removeUpload(); // Jika tidak ada file yang diunggah, panggil fungsi removeUpload
  }

}

function removeUpload() {
  $(".file-upload-input").val(""); // Mengosongkan nilai input berkas
  $(".file-upload-image").attr('src', '#'); // Mengatur atribut 'src' gambar menjadi '#' untuk menghapus gambar yang ditampilkan
  $(".file-upload-content").hide(); // Sembunyikan konten yang menampilkan gambar
  $(".image-upload-wrap").show(); // Tampilkan wrapper untuk mengunggah gambar
}

// Menambahkan event handler saat aksi "dragover" terjadi pada elemen dengan kelas "image-upload-wrap"
$(".image-upload-wrap").bind('dragover', function () {
  // Menambahkan kelas CSS "image-dropping" ke elemen untuk mengubah tampilan visual
  $(".image-upload-wrap").addClass('image-dropping');
})

// Menambahkan event handler saat aksi "dragleave" terjadi pada elemen dengan kelas "image-upload-wrap"
$(".image-upload-wrap").bind('dragleave', function () {
  // Menghapus kelas CSS "image-dropping" dari elemen untuk mengembalikan tampilan semula
  $(".image-upload-wrap").removeClass('image-dropping');
})