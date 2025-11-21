let keranjang = [];
let total = 0;

function tambahKeKeranjang(nama, harga, qtyId, ukuranId, tanggalId) {
    const qty = parseInt(document.getElementById(qtyId).value);
    const ukuran = document.getElementById(ukuranId).value;
    const tanggal = document.getElementById(tanggalId).value;
    
    if (qty > 0 && tanggal) {
        const subtotal = qty * harga;
        keranjang.push({ nama, qty, ukuran, tanggal, subtotal });
        total += subtotal;
        updateKeranjang();
        // Reset input
        document.getElementById(qtyId).value = '';
        document.getElementById(tanggalId).value = '';
    } else {
        alert('Harap isi jumlah dan tanggal pemesanan!');
    }
}

function updateKeranjang() {
    const daftar = document.getElementById('daftar-keranjang');
    daftar.innerHTML = '';
    keranjang.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nama} - ${item.qty} pcs - Ukuran: ${item.ukuran} - Tanggal: ${item.tanggal} - Rp ${item.subtotal.toLocaleString()}`;
        daftar.appendChild(li);
    });
    document.getElementById('total').textContent = total.toLocaleString();
}

function checkout() {
    if (keranjang.length > 0) {
        alert(`Checkout berhasil! Total pembayaran: Rp ${total.toLocaleString()}`);
        resetKeranjang();
    } else {
        alert('Keranjang kosong!');
    }
}

function resetKeranjang() {
    keranjang = [];
    total = 0;
    updateKeranjang();
}