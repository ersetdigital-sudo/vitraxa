/* script 0 */

/* ============================================================
   data.js — identitas situs, katalog, FAQ, konten legal.
   Menambah game / layanan = menambah satu objek di GAMES / PPOB.
   ============================================================ */

/* Identitas & kontak. Baris yang dikosongkan otomatis disembunyikan. */
const SITE = {
  name: 'Vitraxa Globals',
  first: 'vitraxa',
  second: 'globals',
  email: 'halo@vitraxaglobals.com',
  hours: 'Setiap hari, 08.00–22.00 WIB',
  phone: '',
  whatsapp: '',
  address: '',
  legalName: ''
};

/* Metode bayar. fee: persen dari total, atau flat. Dibulatkan ke atas. */
const PAY_METHODS = [
  { id: 'qris',      name: 'QRIS',             desc: 'Semua e-wallet & m-banking', mark: 'QR', color: '#121212', fee: { type: 'percent', value: 0.7 } },
  { id: 'dana',      name: 'DANA',             desc: 'Saldo DANA',                 mark: 'DA', color: '#1E88E5', fee: { type: 'percent', value: 1.5 } },
  { id: 'ovo',       name: 'OVO',              desc: 'Saldo OVO',                  mark: 'OV', color: '#5B3FD0', fee: { type: 'percent', value: 1.5 } },
  { id: 'gopay',     name: 'GoPay',            desc: 'Saldo GoPay',                mark: 'GP', color: '#0E9F6E', fee: { type: 'percent', value: 1.5 } },
  { id: 'shopeepay', name: 'ShopeePay',        desc: 'Saldo ShopeePay',            mark: 'SP', color: '#EE4D2D', fee: { type: 'percent', value: 1.5 } },
  { id: 'va',        name: 'Virtual Account',  desc: 'BCA, BNI, BRI, Mandiri, Permata', mark: 'VA', color: '#475569', fee: { type: 'flat', value: 4000 } },
  { id: 'bank',      name: 'Transfer Bank',    desc: 'Transfer manual antarbank',  mark: 'TB', color: '#8A5A00', fee: { type: 'flat', value: 2500 } }
];


const mk = (pre, list, unit) => list.map((r, i) => ({ id: pre + (i + 1), name: r[0], price: r[1], tag: r[2] || '', was: 0 }));

const GAMES = [
  { id: 'mlbb', name: 'Mobile Legends', cat: 'MOBA', color: '#1F5FFF', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0EyMUNBRiIvPjxwYXRoIGQ9Ik0wIDQwMEw0MDAgMTUwVjQwMFoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEwIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAwIDIwMCkgc2NhbGUoMS4wKSB0cmFuc2xhdGUoLTIwMCAtMjA1KSI+PHBhdGggZD0iTTEwNSAxNjBMMTYwIDEwNUgyNDBMMjk1IDE2MEwyMDAgMzA1WiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTEwNSAxNjBIMjk1TTE2MCAxMDVMMTg1IDE2MEwyMDAgMzA1TTI0MCAxMDVMMjE1IDE2MEwyMDAgMzA1IiBmaWxsPSJub25lIiBzdHJva2U9IiNBMjFDQUYiIHN0cm9rZS13aWR0aD0iOSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==', unit: 'Diamonds', desc: 'Top up Diamonds Mobile Legends: Bang Bang.',
    fields: [
      { key: 'id', label: 'User ID', digits: true, min: 6, max: 12, placeholder: '12345678', help: 'Buka profil di game untuk melihat User ID.' },
      { key: 'zone', label: 'Zone ID', digits: true, min: 3, max: 5, placeholder: '1234', help: 'Angka dalam kurung di samping User ID.' }],
    products: mk('d', [['3 Diamonds', 1200], ['12 Diamonds', 3500], ['59 Diamonds', 16000], ['86 Diamonds', 22500, 'Populer', 24000], ['172 Diamonds', 44000], ['257 Diamonds', 65000], ['514 Diamonds', 129000], ['Weekly Diamond Pass', 29500, 'Hemat']]) },
  { id: 'ff', name: 'Free Fire', cat: 'Battle Royale', color: '#FF8A00', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0VBNTgwQyIvPjxwYXRoIGQ9Ik0wIDQwMEw0MDAgMTUwVjQwMFoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEwIi8+PHBhdGggZD0iTTIwNSA3OEMyMzIgMTE4IDI4MiAxNDggMjgyIDIxNEMyODIgMjY2IDI0NiAzMDggMjAwIDMwOEMxNTQgMzA4IDExOCAyNzAgMTE4IDIyMkMxMTggMTg2IDEzNiAxNjAgMTU2IDE0MkMxNTggMTY2IDE2OCAxODAgMTgwIDE4NkMxNzYgMTUwIDE4NiAxMTAgMjA1IDc4WiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTIwMyAxODhDMjE4IDIxMiAyMzggMjI2IDIzOCAyNTZDMjM4IDI4MCAyMjIgMjk2IDIwMCAyOTZDMTc4IDI5NiAxNjQgMjgwIDE2NCAyNThDMTY0IDIzNiAxODggMjI0IDIwMyAxODhaIiBmaWxsPSIjRUE1ODBDIi8+PC9zdmc+', unit: 'Diamonds', desc: 'Top up Diamonds Free Fire.',
    fields: [{ key: 'id', label: 'Player ID', digits: true, min: 8, max: 12, placeholder: '123456789', help: 'Player ID ada di halaman profil.' }],
    products: mk('d', [['12 Diamonds', 1900], ['50 Diamonds', 7500], ['70 Diamonds', 10000, 'Populer'], ['140 Diamonds', 19500], ['355 Diamonds', 49000], ['720 Diamonds', 98000], ['Membership Mingguan', 29000, 'Hemat']]) },
  { id: 'pubg', name: 'PUBG Mobile', cat: 'Battle Royale', color: '#D9A400', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0Q5NzcwNiIvPjxwYXRoIGQ9Ik0wIDQwMEw0MDAgMTUwVjQwMFoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEwIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMjAwIiByPSIxMTgiIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9Ijk0IiBmaWxsPSJub25lIiBzdHJva2U9IiNEOTc3MDYiIHN0cm9rZS13aWR0aD0iOSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjMyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssQXJpYWwsc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSI4OCIgbGV0dGVyLXNwYWNpbmc9Ii0yIiBmaWxsPSIjRDk3NzA2Ij5VQzwvdGV4dD48L3N2Zz4=', unit: 'UC', desc: 'Top up UC PUBG Mobile.',
    fields: [{ key: 'id', label: 'Player ID', digits: true, min: 8, max: 12, placeholder: '5123456789', help: 'Player ID ada di halaman profil.' }],
    products: mk('u', [['60 UC', 15000], ['325 UC', 77000, 'Populer'], ['660 UC', 152000], ['1.800 UC', 380000], ['3.850 UC', 760000], ['8.100 UC', 1520000]]) },
  { id: 'genshin', name: 'Genshin Impact', cat: 'RPG', color: '#6E56F0', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzA4OTFCMiIvPjxwYXRoIGQ9Ik0wIDQwMEw0MDAgMTUwVjQwMFoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEwIi8+PHBhdGggZD0iTTE5MCA3OFEyMDYgMTgyIDMxOCAxOThRMjA2IDIxNCAxOTAgMzE4UTE3NCAyMTQgNjIgMTk4UTE3NCAxODIgMTkwIDc4WiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwIDQpIi8+PHBhdGggZD0iTTMxMiA2NlEzMTggMTAwIDM0NiAxMDZRMzE4IDExMiAzMTIgMTQ2UTMwNiAxMTIgMjc4IDEwNlEzMDYgMTAwIDMxMiA2NloiIGZpbGw9IiNmZmYiLz48L3N2Zz4=', unit: 'Genesis Crystals', desc: 'Top up Genesis Crystals Genshin Impact.',
    fields: [
      { key: 'id', label: 'UID', digits: true, min: 9, max: 10, placeholder: '800123456', help: 'UID tampil di pojok kanan bawah layar.' },
      { key: 'server', label: 'Server', type: 'select', options: ['Asia', 'America', 'Europe', 'TW, HK, MO'] }],
    products: mk('g', [['60 Genesis Crystals', 15000], ['300 + 30 Genesis Crystals', 75000], ['980 + 110 Genesis Crystals', 229000, 'Populer'], ['1.980 + 260 Genesis Crystals', 459000], ['3.280 + 600 Genesis Crystals', 749000], ['Blessing of the Welkin Moon', 69000, 'Hemat']]) },
  { id: 'valorant', name: 'Valorant', cat: 'FPS', color: '#FF4655', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0UxMUQ0OCIvPjxwYXRoIGQ9Ik0wIDQwMEw0MDAgMTUwVjQwMFoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEwIi8+PHBhdGggZD0iTTg4IDExOEgxNjRMMjAwIDIzMkwyMzYgMTE4SDMxMkwyMjQgMzAwSDE3NloiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==', unit: 'VP', desc: 'Top up Valorant Points.',
    fields: [{ key: 'id', label: 'Riot ID', placeholder: 'NamaAnda#1234', pattern: '^.{3,16}#[A-Za-z0-9]{3,5}$', msg: 'Format Riot ID: Nama#TAG, lalu 3–5 huruf atau angka setelah tanda #.', help: 'Tulis lengkap beserta tanda # dan tag.' }],
    products: mk('v', [['475 VP', 49000], ['1.000 VP', 99000, 'Populer'], ['2.050 VP', 199000], ['3.650 VP', 349000], ['5.350 VP', 499000], ['11.000 VP', 999000]]) },
  { id: 'hok', name: 'Honor of Kings', cat: 'MOBA', color: '#E8B100', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzdDM0FFRCIvPjxwYXRoIGQ9Ik0wIDQwMEw0MDAgMTUwVjQwMFoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEwIi8+PHBhdGggZD0iTTIwMCA4MkwzMDQgMTE4VjIxMEMzMDQgMjY4IDI1OCAzMDQgMjAwIDMyOEMxNDIgMzA0IDk2IDI2OCA5NiAyMTBWMTE4WiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTE0NiAyMzJMMTU2IDE2MEwxODQgMTk2TDIwMCAxNTZMMjE2IDE5NkwyNDQgMTYwTDI1NCAyMzJaIiBmaWxsPSIjN0MzQUVEIiBzdHJva2U9IiM3QzNBRUQiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxyZWN0IHg9IjE0NiIgeT0iMjQwIiB3aWR0aD0iMTA4IiBoZWlnaHQ9IjE0IiByeD0iNSIgZmlsbD0iIzdDM0FFRCIvPjwvc3ZnPg==', unit: 'Tokens', desc: 'Top up Tokens Honor of Kings.',
    fields: [{ key: 'id', label: 'Player ID', digits: true, min: 6, max: 14, placeholder: '1234567890', help: 'Player ID ada di halaman profil.' }],
    products: mk('t', [['16 Tokens', 4000], ['80 Tokens', 19000], ['240 Tokens', 55000, 'Populer'], ['400 Tokens', 89000], ['800 Tokens', 175000], ['1.200 Tokens', 260000]]) },
  { id: 'roblox', name: 'Roblox', cat: 'Voucher', color: '#E2231A', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzI1NjNFQiIvPjxwYXRoIGQ9Ik0wIDQwMEw0MDAgMTUwVjQwMFoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEwIi8+PGcgdHJhbnNmb3JtPSJyb3RhdGUoLTE0IDIwMCAyMDApIj48cmVjdCB4PSIxMDQiIHk9IjEwNCIgd2lkdGg9IjE5MiIgaGVpZ2h0PSIxOTIiIHJ4PSIyOCIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjE2NCIgeT0iMTY0IiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHJ4PSIxMCIgZmlsbD0iIzI1NjNFQiIvPjwvZz48L3N2Zz4=', unit: 'Robux', desc: 'Top up Robux untuk akun Roblox.',
    fields: [{ key: 'id', label: 'Username Roblox', placeholder: 'NamaPengguna', pattern: '^[A-Za-z0-9_]{3,20}$', msg: 'Username 3–20 karakter: huruf, angka, atau garis bawah.', help: 'Pastikan username sesuai akun tujuan.' }],
    products: mk('r', [['80 Robux', 15000], ['400 Robux', 75000, 'Populer'], ['800 Robux', 149000], ['1.700 Robux', 299000], ['4.500 Robux', 749000]]) },
  { id: 'codm', name: 'Call of Duty Mobile', cat: 'FPS', color: '#2A2A2A', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzE2QTM0QSIvPjxwYXRoIGQ9Ik0wIDQwMEw0MDAgMTUwVjQwMFoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEwIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMjAwIiByPSI5MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjI0Ii8+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0yMDAgNjZWMTE4TTIwMCAyODJWMzM0TTY2IDIwMEgxMThNMjgyIDIwMEgzMzQiLz48L2c+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMjAwIiByPSIxNiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==', unit: 'CP', desc: 'Top up COD Points Call of Duty Mobile.',
    fields: [{ key: 'id', label: 'Open ID', digits: true, min: 8, max: 20, placeholder: '6742123456789', help: 'Open ID ada di pengaturan akun.' }],
    products: mk('c', [['31 CP', 5000], ['62 CP', 10000], ['127 CP', 20000], ['321 CP', 50000, 'Populer'], ['645 CP', 100000], ['1.373 CP', 210000], ['2.060 CP', 310000]]) },
  { id: 'steam', name: 'Steam Wallet', cat: 'Voucher', color: '#1B6FA8', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzBGNzY2RSIvPjxwYXRoIGQ9Ik0wIDQwMEw0MDAgMTUwVjQwMFoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEwIi8+PHJlY3QgeD0iODQiIHk9IjExOCIgd2lkdGg9IjIzMiIgaGVpZ2h0PSIxNjgiIHJ4PSIzMCIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjIyNCIgeT0iMTc4IiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjU4IiByeD0iMjkiIGZpbGw9IiMwRjc2NkUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxjaXJjbGUgY3g9IjI1NiIgY3k9IjIwNyIgcj0iMTEiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNODQgMTUwQzg0IDEzMiA5OCAxMTggMTE2IDExOEgyNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBGNzY2RSIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9Ii4zNSIvPjwvc3ZnPg==', unit: 'Steam Wallet', desc: 'Kode Steam Wallet dikirim ke email.',
    fields: [{ key: 'email', label: 'Email Penerima Kode', type: 'email', placeholder: 'nama@email.com', help: 'Kode voucher dikirim ke email ini.' }],
    products: mk('s', [['Steam Wallet Rp12.000', 14000], ['Steam Wallet Rp45.000', 50000], ['Steam Wallet Rp60.000', 66000], ['Steam Wallet Rp90.000', 99000, 'Populer'], ['Steam Wallet Rp120.000', 130000], ['Steam Wallet Rp250.000', 270000], ['Steam Wallet Rp400.000', 430000]]) },
];

const PHONE_FIELD = { key: 'phone', label: 'Nomor HP', type: 'phone', placeholder: '0812 3456 7890', help: 'Nomor tujuan, awalan 08 atau +62.' };

const PPOB = [
  { id: 'pulsa', name: 'Pulsa', group: 'Prabayar', icon: 'pulsa', color: '#D9480F', ink: '#fff', desc: 'Isi pulsa semua operator.',
    kw: 'isi pulsa telkomsel indosat xl axis tri smartfren',
    fields: [{ ...PHONE_FIELD, detect: true, operator: true }],
    products: mk('pl', [['Pulsa Rp5.000', 6500], ['Pulsa Rp10.000', 11500], ['Pulsa Rp15.000', 16500], ['Pulsa Rp20.000', 21500, 'Populer'], ['Pulsa Rp25.000', 26500], ['Pulsa Rp30.000', 31500], ['Pulsa Rp50.000', 51500], ['Pulsa Rp100.000', 101500]]) },
  { id: 'data', name: 'Paket Data', group: 'Prabayar', icon: 'data', color: '#2563EB', ink: '#fff', desc: 'Kuota internet semua operator.',
    kw: 'kuota internet gb paket data',
    fields: [{ ...PHONE_FIELD, detect: true, operator: true }],
    products: mk('dt', [['Data 1 GB / 3 hari', 9500], ['Data 3 GB / 30 hari', 24000], ['Data 6 GB / 30 hari', 42000], ['Data 12 GB / 30 hari', 68000, 'Populer', 72000], ['Data 25 GB / 30 hari', 99000], ['Data 45 GB / 30 hari', 139000]]) },
  { id: 'pln', name: 'Token PLN', group: 'Prabayar', icon: 'pln', color: '#A16207', ink: '#fff', desc: 'Beli token listrik prabayar.',
    kw: 'listrik token pln prabayar meteran',
    fields: [{ key: 'meter', label: 'Nomor Meter / ID Pelanggan', digits: true, min: 11, max: 12, placeholder: '12345678901', help: '11–12 digit, tertera di meteran atau struk sebelumnya.' }],
    products: mk('pn', [['Token Rp20.000', 22000], ['Token Rp50.000', 52500], ['Token Rp100.000', 102500, 'Populer', 104000], ['Token Rp200.000', 202500], ['Token Rp500.000', 502500], ['Token Rp1.000.000', 1002500]]) },
  { id: 'plnpasca', name: 'Tagihan Listrik Pascabayar', short: 'Listrik Pascabayar', group: 'Tagihan', postpaid: true, icon: 'pasca', color: '#0F766E', ink: '#fff', desc: 'Cek dan bayar tagihan listrik bulanan.',
    kw: 'listrik tagihan pascabayar pln bulanan',
    fields: [{ key: 'idpel', label: 'ID Pelanggan', digits: true, min: 12, max: 12, placeholder: '123456789012', help: '12 digit ID pelanggan PLN.' }] },
  { id: 'bpjs', name: 'BPJS Kesehatan', group: 'Tagihan', postpaid: true, icon: 'bpjs', color: '#15803D', ink: '#fff', desc: 'Bayar iuran BPJS Kesehatan.',
    kw: 'bpjs kesehatan iuran jkn',
    fields: [
      { key: 'va', label: 'Nomor VA Keluarga', digits: true, min: 11, max: 16, placeholder: '8888801234567890', help: 'Nomor Virtual Account keluarga BPJS.' },
      { key: 'months', label: 'Bayar untuk', type: 'select', options: ['1 bulan', '2 bulan', '3 bulan', '6 bulan', '12 bulan'] }] },
  { id: 'pdam', name: 'PDAM', group: 'Tagihan', postpaid: true, icon: 'pdam', color: '#0369A1', ink: '#fff', desc: 'Bayar tagihan air PDAM.',
    kw: 'air pdam tagihan',
    fields: [
      { key: 'area', label: 'Wilayah PDAM', type: 'select', options: ['Jakarta', 'Bandung', 'Surabaya', 'Semarang', 'Medan', 'Makassar', 'Yogyakarta', 'Denpasar'] },
      { key: 'idpel', label: 'Nomor Pelanggan', digits: true, min: 6, max: 14, placeholder: '1234567', help: 'Tertera di bukti tagihan air.' }] },
  { id: 'internet', name: 'Internet & TV', group: 'Tagihan', postpaid: true, icon: 'inet', color: '#4F46E5', ink: '#fff', desc: 'Tagihan internet rumah dan TV kabel.',
    kw: 'internet tv kabel wifi indihome biznet myrepublic',
    fields: [
      { key: 'provider', label: 'Penyedia', type: 'select', options: ['IndiHome', 'Biznet Home', 'MyRepublic', 'First Media', 'Oxygen.id'] },
      { key: 'idpel', label: 'Nomor Pelanggan', digits: true, min: 8, max: 14, placeholder: '1234567890', help: 'Tertera di bukti tagihan.' }] },
  { id: 'ewallet', name: 'Saldo E-Wallet', group: 'Prabayar', icon: 'ewallet', color: '#7E22CE', ink: '#fff', desc: 'Isi saldo DANA, OVO, GoPay, dan lainnya.',
    kw: 'dompet digital dana ovo gopay shopeepay linkaja saldo',
    fields: [
      { key: 'provider', label: 'E-Wallet', type: 'select', options: ['DANA', 'OVO', 'GoPay', 'ShopeePay', 'LinkAja'] },
      { ...PHONE_FIELD, label: 'Nomor Akun E-Wallet', help: 'Nomor HP yang terdaftar di e-wallet.' }],
    products: mk('ew', [['Saldo Rp20.000', 22000], ['Saldo Rp50.000', 52500, 'Populer'], ['Saldo Rp100.000', 102500], ['Saldo Rp200.000', 202500], ['Saldo Rp500.000', 502500]]) },
  { id: 'voucher', name: 'Voucher Digital', group: 'Prabayar', icon: 'voucher', color: '#BE185D', ink: '#fff', desc: 'Voucher belanja, musik, dan hiburan.',
    kw: 'voucher google play spotify netflix gift card',
    fields: [{ key: 'email', label: 'Email Penerima Voucher', type: 'email', placeholder: 'nama@email.com', help: 'Kode voucher dikirim ke email ini.' }],
    products: mk('vc', [['Google Play Rp50.000', 52500], ['Google Play Rp100.000', 102500, 'Populer'], ['Spotify Premium 1 Bulan', 55000], ['Netflix Gift Card Rp100.000', 105000], ['Voucher Belanja Rp100.000', 101500]]) }
];

GAMES.forEach(g => { g.kind = 'game'; });
PPOB.forEach(p => { p.kind = 'ppob'; });

const Catalog = {
  service(kind, id) { return (kind === 'game' ? GAMES : PPOB).find(s => s.id === id) || null; },
  product(svc, pid) { return (svc && svc.products || []).find(p => p.id === pid) || null; },
  href(svc, pid) { return '#/' + (svc.kind === 'game' ? 'topup' : 'isi-ulang') + '/' + svc.id + (pid ? '?p=' + pid : ''); },
  /* Pilihan kurasi beranda — ganti dengan data penjualan sebenarnya. */
  featured: [['ppob', 'pulsa', 'pl4'], ['ppob', 'pln', 'pn3'], ['ppob', 'data', 'dt4'], ['ppob', 'ewallet', 'ew2'], ['game', 'mlbb', 'd4'], ['game', 'ff', 'd3'], ['game', 'valorant', 'v2'], ['game', 'genshin', 'g3']]
};

const PAGES = [
  { label: 'Beranda', href: '#/', sub: 'Halaman utama', kw: 'home' },
  { label: 'PPOB', href: '#/isi-ulang', sub: 'Semua layanan PPOB', kw: 'tagihan pulsa listrik' },
  { label: 'Top Up Game', href: '#/topup', sub: 'Semua game', kw: 'topup diamond voucher' },
  { label: 'Cek Transaksi', href: '#/pesanan', sub: 'Cek status dengan nomor invoice', kw: 'riwayat invoice pesanan status' },
  { label: 'Bantuan', href: '#/bantuan', sub: 'FAQ & kontak', kw: 'faq kontak cs' },
  { label: 'Syarat & Ketentuan', href: '#/bantuan/syarat', sub: 'Aturan penggunaan layanan', kw: 'terms' },
  { label: 'Kebijakan Privasi', href: '#/bantuan/privasi', sub: 'Cara kami memakai data', kw: 'privacy data' }
];

const FAQ = [
  ['Bagaimana cara memesan?', 'Pilih layanan atau game, isi data tujuan, pilih nominal, lalu pilih metode bayar. Setelah pesanan dibuat, selesaikan pembayaran dari halaman detail pesanan.'],
  ['Apa saja metode pembayarannya?', 'QRIS, DANA, OVO, GoPay, ShopeePay, Virtual Account, dan Transfer Bank. Biaya admin tiap metode ditampilkan sebelum Anda membayar.'],
  ['Berapa lama batas waktu pembayaran?', 'Setiap pesanan punya batas pembayaran 24 jam. Lewat dari itu, pesanan dibatalkan otomatis.'],
  ['Di mana saya memantau status pesanan?', 'Buka menu Cek Transaksi lalu masukkan nomor invoice. Status yang dipakai: Menunggu Pembayaran, Diproses, Berhasil, Gagal, dan Dibatalkan. Simpan nomor invoice Anda, karena riwayat tidak disimpan di situs ini.'],
  ['Salah memasukkan ID atau nomor tujuan, bagaimana?', 'Periksa kembali data sebelum membayar. Pesanan yang sudah berhasil diproses tidak dapat dibatalkan. Hubungi kami bila ada kendala dan siapkan nomor invoice Anda.'],
  ['Bisakah membatalkan pesanan?', 'Bisa, selama pesanan masih berstatus Menunggu Pembayaran. Buka detail pesanan lalu pilih Batalkan Pesanan.'],
  ['Apakah saya perlu membuat akun?', 'Tidak perlu. Situs ini juga tidak menyimpan riwayat pesanan di perangkat Anda. Cukup simpan nomor invoice untuk mengecek status pesanan.']
];

const LEGAL = {
  syarat: { title: 'Syarat & Ketentuan', items: [
    ['Penggunaan layanan', 'Dengan memakai situs ini, Anda menyatakan data yang dimasukkan benar dan transaksi dilakukan untuk keperluan yang sah.'],
    ['Ketepatan data', 'Anda bertanggung jawab atas ketepatan ID game, nomor tujuan, nomor pelanggan, atau email. Kesalahan input yang sudah berhasil diproses tidak dapat dibatalkan.'],
    ['Harga dan biaya', 'Harga dan biaya admin ditampilkan sebelum pesanan dibuat. Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.'],
    ['Pembayaran', 'Pesanan harus dibayar sebelum batas waktu yang tertera. Pesanan yang melewati batas waktu dibatalkan otomatis.'],
    ['Pemrosesan dan pengembalian dana', 'Pesanan diproses setelah pembayaran terkonfirmasi. Bila pesanan gagal, pengembalian dana mengikuti metode bayar yang digunakan.'],
    ['Perubahan ketentuan', 'Ketentuan dapat diperbarui dari waktu ke waktu. Versi terbaru selalu tersedia di halaman ini.']
  ] },
  privasi: { title: 'Kebijakan Privasi', items: [
    ['Data yang kami proses', 'Kami memproses data yang Anda isi untuk menyelesaikan pesanan, seperti ID game, nomor tujuan, email penerima, dan metode bayar.'],
    ['Riwayat tidak disimpan', 'Karena situs ini bersifat publik, riwayat pesanan tidak disimpan di perangkat Anda. Anda mengecek transaksi dengan nomor invoice yang diberikan saat pesanan dibuat.'],
    ['Penggunaan data', 'Data dipakai hanya untuk memproses pesanan, memberi dukungan, dan mencegah penyalahgunaan layanan.'],
    ['Berbagi data', 'Data dibagikan kepada penyedia pembayaran dan penyedia produk sebatas yang diperlukan untuk menyelesaikan transaksi.'],
    ['Pertanyaan', 'Untuk pertanyaan terkait privasi, hubungi kami lewat kontak di halaman Bantuan.']
  ] }
};



/* script 1 */

/* icons.js — ikon PPOB duotone (viewBox 48) + ikon UI (viewBox 24) + logo. Semua currentColor. */
const PPOB_ICONS = {
  pulsa: '<rect x="13" y="5" width="22" height="38" rx="6"/><path fill="none" d="M21 10h6M22 37h4"/>',
  data: '<circle cx="24" cy="24" r="17"/><path fill="none" d="M7 24h34M24 7c-7 6-7 28 0 34M24 7c7 6 7 28 0 34"/>',
  pln: '<path d="M27 4 10 27h12l-2 17 18-23H26z"/>',
  pasca: '<path d="M12 5h24v38l-4-3-4 3-4-3-4 3-4-3-4 3z"/><path fill="none" d="M18 14h12M18 21h12M18 28h7"/>',
  bpjs: '<path d="M24 4 39 10v13c0 9-6 16-15 20C15 39 9 32 9 23V10z"/><path fill="none" d="M24 16v14M17 23h14"/>',
  pdam: '<path d="M24 4S11 19 11 29a13 13 0 0 0 26 0C37 19 24 4 24 4z"/><path fill="none" d="M18 30a6 6 0 0 0 6 6"/>',
  inet: '<rect x="5" y="9" width="38" height="26" rx="6"/><path fill="none" d="M17 42h14M16.5 22a10 10 0 0 1 15 0M20 26a5 5 0 0 1 8 0"/><circle cx="24" cy="30" r="1.2" fill="currentColor" stroke="none"/>',
  ewallet: '<rect x="5" y="11" width="38" height="28" rx="7"/><path fill="none" d="M9 11l24-6 3 6"/><rect x="28" y="21" width="15" height="10" rx="4" fill="none"/><circle cx="34" cy="26" r="1.3" fill="currentColor" stroke="none"/>',
  voucher: '<path d="M5 15a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v4a5 5 0 0 0 0 10v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-4a5 5 0 0 0 0-10z"/><path fill="none" stroke-dasharray="3 4" d="M30 13v22"/><path fill="none" d="M14 20h8M14 27h6"/>'
};

function ppobIcon(name, size) {
  const s = size ? ` width="${size}" height="${size}"` : '';
  return `<svg class="ico-ppob" viewBox="0 0 48 48"${s} aria-hidden="true" focusable="false"><g fill="currentColor" fill-opacity=".22" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${PPOB_ICONS[name] || ''}</g></svg>`;
}

const UI_ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/>',
  auto: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  home: '<path d="M4 11 12 4l8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
  game: '<rect x="2.5" y="7" width="19" height="11" rx="5"/><path d="M7 10.5v4M5 12.5h4M15.5 11.5h.01M18 13.5h.01"/>',
  receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9.5 8h5M9.5 12h5"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17h.01"/>',
  chevR: '<path d="m9 6 6 6-6 6"/>',
  chevL: '<path d="m15 6-6 6 6 6"/>',
  chevD: '<path d="m6 9 6 6 6-6"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  play: '<path d="M7 4.5v15l12-7.5z"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
  alert: '<path d="M12 3 2.5 20h19z"/><path d="M12 10v5M12 17.5h.01"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1"/>'
};

function ui(name, size) {
  const s = size || 20;
  return `<svg class="ico" viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${UI_ICONS[name] || ''}</svg>`;
}

function logoMark(size) {
  const s = size || 36;
  return `<svg class="logo__mark" viewBox="0 0 48 48" width="${s}" height="${s}" aria-hidden="true" focusable="false"><rect x="8" y="8" width="32" height="32" rx="8" transform="rotate(45 24 24)" fill="#A21CAF"/><path d="M15 17l9 15 9-15" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="6" r="3.5" fill="#0EA5C6"/></svg>`;
}

function logoFull() {
  return `<a class="logo" href="#/" aria-label="${SITE.name} — Beranda">${logoMark(40)}<span class="logo__word"><b>${SITE.first}</b><span>${SITE.second}</span></span></a>`;
}



/* script 2 */

/* util.js — helper kecil */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const rp = n => 'Rp' + Math.round(n || 0).toLocaleString('id-ID');
const delay = ms => new Promise(r => setTimeout(r, ms));
const REDUCED = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

function fmtDate(ts) {
  const d = new Date(ts);
  const tgl = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  const jam = String(d.getHours()).padStart(2, '0') + '.' + String(d.getMinutes()).padStart(2, '0');
  return tgl + ', ' + jam;
}

function maskId(v) {
  v = String(v || '');
  if (v.includes('@')) {
    const [l, d] = v.split('@');
    return (l.slice(0, 2) + '•'.repeat(Math.max(2, l.length - 2))) + '@' + d;
  }
  if (v.length <= 4) return v.slice(0, 1) + '•'.repeat(Math.max(1, v.length - 1));
  return v.slice(0, 3) + '•'.repeat(v.length - 5) + v.slice(-2);
}
function maskName(n) { return String(n).split(' ').map(w => w[0] + '•'.repeat(Math.max(2, w.length - 1))).join(' '); }

function setTitle(t) { document.title = t ? t + ' — ' + SITE.name : SITE.name + ' — Semua Kebutuhan Digital, Satu Tempat'; }

function parseQuery(s) {
  const o = {}; new URLSearchParams(s || '').forEach((v, k) => { o[k] = v; }); return o;
}

async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch (e) {
    try {
      const t = document.createElement('textarea'); t.value = text; t.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(t); t.select(); const ok = document.execCommand('copy'); t.remove(); return ok;
    } catch (e2) { return false; }
  }
}

/* Operator seluler dari awalan nomor. */
const OPERATORS = [
  ['Telkomsel', ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853']],
  ['Indosat', ['0814', '0815', '0816', '0855', '0856', '0857', '0858']],
  ['XL', ['0817', '0818', '0819', '0859', '0877', '0878']],
  ['Axis', ['0831', '0832', '0833', '0838']],
  ['Tri', ['0895', '0896', '0897', '0898', '0899']],
  ['Smartfren', ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889']]
];
function normPhone(v) {
  let d = String(v || '').replace(/\D/g, '');
  if (d.startsWith('62')) d = '0' + d.slice(2);
  return d;
}
function detectOperator(v) {
  const d = normPhone(v);
  if (d.length < 4) return '';
  const hit = OPERATORS.find(o => o[1].includes(d.slice(0, 4)));
  return hit ? hit[0] : '';
}

/* Validasi satu field berdasarkan definisi di data.js. Mengembalikan pesan error atau ''. */
function validateField(f, raw) {
  const val = String(raw == null ? '' : raw).trim();
  if (!val) return f.type === 'select' ? `Pilih ${f.label.toLowerCase()}.` : `${f.label} wajib diisi.`;
  if (f.type === 'select') return f.options.includes(val) ? '' : `Pilihan ${f.label.toLowerCase()} tidak valid.`;
  if (f.type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val) ? '' : 'Format email belum benar. Tulis seperti nama@email.com.';
  if (f.type === 'phone') {
    const d = normPhone(val);
    if (!/^08\d{8,11}$/.test(d)) return 'Nomor HP harus diawali 08 atau +62, panjang 10–13 digit.';
    if (f.operator && !detectOperator(d)) return 'Awalan nomor tidak dikenali sebagai operator seluler.';
    return '';
  }
  if (f.digits && !/^\d+$/.test(val)) return `${f.label} hanya boleh berisi angka.`;
  if (f.min && val.length < f.min) return `${f.label} minimal ${f.min} karakter.`;
  if (f.max && val.length > f.max) return `${f.label} maksimal ${f.max} karakter.`;
  if (f.pattern && !new RegExp(f.pattern).test(val)) return f.msg || `${f.label} belum sesuai format.`;
  return '';
}

function statusClass(s) {
  return ({ 'Menunggu Pembayaran': 'warn', 'Diproses': 'info', 'Berhasil': 'ok', 'Gagal': 'bad', 'Dibatalkan': 'mute' })[s] || 'mute';
}
function statusBadge(s) { return `<span class="badge badge--${statusClass(s)}">${esc(s)}</span>`; }

function svcIconHTML(svc, cls) {
  if (svc.kind === 'game') return `<img class="${cls || 'svc-cover'}" src="${svc.cover}" alt="" width="64" height="64" loading="lazy">`;
  return `<span class="${cls || 'svc-ico'} svc-ico" style="--c:${svc.color};--ink:${svc.ink}">${ppobIcon(svc.icon)}</span>`;
}



/* script 3 */

/* store.js — helper penyimpanan kecil. Situs ini publik: TIDAK ada riwayat pesanan yang disimpan di perangkat. */
const Store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { /* abaikan */ } }
};



/* script 4 */

/* pricing.js — perhitungan harga UNTUK TAMPILAN di klien.
   Server WAJIB menghitung ulang harga dan biaya admin saat createOrder. */
const Pricing = {
  fee(method, base) {
    if (!method || base <= 0) return 0;
    return method.fee.type === 'percent' ? Math.ceil(base * method.fee.value / 100) : method.fee.value;
  },
  feeLabel(method) {
    return method.fee.type === 'percent' ? String(method.fee.value).replace('.', ',') + '%' : rp(method.fee.value);
  }
};



/* script 5 */

/* ============================================================
   api.js — SATU-SATUNYA pintu komunikasi ke server.

   KONTRAK (endpoint yang disarankan):
   inquireBill(payload)  POST /api/bills/inquiry   body {serviceId, fields}
        → BillInquiry { billRef, customerName, period, amount, adminFee, details:[{label,value}] }
   createOrder(payload)  POST /api/orders           body OrderPayload
        → Order
   getOrder(id)          GET  /api/orders/:id       → Order | null (404)
   payOrder(id)          POST /api/orders/:id/pay   → { order, redirectUrl? }
        Bila redirectUrl ada, UI mengarahkan ke gateway pembayaran.
   cancelOrder(id)       POST /api/orders/:id/cancel → Order

   OrderPayload {
     kind: 'game'|'ppob', serviceId, fields: {key: nilai},
     productId?  (prabayar / game),
     billRef?    (pascabayar, hasil inquireBill),
     methodId
   }
   Order {
     id (= nomor invoice), kind, serviceId, serviceName, productName,
     targets: [{label, value}],  subtotal, fee, total,
     methodId, methodName, status: 'Menunggu Pembayaran'|'Diproses'|'Berhasil'|'Gagal'|'Dibatalkan',
     createdAt, expiresAt, paidAt?, processingAt?, doneAt?, note?   (epoch ms)
   }
   Error: lempar ApiError(message) — pesan ditampilkan apa adanya di UI.

   Setelah go-live: hapus MockBackend, ganti isi objek Api dengan fetch().
   ============================================================ */

class ApiError extends Error {}

const MockBackend = {
  KEY: 'vx.mockdb',
  PROCESS_MS: 3500,
  EXPIRE_MS: 24 * 3600 * 1000,
  db() { try { return JSON.parse(sessionStorage.getItem(this.KEY) || '{}'); } catch (e) { return {}; } },
  save(db) { try { sessionStorage.setItem(this.KEY, JSON.stringify(db)); } catch (e) { /* abaikan */ } },
  hash(s) { return Array.from(String(s)).reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7); },
  NAMES: ['Budi Santoso', 'Siti Rahayu', 'Agus Wijaya', 'Dewi Lestari', 'Rizky Pratama', 'Nur Aini', 'Hendra Kusuma', 'Maya Sari'],

  async inquireBill({ serviceId, fields }) {
    await delay(700);
    const svc = Catalog.service('ppob', serviceId);
    if (!svc || !svc.postpaid) throw new ApiError('Layanan tidak mendukung cek tagihan.');
    for (const f of svc.fields) { const m = validateField(f, fields[f.key]); if (m) throw new ApiError(m); }
    const num = String(fields.idpel || fields.va || '');
    if (/(\d)\1{5,}$/.test(num)) throw new ApiError('Nomor pelanggan tidak ditemukan atau tidak punya tagihan aktif.');
    const h = this.hash(num + serviceId);
    const months = parseInt(fields.months, 10) || 1;
    const base = serviceId === 'bpjs' ? 42000 * months : 60000 + (h % 60) * 5000;
    const d = new Date();
    const period = d.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
    const details = [{ label: 'Periode', value: serviceId === 'bpjs' ? months + ' bulan' : period }];
    if (serviceId === 'plnpasca') details.push({ label: 'Tarif / Daya', value: 'R1 / ' + [900, 1300, 2200][h % 3] + ' VA' });
    if (serviceId === 'pdam') details.push({ label: 'Wilayah', value: fields.area });
    if (serviceId === 'internet') details.push({ label: 'Penyedia', value: fields.provider });
    return { billRef: 'BILL' + h.toString(36).toUpperCase() + months, customerName: this.NAMES[h % this.NAMES.length], period, amount: base, adminFee: 2500, details };
  },

  async createOrder(p) {
    await delay(600);
    const svc = Catalog.service(p.kind, p.serviceId);
    if (!svc) throw new ApiError('Layanan tidak ditemukan.');
    for (const f of svc.fields) { const m = validateField(f, p.fields && p.fields[f.key]); if (m) throw new ApiError(m); }
    const method = PAY_METHODS.find(m => m.id === p.methodId);
    if (!method) throw new ApiError('Metode pembayaran tidak valid.');
    let productName, subtotal;
    if (svc.postpaid) {
      const bill = await this.inquireBill({ serviceId: svc.id, fields: p.fields });
      if (bill.billRef !== p.billRef) throw new ApiError('Tagihan berubah. Silakan cek tagihan lagi.');
      productName = 'Tagihan ' + (svc.short || svc.name) + ' · ' + bill.period; subtotal = bill.amount + bill.adminFee;
    } else {
      const prod = Catalog.product(svc, p.productId);
      if (!prod) throw new ApiError('Produk tidak ditemukan.');
      productName = prod.name; subtotal = prod.price;
    }
    const fee = Pricing.fee(method, subtotal);
    const now = Date.now();
    const rnd = Array.from({ length: 6 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[Math.floor(Math.random() * 32)]).join('');
    const dt = new Date(now);
    const id = 'VX' + String(dt.getFullYear()).slice(2) + String(dt.getMonth() + 1).padStart(2, '0') + String(dt.getDate()).padStart(2, '0') + rnd;
    const order = {
      id, kind: p.kind, serviceId: svc.id, serviceName: svc.name, productId: p.productId || '', productName,
      targets: svc.fields.map(f => ({ label: f.label, value: p.fields[f.key], mask: f.type !== 'select' })),
      subtotal, fee, total: subtotal + fee,
      methodId: method.id, methodName: method.name, status: 'Menunggu Pembayaran',
      createdAt: now, expiresAt: now + this.EXPIRE_MS
    };
    const db = this.db(); db[id] = order; db.__used = true; this.save(db);
    return order;
  },

  /* Status berjalan otomatis: Diproses → Berhasil setelah ±3,5 dtk; menunggu → batal setelah 24 jam. */
  tick(o) {
    const now = Date.now();
    if (o.status === 'Diproses' && now - o.processingAt >= this.PROCESS_MS) { o.status = 'Berhasil'; o.doneAt = o.processingAt + this.PROCESS_MS; }
    if (o.status === 'Menunggu Pembayaran' && now >= o.expiresAt) { o.status = 'Dibatalkan'; o.doneAt = o.expiresAt; o.note = 'Melewati batas waktu pembayaran.'; }
    return o;
  },

  async getOrder(id) {
    await delay(150);
    const db = this.db(); const o = db[String(id).toUpperCase()];
    if (!o) return null;
    const before = o.status; this.tick(o);
    if (o.status !== before) { db[o.id] = o; this.save(db); }
    return o;
  },
  async payOrder(id) {
    await delay(500);
    const db = this.db(); const o = db[id];
    if (!o) throw new ApiError('Pesanan tidak ditemukan.');
    this.tick(o);
    if (o.status !== 'Menunggu Pembayaran') throw new ApiError('Pesanan ini tidak bisa dibayar lagi.');
    o.status = 'Diproses'; o.paidAt = o.processingAt = Date.now();
    db[id] = o; this.save(db);
    return { order: o };
  },
  async cancelOrder(id) {
    await delay(400);
    const db = this.db(); const o = db[id];
    if (!o) throw new ApiError('Pesanan tidak ditemukan.');
    this.tick(o);
    if (o.status !== 'Menunggu Pembayaran') throw new ApiError('Hanya pesanan yang menunggu pembayaran yang bisa dibatalkan.');
    o.status = 'Dibatalkan'; o.doneAt = Date.now(); o.note = 'Dibatalkan oleh Anda.';
    db[id] = o; this.save(db);
    return o;
  },
  reset() { try { sessionStorage.removeItem(this.KEY); } catch (e) { /* abaikan */ } }
};

const Api = {
  inquireBill: p => MockBackend.inquireBill(p),
  createOrder: p => MockBackend.createOrder(p),
  getOrder: id => MockBackend.getOrder(id),
  payOrder: id => MockBackend.payOrder(id),
  cancelOrder: id => MockBackend.cancelOrder(id)
};



/* script 6 */

/* toast.js */
const Toast = {
  show(msg, type) {
    const box = $('#toasts'); if (!box) return;
    const t = document.createElement('div');
    t.className = 'toast toast--' + (type || 'ok');
    t.innerHTML = (type === 'err' ? ui('alert', 18) : ui('check', 18)) + '<span>' + esc(msg) + '</span>';
    box.appendChild(t);
    setTimeout(() => t.classList.add('is-in'), 10);
    setTimeout(() => { t.classList.remove('is-in'); setTimeout(() => t.remove(), 250); }, 3200);
  }
};



/* script 7 */

/* sheet.js — dialog/bottom-sheet: focus-trap, Esc, kunci scroll, kembalikan fokus. */
const Sheet = {
  _open: 0,
  FOCUSABLE: 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',

  /* opts: {title, body(html), actions:[{label,value,kind}], variant, label, onMount(el, close)} → Promise<value|undefined> */
  show(opts) {
    return new Promise(resolve => {
      const prev = document.activeElement;
      const ov = document.createElement('div');
      ov.className = 'sheet-ov' + (opts.variant ? ' sheet-ov--' + opts.variant : '');
      const tid = 'sh-' + Math.random().toString(36).slice(2, 7);
      const acts = (opts.actions || []).map((a, i) => `<button type="button" class="btn btn--${a.kind || 'ghost'}" data-i="${i}">${esc(a.label)}</button>`).join('');
      ov.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" ${opts.title ? `aria-labelledby="${tid}"` : `aria-label="${esc(opts.label || 'Dialog')}"`}>
        ${opts.title ? `<div class="sheet__head"><h2 id="${tid}">${esc(opts.title)}</h2><button type="button" class="icon-btn" data-close aria-label="Tutup">${ui('x')}</button></div>` : ''}
        <div class="sheet__body">${opts.body || ''}</div>
        ${acts ? `<div class="sheet__foot">${acts}</div>` : ''}</div>`;
      $('#sheet-root').appendChild(ov);
      const dlg = $('.sheet', ov);
      if (this._open++ === 0) document.body.classList.add('lock');
      let done = false;
      const close = val => {
        if (done) return; done = true;
        document.removeEventListener('keydown', onKey, true);
        ov.classList.remove('is-open');
        setTimeout(() => ov.remove(), 200);
        if (--this._open === 0) document.body.classList.remove('lock');
        if (prev && prev.focus && document.contains(prev)) prev.focus();
        resolve(val);
      };
      const onKey = e => {
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(undefined); return; }
        if (e.key !== 'Tab') return;
        const f = $$(this.FOCUSABLE, dlg).filter(x => x.offsetParent !== null);
        if (!f.length) { e.preventDefault(); return; }
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        else if (!dlg.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
      };
      document.addEventListener('keydown', onKey, true);
      ov.addEventListener('mousedown', e => { if (e.target === ov) close(undefined); });
      ov.addEventListener('click', e => {
        if (e.target.closest('[data-close]')) return close(undefined);
        const b = e.target.closest('[data-i]');
        if (b) close(opts.actions[+b.dataset.i].value);
      });
      if (opts.onMount) opts.onMount(dlg, close);
      /* setTimeout, bukan requestAnimationFrame (rAF terjeda di tab latar) */
      setTimeout(() => {
        ov.classList.add('is-open');
        const auto = $('[data-autofocus]', dlg) || $$(this.FOCUSABLE, dlg).filter(x => !x.hasAttribute('data-close'))[0] || $('[data-close]', dlg) || dlg;
        if (auto === dlg) dlg.setAttribute('tabindex', '-1');
        auto.focus();
      }, 10);
    });
  },

  confirm({ title, message, ok, cancel, danger }) {
    return this.show({
      title, body: `<p class="sheet__msg">${esc(message)}</p>`,
      actions: [{ label: cancel || 'Batal', value: false, kind: 'ghost' }, { label: ok || 'Ya', value: true, kind: danger ? 'danger' : 'accent' }]
    }).then(v => v === true);
  }
};



/* script 8 */

/* palette.js — indeks pencarian, combobox ARIA, command palette (Ctrl/⌘+K atau /) */
const SearchIndex = {
  items() {
    return [
      ...PPOB.map(s => ({ type: 'PPOB', label: s.name, sub: s.desc, href: Catalog.href(s), kw: s.kw, svc: s })),
      ...GAMES.map(s => ({ type: 'Game', label: s.name, sub: s.cat + ' · ' + s.unit, href: Catalog.href(s), kw: s.name + ' ' + s.cat + ' ' + s.unit + ' topup', svc: s })),
      ...PAGES.map(p => ({ type: 'Halaman', label: p.label, sub: p.sub, href: p.href, kw: p.kw }))
    ];
  },
  query(q, limit) {
    q = String(q || '').trim().toLowerCase();
    const out = [];
    if (!q) return out;
    const orderType = { PPOB: 0, Game: 1, Halaman: 2 };
    const scored = this.items().map(it => {
      const l = it.label.toLowerCase(), k = (it.kw || '').toLowerCase();
      let s = -1;
      if (l.startsWith(q)) s = 0; else if (l.split(/\s+/).some(w => w.startsWith(q))) s = 1; else if (l.includes(q)) s = 2; else if (k.includes(q)) s = 3;
      return { it, s };
    }).filter(x => x.s >= 0).sort((a, b) => a.s - b.s || orderType[a.it.type] - orderType[b.it.type]);
    scored.forEach(x => out.push(x.it));
    const inv = q.toUpperCase();
    if (/^VX\w{4,}/i.test(q) && true) out.push({ type: 'Invoice', label: 'Cari invoice ' + inv, sub: 'Buka halaman Pesanan', href: '#/pesanan?q=' + encodeURIComponent(inv) });
    return out.slice(0, limit || 8);
  },
  suggestions() {
    return [...PPOB.slice(0, 5), ...GAMES.slice(0, 3)].map(s => ({ type: s.kind === 'ppob' ? 'PPOB' : 'Game', label: s.name, sub: s.desc, href: Catalog.href(s), svc: s }));
  }
};

function resultItemHTML(it, id, active) {
  const ico = it.svc ? svcIconHTML(it.svc, 'rs__ico') : `<span class="rs__ico rs__ico--page">${ui(it.type === 'Invoice' ? 'receipt' : 'arrow', 18)}</span>`;
  return `<li role="option" id="${id}" class="rs${active ? ' is-active' : ''}" data-href="${esc(it.href)}" aria-selected="${active ? 'true' : 'false'}">${ico}<span class="rs__txt"><b>${esc(it.label)}</b><small>${esc(it.sub || '')}</small></span><span class="rs__type">${esc(it.type)}</span></li>`;
}

/* Combobox: input + listbox. getResults(q) → items. onPick(item) dipanggil saat dipilih. */
function attachCombobox({ input, list, getResults, onPick, showEmpty, openOnFocus }) {
  let items = [], idx = -1, open = false;
  const pre = list.id || 'cb';
  const setOpen = v => {
    open = v; list.hidden = !v; input.setAttribute('aria-expanded', v ? 'true' : 'false');
    if (!v) { idx = -1; input.removeAttribute('aria-activedescendant'); }
  };
  const render = () => {
    const q = input.value.trim();
    items = getResults(q);
    if (!items.length) {
      if (q && showEmpty !== false) { list.innerHTML = `<li class="rs-empty" role="presentation">Tidak ada hasil untuk “${esc(q)}”. Coba kata lain.</li>`; setOpen(true); }
      else setOpen(false);
      return;
    }
    idx = -1;
    list.innerHTML = items.map((it, i) => resultItemHTML(it, pre + '-o' + i, false)).join('');
    setOpen(true);
  };
  const mark = n => {
    idx = n;
    $$('.rs', list).forEach((el, i) => { const on = i === idx; el.classList.toggle('is-active', on); el.setAttribute('aria-selected', on ? 'true' : 'false'); if (on) { input.setAttribute('aria-activedescendant', el.id); el.scrollIntoView({ block: 'nearest' }); } });
  };
  input.addEventListener('input', render);
  if (openOnFocus) input.addEventListener('focus', render);
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (!open) render(); if (items.length) mark((idx + 1) % items.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (items.length) mark((idx - 1 + items.length) % items.length); }
    else if (e.key === 'Enter') { if (open && items.length) { e.preventDefault(); onPick(items[idx >= 0 ? idx : 0]); } }
    else if (e.key === 'Escape' && open && openOnFocus !== 'keep') { e.stopPropagation(); setOpen(false); }
  });
  list.addEventListener('mousedown', e => e.preventDefault());
  list.addEventListener('click', e => { const li = e.target.closest('.rs'); if (li) onPick(items[$$('.rs', list).indexOf(li)]); });
  const outside = e => { if (!list.contains(e.target) && e.target !== input) setOpen(false); };
  document.addEventListener('click', outside);
  setOpen(false);
  return { render, close: () => setOpen(false), destroy: () => document.removeEventListener('click', outside) };
}

const Palette = {
  isOpen: false,
  open() {
    if (this.isOpen) return; this.isOpen = true;
    Sheet.show({
      variant: 'palette', label: 'Cari layanan, game, halaman, atau invoice',
      body: `<div class="pal"><div class="pal__in">${ui('search', 20)}<input id="pal-q" type="search" role="combobox" aria-expanded="true" aria-controls="pal-list" aria-autocomplete="list" aria-label="Cari" placeholder="Cari layanan, game, halaman, invoice…" autocomplete="off" data-autofocus><kbd>Esc</kbd></div><ul class="pal__list" id="pal-list" role="listbox" aria-label="Hasil pencarian"></ul></div>`,
      onMount: (el, close) => {
        const input = $('#pal-q', el), list = $('#pal-list', el);
        const cb = attachCombobox({ input, list, openOnFocus: 'keep', getResults: q => q ? SearchIndex.query(q, 8) : SearchIndex.suggestions(), onPick: it => { close(); location.hash = it.href.replace(/^#/, ''); } });
        cb.render();
      }
    }).then(() => { this.isOpen = false; });
  },
  init() {
    document.addEventListener('keydown', e => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
      if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) { e.preventDefault(); this.open(); }
      else if (e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); this.open(); }
    });
    document.addEventListener('click', e => { if (e.target.closest('[data-open-palette]')) this.open(); });
  }
};



/* script 9 */

/* pages/home.js — Beranda Vitraxa: hero globe (ilustrasi kiri), harga mulai, rel layanan, pita game, cara, alasan, populer, FAQ, ajakan. */
const minPrice = s => (s.products && s.products.length) ? Math.min(...s.products.map(p => p.price)) : 0;

const GLYPHS = {
  gem: '<path d="M-17 -5L-9 -15H9L17 -5L0 17Z" fill="#fff"/><path d="M-17 -5H17M-5 -5L0 17L5 -5M-9 -15L-5 -5M9 -15L5 -5" fill="none" stroke="currentColor" stroke-opacity=".35" stroke-width="2" stroke-linejoin="round"/>',
  coin: '<circle r="17" fill="#fff"/><circle r="10.5" fill="none" stroke="currentColor" stroke-opacity=".4" stroke-width="3"/>',
  star: '<path d="M0 -19Q2 -2 19 0Q2 2 0 19Q-2 2 -19 0Q-2 -2 0 -19Z" fill="#fff"/>',
  shield: '<path d="M0 -18L16 -11V3C16 12 9 17 0 21C-9 17 -16 12 -16 3V-11Z" fill="#fff"/><path d="M-6.5 -5L0 8L6.5 -5" fill="none" stroke="currentColor" stroke-opacity=".5" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>'
};
const GLYPH_OF = { mlbb: 'gem', ff: 'gem', hok: 'gem', genshin: 'star', valorant: 'shield' };
function glyphTile(svc) {
  if (svc.kind === 'ppob') return `<span class="gl">${ppobIcon(svc.icon)}</span>`;
  return `<span class="gl"><svg viewBox="-24 -24 48 48" aria-hidden="true">${GLYPHS[GLYPH_OF[svc.id] || 'coin']}</svg></span>`;
}

/* Hero: globe flat dengan pin layanan dan busur penghubung. SVG buatan sendiri, tanpa gradasi. */
function heroGlobe() {
  const P = '#A21CAF', D = '#7E1388', ink = '#1B1230', C = '#0EA5C6', Y = '#FFC933';
  const glyph = {
    bolt: '<path d="M5 -28L-16 6H-3L-7 28L16 -8H3Z" fill="currentColor"/>',
    pad: '<rect x="-30" y="-14" width="60" height="28" rx="14" fill="currentColor"/><circle cx="12" cy="-4" r="3.6" fill="#fff"/><circle cx="19" cy="3" r="3.6" fill="#fff"/><rect x="-21" y="-2.5" width="13" height="5" rx="1.5" fill="#fff"/><rect x="-17" y="-7" width="5" height="14" rx="1.5" fill="#fff"/>',
    phone: '<rect x="-12" y="-24" width="24" height="48" rx="6" fill="currentColor"/><rect x="-5" y="-19" width="10" height="3" rx="1.5" fill="#fff"/><circle cy="17" r="2.6" fill="#fff"/>',
    drop: '<path d="M0 -26C0 -26 -20 -3 -20 9a20 20 0 0 0 40 0C20 -3 0 -26 0 -26Z" fill="currentColor"/>',
    wallet: '<rect x="-27" y="-18" width="54" height="36" rx="8" fill="currentColor"/><rect x="5" y="-6" width="22" height="14" rx="7" fill="#fff"/><circle cx="14" cy="1" r="2.8" fill="currentColor"/>'
  };
  const pin = (x, y, fill, gcolor, g, d) => `<g transform="translate(${x} ${y})"><ellipse rx="15" ry="5" fill="${ink}" opacity=".25"/><g class="pin" style="animation-delay:${d}s"><path d="M0 0C-18 -18 -20 -34 -20 -42a20 20 0 0 1 40 0C20 -34 18 -18 0 0Z" fill="${fill}"/><circle cy="-42" r="13" fill="#fff"/><g transform="translate(0 -42) scale(.38)" style="color:${gcolor}">${glyph[g]}</g></g></g>`;
  const spark = (x, y, r, c) => `<path class="tw" d="M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z" fill="${c}"/>`;
  const arcs = ['M206 214Q275 104 344 196', 'M344 196Q430 236 386 300', 'M386 300Q360 380 300 320', 'M300 320Q240 384 176 326', 'M176 326Q110 270 206 214'];
  return `<svg class="art art--globe" viewBox="0 0 560 540" role="img" aria-label="Ilustrasi globe dengan pin layanan pulsa, listrik, game, air, dan dompet yang saling terhubung">
    <defs><clipPath id="vxg"><circle cx="280" cy="268" r="186"/></clipPath></defs>
    <ellipse cx="280" cy="492" rx="176" ry="16" fill="${ink}" opacity=".12"/>
    <circle cx="280" cy="268" r="186" fill="${D}"/>
    <g clip-path="url(#vxg)">
      <circle cx="262" cy="250" r="186" fill="${P}"/>
      <g class="drift" fill="#E7A8EE"><path d="M170 190c22-30 66-34 92-14 14 12 10 32-6 40-22 10-22 30-48 30-24 0-46-22-38-56z"/><path d="M296 246c28-12 66 0 76 26 8 24-8 48-32 56-22 8-24-14-46-20-24-6-14-52 2-62z"/><path d="M200 318c20-6 44 6 42 30-2 24-28 38-44 26-12-10-14-46 2-56z"/><path d="M360 160c18-8 40 0 44 16 4 14-10 26-26 24-16-2-26-26-18-40z"/><circle cx="150" cy="268" r="9"/><circle cx="420" cy="230" r="7"/></g>
      <g fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="2"><ellipse cx="280" cy="268" rx="72" ry="186"/><ellipse cx="280" cy="268" rx="136" ry="186"/><ellipse cx="280" cy="268" rx="186" ry="40"/><ellipse cx="280" cy="172" rx="160" ry="28"/><ellipse cx="280" cy="364" rx="160" ry="28"/></g>
    </g>
    <g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 10" class="arcs">${arcs.map(a => `<path d="${a}"/>`).join('')}</g>
    ${pin(206, 214, Y, ink, 'bolt', 0)}${pin(344, 196, C, C, 'pad', -1.1)}${pin(300, 320, '#fff', P, 'phone', -2.2)}${pin(176, 326, C, C, 'drop', -3.1)}${pin(386, 300, Y, ink, 'wallet', -4)}
    <g class="fl"><circle cx="86" cy="130" r="14" fill="${C}"/></g><g class="fl fl2"><circle cx="486" cy="108" r="9" fill="${Y}"/></g><circle cx="500" cy="400" r="7" fill="${P}"/><circle cx="64" cy="380" r="6" fill="${ink}"/>
    ${spark(470, 190, 18, C)}${spark(96, 250, 14, Y)}${spark(430, 450, 13, P)}${spark(150, 70, 11, P)}
  </svg>`;
}

function heroStage(pr) {
  const bold = window.VX_HERO === 'bold';
  const P = '#A21CAF', D = '#6E1079', M = '#8A1596', L = '#F6E3F8', S1 = '#D9B6E2', S2 = '#C497D0', Y = '#FFC933', C = '#0EA5C6';
  const G = {
    phone: '<rect x="-15" y="-27" width="30" height="54" rx="7" fill="currentColor"/><rect x="-6" y="-21" width="12" height="3.5" rx="1.7" fill="#fff"/><circle cy="19" r="3" fill="#fff"/>',
    bolt: '<path d="M6 -32L-19 7H-4L-8 32L19 -9H4Z" fill="currentColor"/>',
    wifi: '<g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"><path d="M-28 -6A40 40 0 0 1 28 -6"/><path d="M-17 6A24 24 0 0 1 17 6"/></g><circle cy="21" r="5.5" fill="currentColor"/>',
    gem: '<path d="M-26 -10L-14 -26H14L26 -10L0 28Z" fill="currentColor"/><path d="M-26 -10H26M-9 -10L0 28L9 -10M-14 -26L-9 -10M14 -26L9 -10" fill="none" stroke="#fff" stroke-width="2.6" stroke-linejoin="round"/>',
    wallet: '<rect x="-30" y="-20" width="60" height="40" rx="9" fill="currentColor"/><rect x="6" y="-7" width="24" height="15" rx="7.5" fill="#fff"/><circle cx="16" cy="0.5" r="3" fill="currentColor"/>',
    pad: '<rect x="-36" y="-17" width="72" height="34" rx="17" fill="currentColor"/><circle cx="15" cy="-5" r="4.2" fill="' + P + '"/><circle cx="23" cy="4" r="4.2" fill="' + P + '"/><rect x="-25" y="-3" width="16" height="6" rx="2" fill="' + P + '"/><rect x="-20" y="-8" width="6" height="16" rx="2" fill="' + P + '"/>'
  };
  // ubin isometrik: titik puncak atas (0,0); sisi s; tebal t
  const tile = (x, y, s, t, top, sl, sr, g, gc, gs, d) => {
    const w = (.866 * s).toFixed(1), h = (s / 2).toFixed(1), hs = s.toFixed(1);
    return `<g transform="translate(${x} ${y})"><g class="pin" style="animation-delay:${d}s">
      <polygon points="${-w},${h} 0,${hs} 0,${s + t} ${-w},${+h + t}" fill="${sl}" stroke="${sl}" stroke-width="6" stroke-linejoin="round"/>
      <polygon points="0,${hs} ${w},${h} ${w},${+h + t} 0,${s + t}" fill="${sr}" stroke="${sr}" stroke-width="6" stroke-linejoin="round"/>
      <g transform="matrix(.866 .5 -.866 .5 0 0)"><rect width="${s}" height="${s}" rx="${s * .14}" fill="${top}" stroke="${top}" stroke-width="2"/></g>
      <g transform="translate(0 ${s / 2 - 5}) scale(${gs * s / 112})" style="color:${gc}">${G[g]}</g></g></g>`;
  };
  const spark = (x, y, r, c) => `<path class="tw" d="M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z" fill="${c}"/>`;
  const chipSvg = (x, y, n, p) => `<g transform="translate(${x} ${y})"><g class="fl"><rect width="150" height="54" rx="16" fill="#FFC933"/><text x="16" y="22" font-family="Figtree,sans-serif" font-weight="600" font-size="13" fill="#1B1230">${n} mulai</text><text x="16" y="43" font-family="Space Grotesk,Figtree,sans-serif" font-weight="700" font-size="19" fill="#1B1230">${p}</text></g></g>`;
  return `<svg class="art art--stage" viewBox="0 0 640 620" role="img" aria-label="Ilustrasi panggung dengan ubin layanan pulsa, listrik, internet, e-wallet, diamond, dan game yang melayang">
    ${bold ? `<ellipse cx="320" cy="548" rx="270" ry="62" fill="#C99AD6"/>
    <rect x="50" y="486" width="540" height="62" fill="#C99AD6"/>
    <ellipse cx="320" cy="486" rx="270" ry="62" fill="#F6E3F8"/>
    <ellipse cx="320" cy="486" rx="210" ry="48" fill="#E3C4EA"/>
    <ellipse cx="320" cy="480" rx="210" ry="48" fill="#fff"/>
    <ellipse cx="320" cy="480" rx="186" ry="41" fill="#F6E3F8"/>
    <ellipse cx="320" cy="470" rx="112" ry="20" fill="#E3C4EA"/>` : `<ellipse cx="320" cy="548" rx="270" ry="62" fill="${D}"/>
    <rect x="50" y="486" width="540" height="62" fill="${D}"/>
    <ellipse cx="320" cy="486" rx="270" ry="62" fill="${P}"/>
    <ellipse cx="320" cy="486" rx="210" ry="48" fill="${M}"/>
    <ellipse cx="320" cy="480" rx="210" ry="48" fill="#fff"/>
    <ellipse cx="320" cy="480" rx="186" ry="41" fill="${L}"/>
    <ellipse cx="320" cy="470" rx="112" ry="20" fill="${S1}" opacity=".7"/>`}
    ${tile(168, 150, 104, 18, '#fff', S1, S2, 'phone', P, .95, -1)}
    ${tile(476, 134, 104, 18, '#fff', S1, S2, 'bolt', Y, .95, -2.2)}
    ${tile(320, 22, 92, 16, '#fff', S1, S2, 'wallet', P, .95, -3.1)}
    ${tile(156, 322, 104, 18, '#fff', S1, S2, 'wifi', P, .95, -4)}
    ${tile(486, 322, 104, 18, '#fff', S1, S2, 'gem', P, .95, -1.6)}
    ${bold ? tile(322, 170, 134, 26, C, '#0A8CAA', '#08748D', 'pad', '#fff', .95, 0) : tile(322, 170, 134, 26, P, M, D, 'pad', '#fff', .95, 0)}
    ${bold ? chipSvg(8, 40, 'Pulsa', pr[0]) + chipSvg(490, 238, 'Token PLN', pr[1]) + chipSvg(446, 452, 'Diamond ML', pr[2]) : ''}
  </svg>`;
}

function secHead(title, sub, id) { return `<header class="sh"><h2${id ? ` id="${id}"` : ''}>${esc(title)}</h2>${sub ? `<p>${esc(sub)}</p>` : ''}</header>`; }

function PageHome(view) {
  const starts = [['ppob', 'pulsa', 'Pulsa'], ['ppob', 'pln', 'Token PLN'], ['game', 'mlbb', 'Diamond ML'], ['ppob', 'ewallet', 'Saldo E-Wallet']].map(t => { const sv = Catalog.service(t[0], t[1]); const p = sv.products.reduce((a, b) => a.price <= b.price ? a : b); return `<a class="mulai" href="${Catalog.href(sv, p.id)}">${glyphTile(sv)}<span><small>${t[2]}</small><b>${rp(p.price)}</b></span></a>`; }).join('');
  const prices = [['ppob', 'pulsa'], ['ppob', 'pln'], ['game', 'mlbb']].map(t => { const sv = Catalog.service(t[0], t[1]); return rp(sv.products.reduce((a, b) => a.price <= b.price ? a : b).price); });
  const trust = [['search', 'Tanpa akun', 'Langsung pesan'], ['tag', 'Harga jelas', 'Biaya admin terlihat'], ['receipt', 'Cek transaksi', 'Pakai nomor invoice']].map(t => `<li><span class="trust5__i">${ui(t[0], 22)}</span><span><b>${t[1]}</b><small>${t[2]}</small></span></li>`).join('');
  const rail = PPOB.map(s => `<a class="srv" href="${Catalog.href(s)}"><span class="srv__ico">${ppobIcon(s.icon)}</span><b>${esc(s.short || s.name)}</b><small>${esc(s.desc)}</small><em>${s.postpaid ? 'Cek tagihan' : 'Mulai ' + rp(minPrice(s))}</em></a>`).join('');
  const covers = GAMES.map(g => `<a class="gcv" href="${Catalog.href(g)}"><img src="${g.cover}" alt="" width="200" height="200" loading="lazy"><b>${esc(g.name)}</b><small>Mulai ${rp(minPrice(g))}</small></a>`).join('');
  const steps = [['Pilih layanan', 'Pilih pulsa, tagihan, e-wallet, atau game yang mau diisi.'], ['Isi data & nominal', 'Masukkan nomor atau ID, lalu pilih nominal. Harga langsung terlihat.'], ['Bayar & cek transaksi', 'Pilih metode bayar, lalu cek status lewat nomor invoice.']].map((s, i) => `<li><span class="step__n">${i + 1}</span><b>${s[0]}</b><p>${s[1]}</p></li>`).join('');
  const facts = [[GAMES.length, 'game tersedia'], [PPOB.length, 'layanan isi ulang & tagihan'], [PAY_METHODS.length, 'metode pembayaran']].map(f => `<li><b>${f[0]}</b><span>${f[1]}</span></li>`).join('');
  const why = [['tag', 'Harga terlihat sebelum bayar', 'Harga dan biaya admin ditampilkan lebih dulu, tidak ada kejutan di akhir.'], ['search', 'Tanpa akun', 'Langsung pesan tanpa daftar. Status dicek pakai nomor invoice.'], ['help', 'Bantuan tersedia', 'Pertanyaan umum dan kontak ada di halaman Bantuan.']].map(w => `<li><span class="why__ico">${ui(w[0], 24)}</span><b>${w[1]}</b><p>${w[2]}</p></li>`).join('');
  const best = Catalog.featured.map(f => { const svc = Catalog.service(f[0], f[1]), p = Catalog.product(svc, f[2]); if (!svc || !p) return ''; return `<a class="bst" href="${Catalog.href(svc, p.id)}">${glyphTile(svc)}<span class="bst__t"><small>${esc(svc.short || svc.name)}</small><b>${esc(p.name)}</b></span><span class="bst__p">${rp(p.price)}</span></a>`; }).join('');
  const faq = FAQ.slice(0, 4).map(f => `<details><summary>${esc(f[0])}<span class="faq__pm" aria-hidden="true"></span></summary><p>${esc(f[1])}</p></details>`).join('');

  view.innerHTML = `
  <section class="hero5" aria-labelledby="h1"><div class="wrap">
    <div class="hero5__card">
      <img class="hero5__img" src="data:image/webp;base64,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" alt="Ilustrasi panggung dengan ubin layanan pulsa, listrik, internet, e-wallet, diamond, dan game" width="1832" height="859">
      <div class="hero5__txt">
        <p class="pill"><i></i> Top up · Isi ulang · Tagihan</p>
        <h1 id="h1">Top up game dan isi ulang, <span class="hl2">harga terlihat</span> sebelum bayar.</h1>
        <p class="hero5__sub">Pulsa, token listrik, saldo e-wallet, tagihan, sampai diamond game favoritmu. Tanpa akun, dan status transaksi bisa dicek lewat nomor invoice.</p>
        <div class="hero5__cta"><a class="btn btn--accent btn--lg hero5__b1" href="#/isi-ulang">Mulai Pesan ${ui('arrow', 18)}</a><a class="btn btn--outline btn--lg hero5__b2" href="#/topup">Top Up Game</a></div>
        <ul class="trust5">${trust}</ul>
      </div>
    </div>
    <div class="mulaibar"><span class="mulaibar__l">Mulai dari</span><div class="mulaigrid">${starts}</div></div>
  </div></section>

  <section class="wrap blk" aria-labelledby="h-srv">${secHead('Isi ulang & tagihan', 'Harga mulai dari terlihat di tiap kartu.', 'h-srv')}
    <div class="srvrail" tabindex="0" role="region" aria-label="Daftar layanan">${rail}</div>
  </section>

  <section class="band" aria-labelledby="h-game"><div class="wrap">${secHead('Top up game', 'Pilih game, isi ID akun, bayar.', 'h-game')}
    <div class="covers">${covers}</div><div class="band__f"><a class="btn btn--accent" href="#/topup">Lihat semua game ${ui('arrow', 18)}</a></div></div></section>

  <section class="wrap blk" aria-labelledby="h-how">${secHead('Cara memesan', 'Tiga langkah, selesai di satu halaman.', 'h-how')}<ol class="steps3">${steps}</ol></section>

  <section class="wrap blk" aria-labelledby="h-why"><div class="whywrap">
    <div><h2 id="h-why">Kenapa Vitraxa</h2><ul class="facts">${facts}</ul></div>
    <ul class="why why--3">${why}</ul></div></section>

  <section class="wrap blk" aria-labelledby="h-best">${secHead('Produk populer', 'Langsung ke checkout dengan nominal terpilih.', 'h-best')}<div class="bstgrid">${best}</div></section>

  <section class="wrap blk" aria-labelledby="h-faq"><div class="faqwrap"><div><h2 id="h-faq">Pertanyaan yang sering muncul</h2><p class="muted">Masih ada yang kurang jelas? Buka halaman Bantuan.</p><a class="btn btn--ghost" href="#/bantuan">Buka Bantuan ${ui('arrow', 18)}</a></div><div class="faq">${faq}</div></div></section>

  <section class="wrap blk"><div class="cta"><div><h2>Siap isi ulang atau top up?</h2><p>Pilih layanan, isi data, dan bayar. Tanpa buat akun.</p></div><a class="btn btn--sun btn--lg" href="#/isi-ulang">Mulai Sekarang ${ui('arrow', 18)}</a></div></section>`;
}



/* script 10 */

/* pages/catalog.js — Top Up Game (grid sampul) & Isi Ulang/Tagihan (ubin warna) */
function PageGames(view) {
  const cats = ['Semua', ...Array.from(new Set(GAMES.map(g => g.cat)))];
  view.innerHTML = `<div class="wrap pg">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Beranda</a>${ui('chevR', 14)}<span aria-current="page">Top Up Game</span></nav>
    <header class="ph"><h1>Top up game favoritmu.</h1><p class="ph__sub">Isi ID akun, pilih nominal, bayar. ${GAMES.length} game tersedia.</p></header>
    <div class="filters"><div class="search"><label class="sr" for="g-q">Cari game</label>${ui('search', 18)}<input id="g-q" type="search" placeholder="Cari game…" autocomplete="off"></div>
      <label class="sr" for="g-sort">Urutkan</label><select id="g-sort" class="select"><option value="pop">Urutan awal</option><option value="az">A–Z</option><option value="za">Z–A</option></select></div>
    <div class="chips" id="g-cats" role="group" aria-label="Kategori">${cats.map((c, i) => `<button type="button" data-cat="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`).join('')}</div>
    <div id="g-out" aria-live="polite"></div></div>`;
  const out = $('#g-out', view); let cat = 'Semua', q = '', sort = 'pop', t;
  const skel = () => `<div class="covgrid">${Array.from({ length: 10 }, () => '<div class="cov skeleton"></div>').join('')}</div>`;
  const paint = () => {
    let l = GAMES.filter(g => (cat === 'Semua' || g.cat === cat) && g.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === 'az') l = [...l].sort((a, b) => a.name.localeCompare(b.name)); if (sort === 'za') l = [...l].sort((a, b) => b.name.localeCompare(a.name));
    out.innerHTML = l.length ? `<div class="covgrid">${l.map(g => `<a class="cov" href="${Catalog.href(g)}"><img src="${g.cover}" alt="" width="240" height="240" loading="lazy"><b>${esc(g.name)}</b><small>${esc(g.cat)} · mulai ${rp(minPrice(g))}</small></a>`).join('')}</div>`
      : `<div class="empty"><div class="empty__ico">${ui('search', 28)}</div><h2>Game tidak ditemukan</h2><p>Coba kata kunci lain atau ganti kategori.</p><button type="button" class="btn btn--ghost" id="g-reset">Atur Ulang</button></div>`;
  };
  out.innerHTML = skel(); t = setTimeout(paint, REDUCED() ? 0 : 300);
  $('#g-q', view).addEventListener('input', debounce(e => { q = e.target.value.trim(); paint(); }, 150));
  $('#g-sort', view).addEventListener('change', e => { sort = e.target.value; paint(); });
  const mark = b => $$('#g-cats button', view).forEach(c => c.setAttribute('aria-pressed', c === b));
  $('#g-cats', view).addEventListener('click', e => { const b = e.target.closest('[data-cat]'); if (!b) return; cat = b.dataset.cat; mark(b); paint(); });
  out.addEventListener('click', e => { if (e.target.closest('#g-reset')) { q = ''; cat = 'Semua'; $('#g-q', view).value = ''; mark($('#g-cats button', view)); paint(); } });
  return () => clearTimeout(t);
}

function PagePpob(view) {
  const groups = ['Semua', 'Prabayar', 'Tagihan'];
  view.innerHTML = `<div class="wrap pg">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Beranda</a>${ui('chevR', 14)}<span aria-current="page">Isi Ulang &amp; Tagihan</span></nav>
    <header class="ph"><h1>Isi ulang dan bayar tagihan.</h1><p class="ph__sub">Pulsa, data, listrik, tagihan, e-wallet, dan voucher digital.</p></header>
    <div class="filters"><div class="search"><label class="sr" for="p-q">Cari layanan</label>${ui('search', 18)}<input id="p-q" type="search" placeholder="Cari layanan…" autocomplete="off"></div></div>
    <div class="chips" id="p-cats" role="group" aria-label="Jenis layanan">${groups.map((c, i) => `<button type="button" data-cat="${c}" aria-pressed="${i === 0}">${c}</button>`).join('')}</div>
    <div id="p-out" aria-live="polite"></div></div>`;
  const out = $('#p-out', view); let g = 'Semua', q = '';
  const paint = () => {
    const l = PPOB.filter(s => (g === 'Semua' || s.group === g) && (s.name + ' ' + s.kw).toLowerCase().includes(q.toLowerCase()));
    out.innerHTML = l.length ? `<div class="tiles tiles--lg">${l.map(s => `<a class="tile" href="${Catalog.href(s)}" style="--c:${s.color}"><span class="tile__ico">${ppobIcon(s.icon)}</span><b>${esc(s.name)}</b><small>${esc(s.desc)}</small><em>${s.postpaid ? 'Cek tagihan' : 'Mulai ' + rp(minPrice(s))}</em></a>`).join('')}</div>`
      : `<div class="empty"><div class="empty__ico">${ui('search', 28)}</div><h2>Layanan tidak ditemukan</h2><p>Coba kata kunci lain.</p></div>`;
  };
  paint();
  $('#p-q', view).addEventListener('input', debounce(e => { q = e.target.value.trim(); paint(); }, 150));
  $('#p-cats', view).addEventListener('click', e => { const b = e.target.closest('[data-cat]'); if (!b) return; g = b.dataset.cat; $$('#p-cats button', view).forEach(c => c.setAttribute('aria-pressed', c === b)); paint(); });
}



/* script 11 */

/* pages/service.js — checkout dua kolom: bagian isian di kiri, STRUK pesanan yang menempel dan menghitung langsung di kanan. */
function PageService(view, kind, id, query) {
  const svc = Catalog.service(kind, id);
  if (!svc) return PageNotFound(view);
  setTitle(svc.name);
  const post = !!svc.postpaid;
  const S = { values: {}, productId: null, methodId: 'qris', bill: null, busy: false, inquiring: false };
  svc.fields.forEach(f => { const v = query['f_' + f.key]; S.values[f.key] = v && (f.type !== 'select' || f.options.includes(v)) ? String(v).slice(0, 40) : ''; });
  if (!post && query.p && Catalog.product(svc, query.p)) S.productId = query.p;
  const listPath = kind === 'game' ? '#/topup' : '#/isi-ulang';

  const fieldHTML = f => {
    const fid = 'f-' + f.key;
    if (f.type === 'select') return `<div class="field"><label for="${fid}">${esc(f.label)}</label><select id="${fid}" data-key="${f.key}" aria-describedby="${fid}-err"><option value="">Pilih ${esc(f.label.toLowerCase())}</option>${f.options.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join('')}</select><p class="field__err" id="${fid}-err" role="alert"></p></div>`;
    const im = f.digits || f.type === 'phone' ? 'numeric' : f.type === 'email' ? 'email' : 'text';
    return `<div class="field"><label for="${fid}">${esc(f.label)}</label><input id="${fid}" data-key="${f.key}" type="${f.type === 'email' ? 'email' : 'text'}" inputmode="${im}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(f.placeholder || '')}" ${f.max ? `maxlength="${f.type === 'phone' ? 16 : f.max}"` : ''} aria-describedby="${fid}-hint ${fid}-err"><p class="field__hint" id="${fid}-hint">${esc(f.help || '')}${f.detect ? ' <span class="op" id="op-badge" hidden></span>' : ''}</p><p class="field__err" id="${fid}-err" role="alert"></p></div>`;
  };
  const prodHTML = post
    ? `<div id="bill-box"><p class="muted">Isi data pelanggan di atas, lalu tekan <b>Cek Tagihan</b> untuk melihat rincian.</p></div>`
    : `<div class="opts" role="radiogroup" aria-label="Pilih nominal">${svc.products.map(p => `<label class="opt"><input type="radio" name="product" value="${p.id}" ${S.productId === p.id ? 'checked' : ''}><span class="opt__body">${p.tag ? `<em class="opt__tag">${esc(p.tag)}</em>` : ''}<b>${esc(p.name)}</b><span class="opt__price">${rp(p.price)}</span></span></label>`).join('')}</div><p class="field__err" id="prod-err" role="alert"></p>`;
  const methods = `<div class="mchips" role="radiogroup" aria-label="Metode pembayaran">${PAY_METHODS.map(m => `<label class="mchip"><input type="radio" name="method" value="${m.id}" ${m.id === S.methodId ? 'checked' : ''}><span class="mchip__b"><span class="mk" style="--c:${m.color}">${m.mark}</span><span class="mchip__t"><b>${esc(m.name)}</b><small data-fee="${m.id}"></small></span></span></label>`).join('')}</div>`;

  const secData = `<section class="cs" aria-labelledby="cs-data"><header class="cs__h"><h2 id="cs-data">${kind === 'game' ? 'Data akun' : 'Data tujuan'}</h2><p>${kind === 'game' ? 'Isi ID akun game tempat item dikirim.' : 'Isi nomor tujuan dengan teliti.'}</p></header><div class="fields${svc.fields.length > 1 && kind === 'game' ? ' fields--2' : ''}">${svc.fields.map(fieldHTML).join('')}</div>${post ? '<button type="button" class="btn btn--ink" id="bill-btn">Cek Tagihan</button>' : ''}</section>`;
  const secProd = `<section class="cs" aria-labelledby="os2"><header class="cs__h"><h2 id="os2">${post ? 'Rincian tagihan' : 'Pilih nominal'}</h2><p>${post ? 'Tagihan muncul setelah data dicek.' : 'Harga sudah termasuk layanan, biaya admin dihitung di struk.'}</p></header>${prodHTML}</section>`;
  const secPay = `<section class="cs" aria-labelledby="cs-pay"><header class="cs__h"><h2 id="cs-pay">Metode bayar</h2><p>Biaya admin tiap metode terlihat di bawah namanya.</p></header>${methods}</section>`;

  view.innerHTML = `<div class="wrap co2pg">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Beranda</a>${ui('chevR', 14)}<a href="${listPath}">${kind === 'game' ? 'Top Up Game' : 'Isi Ulang & Tagihan'}</a>${ui('chevR', 14)}<span aria-current="page">${esc(svc.name)}</span></nav>
    <form class="co2" id="co-form" novalidate autocomplete="off">
      <div class="co2__main">
        <header class="co-h">${svcIconHTML(svc, 'co-h__ico')}<div><h1>${esc(svc.name)}</h1><p>${esc(svc.desc)}</p></div></header>
        ${post ? secData + secProd : secProd + secData}
        ${secPay}
      </div>
      <aside class="rcpt" aria-labelledby="rc-h">
        <div class="rcpt__top">${logoMark(28)}<div><h2 id="rc-h">Struk pesanan</h2><small>${esc(SITE.name)}</small></div></div>
        <dl class="sum" id="summary"></dl>
        <div class="rcpt__tot"><span>Total bayar</span><b id="cb-total">—</b></div>
        <button type="button" class="btn btn--accent btn--lg btn--block rcpt__btn" id="cb-btn" data-pay>Bayar Sekarang</button>
        <p class="rcpt__note">Harga dan biaya admin tampil sebelum bayar. Simpan nomor invoice untuk cek status.</p>
      </aside>
    </form></div>
    <div class="cbar"><div class="cbar__in"><div class="cbar__t"><button type="button" class="cbar__via" id="cb-via" data-goto="cs-pay"></button><b id="cb-total2">—</b></div><button type="button" class="btn btn--accent btn--lg" id="cb-btn2" data-pay>Bayar Sekarang</button></div></div>`;

  function calc() {
    let name = '', subtotal = 0;
    if (post) { if (S.bill) { name = 'Tagihan ' + (svc.short || svc.name) + ' · ' + S.bill.period; subtotal = S.bill.amount + S.bill.adminFee; } }
    else { const p = Catalog.product(svc, S.productId); if (p) { name = p.name; subtotal = p.price; } }
    const method = PAY_METHODS.find(m => m.id === S.methodId), fee = Pricing.fee(method, subtotal);
    return { name, subtotal, method, fee, total: subtotal ? subtotal + fee : 0 };
  }
  function paint() {
    const c = calc();
    const tg = svc.fields.filter(f => S.values[f.key]).map(f => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.type === 'select' ? S.values[f.key] : maskId(S.values[f.key]))}</dd></div>`).join('');
    $('#summary', view).innerHTML = `<div><dt>Layanan</dt><dd>${esc(svc.name)}</dd></div>${tg}<div><dt>Produk</dt><dd>${esc(c.name || '—')}</dd></div><div><dt>Harga</dt><dd>${c.subtotal ? rp(c.subtotal) : '—'}</dd></div><div><dt>Biaya admin ${esc(c.method.name)}</dt><dd>${c.subtotal ? rp(c.fee) : '—'}</dd></div>`;
    $('#cb-total', view).textContent = c.total ? rp(c.total) : '—';
    $('#cb-total2', view).textContent = c.total ? rp(c.total) : '—';
    $('#cb-via', view).innerHTML = 'Bayar via <b>' + esc(c.method.name) + '</b> · ubah';
    view.querySelectorAll('[data-pay]').forEach(b => { b.disabled = S.busy; b.textContent = S.busy ? 'Memproses…' : 'Bayar Sekarang'; });
    PAY_METHODS.forEach(m => { const el = $(`[data-fee="${m.id}"]`, view); if (el) el.textContent = c.subtotal ? '+' + rp(Pricing.fee(m, c.subtotal)) : Pricing.feeLabel(m); });
    const bb = $('#bill-btn', view); if (bb) { bb.disabled = S.inquiring; bb.textContent = S.inquiring ? 'Memeriksa…' : S.bill ? 'Cek Ulang Tagihan' : 'Cek Tagihan'; }
  }

  const errEl = k => $('#f-' + k + '-err', view);
  function setErr(f, msg) { const inp = $('#f-' + f.key, view); errEl(f.key).textContent = msg || ''; inp.setAttribute('aria-invalid', msg ? 'true' : 'false'); inp.closest('.field').classList.toggle('has-err', !!msg); }
  function validateAll() { let first = null; svc.fields.forEach(f => { const m = validateField(f, S.values[f.key]); setErr(f, m); if (m && !first) first = f; }); return first; }
  function billHTML() {
    const b = S.bill; if (!b) return '<p class="muted">Isi data pelanggan di atas, lalu tekan <b>Cek Tagihan</b> untuk melihat rincian.</p>';
    return `<div class="bill"><div class="bill__top"><span class="badge badge--ok">Tagihan ditemukan</span><b>${esc(maskName(b.customerName))}</b></div><dl class="sum">${b.details.map(d => `<div><dt>${esc(d.label)}</dt><dd>${esc(d.value)}</dd></div>`).join('')}<div><dt>Tagihan</dt><dd>${rp(b.amount)}</dd></div><div><dt>Biaya layanan</dt><dd>${rp(b.adminFee)}</dd></div><div class="sum--tot"><dt>Total tagihan</dt><dd>${rp(b.amount + b.adminFee)}</dd></div></dl></div>`;
  }
  async function inquire() {
    const bad = validateAll(); if (bad) { $('#f-' + bad.key, view).focus(); return false; }
    S.inquiring = true; paint();
    try { S.bill = await Api.inquireBill({ serviceId: svc.id, fields: { ...S.values } }); $('#bill-box', view).innerHTML = billHTML(); Toast.show('Tagihan ditemukan'); }
    catch (e) { S.bill = null; $('#bill-box', view).innerHTML = billHTML(); const first = svc.fields.find(f => f.key === 'idpel' || f.key === 'va') || svc.fields[0]; setErr(first, e.message); $('#f-' + first.key, view).focus(); }
    finally { S.inquiring = false; paint(); }
    return !!S.bill;
  }

  async function submit() {
    if (S.busy) return;
    const bad = validateAll();
    if (bad) { const el = $('#f-' + bad.key, view); el.scrollIntoView({ block: 'center', behavior: REDUCED() ? 'auto' : 'smooth' }); el.focus({ preventScroll: true }); return; }
    if (post && !S.bill) { Toast.show('Cek tagihan dulu sebelum membayar.', 'err'); const b = $('#bill-btn', view); b.scrollIntoView({ block: 'center' }); b.focus({ preventScroll: true }); return; }
    if (!post && !S.productId) { $('#prod-err', view).textContent = 'Pilih nominal terlebih dahulu.'; $('#os2', view).scrollIntoView({ block: 'center', behavior: REDUCED() ? 'auto' : 'smooth' }); return; }
    const c = calc();
    const rows = [['Layanan', svc.name], ...svc.fields.map(f => [f.label, f.type === 'select' ? S.values[f.key] : maskId(S.values[f.key])]), ['Produk', c.name], ['Harga', rp(c.subtotal)], ['Biaya admin', rp(c.fee)], ['Metode bayar', c.method.name]];
    const ok = await Sheet.show({ title: 'Konfirmasi pesanan', body: `<dl class="sum sum--sheet">${rows.map(r => `<div><dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd></div>`).join('')}<div class="sum--tot"><dt>Total bayar</dt><dd>${rp(c.total)}</dd></div></dl><p class="muted">Pastikan data tujuan sudah benar. Pesanan yang berhasil diproses tidak dapat dibatalkan.</p>`, actions: [{ label: 'Periksa Lagi', value: false, kind: 'ghost' }, { label: 'Buat Pesanan', value: true, kind: 'accent' }] });
    if (ok !== true) return;
    S.busy = true; paint();
    try {
      const order = await Api.createOrder({ kind, serviceId: svc.id, fields: { ...S.values }, productId: S.productId || undefined, billRef: S.bill ? S.bill.billRef : undefined, methodId: S.methodId });
      Toast.show('Pesanan dibuat. Selesaikan pembayaran.'); location.hash = '#/pesanan/' + order.id;
    } catch (e) { Toast.show(e.message || 'Pesanan gagal dibuat.', 'err'); S.busy = false; paint(); }
  }

  view.addEventListener('input', e => {
    const t = e.target, key = t.dataset && t.dataset.key; if (!key) return;
    const f = svc.fields.find(x => x.key === key);
    if (f.digits && t.type !== 'email') { const c = t.value.replace(/\D/g, ''); if (c !== t.value) t.value = c; }
    if (f.type === 'phone') { const c = t.value.replace(/[^\d+\s-]/g, ''); if (c !== t.value) t.value = c; }
    S.values[key] = t.value; if (errEl(key).textContent) setErr(f, '');
    if (f.detect) { const op = detectOperator(t.value), b = $('#op-badge', view); b.hidden = !op; b.textContent = op; }
    if (post && S.bill) { S.bill = null; $('#bill-box', view).innerHTML = billHTML(); }
    paint();
  });
  view.addEventListener('change', e => {
    const t = e.target;
    if (t.name === 'product') { S.productId = t.value; $('#prod-err', view).textContent = ''; paint(); }
    else if (t.name === 'method') { S.methodId = t.value; paint(); }
    else if (t.dataset && t.dataset.key) { const f = svc.fields.find(x => x.key === t.dataset.key); S.values[f.key] = t.value; setErr(f, ''); if (post && S.bill) { S.bill = null; $('#bill-box', view).innerHTML = billHTML(); } paint(); }
  });
  view.addEventListener('focusout', e => { const key = e.target.dataset && e.target.dataset.key; if (!key) return; const f = svc.fields.find(x => x.key === key); if (S.values[key]) setErr(f, validateField(f, S.values[key])); });
  view.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.type !== 'radio') { e.preventDefault(); if (post) inquire(); } });
  view.addEventListener('click', e => { if (e.target.closest('#bill-btn')) inquire(); if (e.target.closest('[data-pay]')) submit();
    const g = e.target.closest('[data-goto]'); if (g) { const t = $('#' + g.dataset.goto, view); if (t) t.scrollIntoView({ block: 'center', behavior: REDUCED() ? 'auto' : 'smooth' }); } });
  $('#co-form', view).addEventListener('submit', e => e.preventDefault());

  svc.fields.forEach(f => { const el = $('#f-' + f.key, view); if (el) el.value = S.values[f.key] || ''; });
  const ph = svc.fields.find(f => f.detect); if (ph) { const op = detectOperator(S.values[ph.key]), b = $('#op-badge', view); if (b) { b.hidden = !op; b.textContent = op; } }
  paint();
  if (window.innerWidth >= 1024 && !S.values[svc.fields[0].key]) { const fi = $('#f-' + svc.fields[0].key, view); if (fi) fi.focus({ preventScroll: true }); }
  return () => {};
}



/* script 12 */

/* pages/pesanan.js — daftar pesanan (baris dengan titik status) & detail (banner status + linimasa + rincian) */
function PageOrders(view, query) {
  const pre = String(query.q || '').toUpperCase();
  view.innerHTML = `<div class="wrap pg pg--narrow">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Beranda</a>${ui('chevR', 14)}<span aria-current="page">Cek Transaksi</span></nav>
    <section class="lookup" aria-labelledby="lk-h">
      <span class="lookup__ico">${ui('receipt', 30)}</span>
      <h1 id="lk-h">Cek status transaksi.</h1>
      <p class="ph__sub">Masukkan nomor invoice yang kamu terima saat membuat pesanan.</p>
      <form class="lookup__form" id="inv-form" role="search" novalidate>
        <div class="field"><label for="inv-q">Nomor invoice</label><input id="inv-q" type="text" placeholder="Nomor invoice" autocomplete="off" autocapitalize="characters" spellcheck="false" value="${esc(pre)}" aria-describedby="inv-err"><p class="field__hint">Diawali huruf VX, diikuti angka dan huruf.</p><p class="field__err" id="inv-err" role="alert"></p></div>
        <button class="btn btn--accent btn--lg btn--block" type="submit" id="inv-btn">Cek Transaksi</button>
      </form>
      <p class="lookup__note">${ui('info', 16)} Demi privasi, riwayat pesanan tidak disimpan di perangkat ini. Simpan nomor invoice kamu.</p>
    </section>
    <p class="lookup__more">Belum punya pesanan? <a href="#/isi-ulang">Mulai memesan</a></p></div>`;
  const inp = $('#inv-q', view), err = $('#inv-err', view), btn = $('#inv-btn', view); let alive = true;
  inp.addEventListener('input', () => { err.textContent = ''; });
  $('#inv-form', view).addEventListener('submit', async e => {
    e.preventDefault(); const q = inp.value.trim().toUpperCase().replace(/\s+/g, ''); err.textContent = '';
    if (!q) { err.textContent = 'Masukkan nomor invoice terlebih dahulu.'; inp.focus(); return; }
    btn.disabled = true; btn.textContent = 'Memeriksa…';
    try { const o = await Api.getOrder(q); if (!alive) return; if (o) { location.hash = '#/pesanan/' + o.id; return; } err.textContent = `Invoice ${q} tidak ditemukan. Periksa kembali nomornya.`; inp.focus(); }
    catch (x) { err.textContent = 'Gagal memeriksa invoice. Coba lagi.'; }
    btn.disabled = false; btn.textContent = 'Cek Transaksi';
  });
  if (window.innerWidth >= 1024) inp.focus({ preventScroll: true });
  return () => { alive = false; };
}

/* Panel cara bayar sesuai metode. Nomor/kode dibuat dari nomor invoice sampai gateway sungguhan tersambung. */
function payPanel(o) {
  let x = [...o.id].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  const rnd = () => (x = (x * 1664525 + 1013904223) >>> 0);
  const digits = n => Array.from({ length: n }, () => rnd() % 10).join('');
  const group = (v, n) => v.replace(new RegExp('(.{' + n + '})', 'g'), '$1 ').trim();
  const copyBtn = v => `<button type="button" class="btn btn--ghost btn--sm" data-copy="${esc(v)}">${ui('copy', 16)} Salin</button>`;
  const total = rp(o.total);
  let visual = '', title = '', steps = [];
  if (o.methodId === 'qris') {
    visual = `<div class="qr"><img src="/assets/images/payments/qris-baru.png" alt="Kode QRIS" style="width:100%;max-width:220px;height:auto;display:block;background:#fff;border-radius:12px"/><small>Kode QRIS · ${total}</small></div>`;
    title = 'Bayar dengan QRIS';
    steps = ['Buka aplikasi e-wallet atau m-banking apa pun yang mendukung QRIS.', 'Pindai kode QRIS di samping.', 'Pastikan total ' + total + ', lalu konfirmasi pembayaran.'];
  } else if (o.methodId === 'va') {
    const no = group('8808' + digits(12), 4);
    visual = `<div class="acct"><small>Nomor Virtual Account</small><b>${no}</b>${copyBtn(no.replace(/ /g, ''))}<small>Bank: BCA, BNI, BRI, Mandiri, Permata</small></div>`;
    title = 'Bayar lewat Virtual Account';
    steps = ['Buka m-banking atau ATM bank pilihan Anda.', 'Pilih menu Virtual Account, masukkan nomor di samping.', 'Pastikan total ' + total + ', lalu selesaikan pembayaran.'];
  } else if (o.methodId === 'bank') {
    const no = group(digits(10), 4);
    visual = `<div class="acct"><small>Nomor rekening tujuan</small><b>${no}</b>${copyBtn(no.replace(/ /g, ''))}<small>a.n. ${esc(SITE.legalName || SITE.name)}</small></div>`;
    title = 'Bayar lewat Transfer Bank';
    steps = ['Transfer tepat sebesar ' + total + ' ke rekening di samping.', 'Gunakan bank apa pun, termasuk transfer antarbank.', 'Simpan bukti transfer sampai status pesanan berubah.'];
  } else {
    const nm = o.methodName;
    visual = `<div class="acct"><small>Metode bayar</small><b>${esc(nm)}</b><small>Tagihan ${total} dikirim ke akun ${esc(nm)} Anda</small></div>`;
    title = 'Bayar lewat ' + nm;
    steps = ['Tekan Bayar Sekarang di halaman ini.', 'Buka aplikasi ' + nm + ' dan setujui pembayaran ' + total + '.', 'Status pesanan berubah otomatis setelah pembayaran diterima.'];
  }
  return `<section class="paypanel" aria-label="Cara pembayaran"><div class="paypanel__v">${visual}</div><div class="paypanel__t"><h2>${title}</h2><ol>${steps.map(t => `<li>${t}</li>`).join('')}</ol></div></section>`;
}

function PageOrder(view, id) {
  id = String(id).toUpperCase(); let alive = true, poll = null, tick = null, order = null;
  view.innerHTML = `<div class="wrap pg"><nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Beranda</a>${ui('chevR', 14)}<a href="#/pesanan">Cek Transaksi</a>${ui('chevR', 14)}<span aria-current="page">Detail</span></nav><div id="d-out"><div class="skeleton" style="height:240px;border-radius:24px"></div></div></div>`;
  const out = $('#d-out', view);
  function render() {
    const o = order;
    if (!o) { out.innerHTML = `<div class="empty"><div class="empty__ico">${ui('search', 30)}</div><h1>Invoice tidak ditemukan</h1><p>Nomor <code>${esc(id)}</code> tidak terdaftar. Periksa kembali nomornya.</p><div class="empty__act"><a class="btn btn--accent" href="#/pesanan">Cek Invoice Lain</a></div></div>`; return; }
    const svc = Catalog.service(o.kind, o.serviceId), waiting = o.status === 'Menunggu Pembayaran', sc = statusClass(o.status);
    const copy = { 'Menunggu Pembayaran': ['Menunggu pembayaran', 'Selesaikan pembayaran sebelum batas waktu.'], 'Diproses': ['Sedang diproses', 'Pembayaran diterima. Mohon tunggu sebentar.'], 'Berhasil': ['Pesanan berhasil', 'Produk sudah terkirim ke tujuan.'], 'Gagal': ['Pesanan gagal', 'Hubungi kami dengan nomor invoice ini.'], 'Dibatalkan': ['Pesanan dibatalkan', o.note || 'Pesanan ini tidak dilanjutkan.'] }[o.status];
    const icon = { ok: 'check', warn: 'clock', info: 'clock', bad: 'x', mute: 'x' }[sc];
    const ev = [['Pesanan dibuat', o.createdAt]]; if (o.paidAt) ev.push(['Pembayaran diterima', o.paidAt]); if (o.processingAt) ev.push(['Pesanan diproses', o.processingAt]);
    if (o.status === 'Berhasil') ev.push(['Pesanan berhasil', o.doneAt]); if (o.status === 'Gagal') ev.push(['Pesanan gagal', o.doneAt || Date.now()]); if (o.status === 'Dibatalkan') ev.push(['Pesanan dibatalkan', o.doneAt]);
    const pend = waiting ? ['Menunggu pembayaran', 'Pesanan diproses', 'Selesai'] : o.status === 'Diproses' ? ['Selesai'] : [];
    out.innerHTML = `
      <section class="banner banner--${sc}" aria-labelledby="r-h"><span class="banner__ico">${o.status === 'Diproses' ? '<span class="spin" aria-hidden="true"></span>' : ui(icon, 30)}</span>
        <div class="banner__t"><h1 id="r-h">${esc(copy[0])}</h1><p>${esc(copy[1])}</p></div>
        <div class="banner__inv"><small>Nomor invoice · simpan untuk cek status</small><div><code id="inv-no">${esc(o.id)}</code><button type="button" class="btn btn--ghost btn--sm" id="copy-inv">${ui('copy', 16)} Salin</button></div></div></section>
      ${waiting ? `<section class="payrow"><div><small>Bayar sebelum</small><b>${fmtDate(o.expiresAt)}</b></div><div><small>Sisa waktu</small><b id="cd">—</b></div><div class="payrow__act"><button type="button" class="btn btn--accent" id="pay-now">Bayar Sekarang</button><button type="button" class="btn btn--ghost" id="cancel-o">Batalkan Pesanan</button></div></section>` : ''}
      ${waiting ? payPanel(o) : ''}
      <div class="dgrid">
        <section class="card"><h2>Rincian pesanan</h2><dl class="sum"><div><dt>Layanan</dt><dd>${esc(o.serviceName)}</dd></div><div><dt>Produk</dt><dd>${esc(o.productName)}</dd></div>${(o.targets || []).map(t => `<div><dt>${esc(t.label)}</dt><dd>${esc(t.mask ? maskId(t.value) : t.value)}</dd></div>`).join('')}<div><dt>Harga</dt><dd>${rp(o.subtotal)}</dd></div><div><dt>Biaya admin</dt><dd>${rp(o.fee)}</dd></div><div><dt>Metode bayar</dt><dd>${esc(o.methodName)}</dd></div><div class="sum--tot"><dt>Total</dt><dd>${rp(o.total)}</dd></div></dl>${svc ? `<a class="btn btn--ink btn--block" style="margin-top:14px" href="${Catalog.href(svc, o.productId)}">Pesan Lagi</a>` : ''}</section>
        <section class="card"><h2>Linimasa</h2><ol class="tl">${ev.map(e => `<li class="is-done"><b>${esc(e[0])}</b><small>${fmtDate(e[1])}</small></li>`).join('')}${pend.map((p, i) => `<li${i === 0 ? ' class="is-now"' : ''}><b>${esc(p)}</b></li>`).join('')}</ol></section>
      </div>`;
    updateCd();
  }
  function updateCd() {
    const el = $('#cd', view); if (!el || !order) return;
    const ms = order.expiresAt - Date.now(); if (ms <= 0) { el.textContent = 'Habis'; return; }
    const h = Math.floor(ms / 3600000), m = Math.floor(ms % 3600000 / 60000), s = Math.floor(ms % 60000 / 1000);
    el.textContent = `${h}j ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}d`;
  }
  async function refresh() {
    try { const n = await Api.getOrder(id); if (!alive) return; if (!n) { if (!order) render(); return; } const changed = !order || order.status !== n.status; order = n; if (changed) render(); } catch (e) { /* coba lagi */ }
  }
  if (order) render();
  refresh();
  poll = setInterval(() => { if (!order || order.status === 'Menunggu Pembayaran' || order.status === 'Diproses') refresh(); }, 1200);
  tick = setInterval(updateCd, 1000);
  out.addEventListener('click', async e => {
    const cp = e.target.closest('[data-copy]'); if (cp) Toast.show(await copyText(cp.dataset.copy) ? 'Berhasil disalin' : 'Gagal menyalin', 'ok');
    if (e.target.closest('#copy-inv')) Toast.show(await copyText(order.id) ? 'Nomor invoice disalin' : 'Gagal menyalin', 'ok');
    if (e.target.closest('#pay-now')) {
      const b = $('#pay-now', view); b.disabled = true; b.textContent = 'Memproses…';
      try { const r = await Api.payOrder(order.id); if (r.redirectUrl) { location.href = r.redirectUrl; return; } if (!alive) return; order = r.order; render(); Toast.show('Pembayaran diterima'); }
      catch (x) { Toast.show(x.message, 'err'); if (alive) { b.disabled = false; b.textContent = 'Bayar Sekarang'; } }
    }
    if (e.target.closest('#cancel-o')) {
      if (!await Sheet.confirm({ title: 'Batalkan pesanan?', message: 'Pesanan ini akan dibatalkan dan tidak bisa dibayar lagi.', ok: 'Batalkan Pesanan', cancel: 'Kembali', danger: true })) return;
      try { const n = await Api.cancelOrder(order.id); if (!alive) return; order = n; render(); Toast.show('Pesanan dibatalkan'); } catch (x) { Toast.show(x.message, 'err'); }
    }
  });
  return () => { alive = false; clearInterval(poll); clearInterval(tick); };
}



/* script 13 */

/* pages/help.js — Bantuan: pencarian FAQ langsung, kontak, dan ketentuan dalam akordeon */
function PageHelp(view, sec) {
  const contact = [];
  if (SITE.email) contact.push(['Email', `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>`]);
  if (SITE.whatsapp) contact.push(['WhatsApp', esc(SITE.whatsapp)]);
  if (SITE.phone) contact.push(['Telepon', esc(SITE.phone)]);
  if (SITE.hours) contact.push(['Jam layanan', esc(SITE.hours)]);
  if (SITE.address) contact.push(['Alamat', esc(SITE.address)]);
  const legal = k => `<details id="${k}"${sec === k ? ' open' : ''}><summary>${esc(LEGAL[k].title)}<span class="faq__pm" aria-hidden="true"></span></summary><div class="legal">${LEGAL[k].items.map((it, i) => `<h3>${i + 1}. ${esc(it[0])}</h3><p>${esc(it[1])}</p>`).join('')}</div></details>`;
  view.innerHTML = `<div class="wrap pg pg--narrow">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Beranda</a>${ui('chevR', 14)}<span aria-current="page">Bantuan</span></nav>
    <header class="ph"><h1>Ada yang bisa dibantu?</h1></header>
    <div class="filters"><div class="search"><label class="sr" for="h-q">Cari pertanyaan</label>${ui('search', 18)}<input id="h-q" type="search" placeholder="Cari pertanyaan" autocomplete="off"></div></div>
    <section class="card hcard"><h2>Pertanyaan umum</h2><div class="faq" id="faq"></div></section>
    <section class="card hcard" id="kontak"><h2>Hubungi kami</h2><dl class="contact">${contact.map(c => `<div><dt>${c[0]}</dt><dd>${c[1]}</dd></div>`).join('')}</dl><p class="muted">Sertakan nomor invoice supaya pertanyaan lebih cepat ditangani.</p></section>
    <section class="card hcard"><h2>Ketentuan</h2><div class="faq">${legal('syarat')}${legal('privasi')}</div></section></div>`;
  const faq = $('#faq', view);
  const paint = q => {
    q = (q || '').toLowerCase();
    const l = FAQ.filter(f => !q || (f[0] + ' ' + f[1]).toLowerCase().includes(q));
    faq.innerHTML = l.length ? l.map(f => `<details><summary>${esc(f[0])}<span class="faq__pm" aria-hidden="true"></span></summary><p>${esc(f[1])}</p></details>`).join('') : `<p class="muted" style="padding:14px 0">Tidak ada pertanyaan yang cocok. Coba kata lain atau hubungi kami.</p>`;
  };
  paint('');
  $('#h-q', view).addEventListener('input', debounce(e => paint(e.target.value.trim()), 120));
  const target = sec ? $('#' + sec, view) : null;
  if (target) setTimeout(() => target.scrollIntoView({ block: 'center' }), 30);
}



/* script 14 */

/* router.js — router hash. Tiap halaman: fn(view, params, query) → (opsional) fungsi cleanup. */
const Router = {
  cleanup: null,
  routes: [
    { re: /^\/$/, nav: 'home', title: '', fn: v => PageHome(v) },
    { re: /^\/isi-ulang$/, nav: 'ppob', title: 'Isi Ulang & Tagihan', fn: v => PagePpob(v) },
    { re: /^\/isi-ulang\/([\w-]+)$/, nav: 'ppob', fn: (v, p, q) => PageService(v, 'ppob', p[0], q) },
    { re: /^\/topup$/, nav: 'game', title: 'Top Up Game', fn: v => PageGames(v) },
    { re: /^\/topup\/([\w-]+)$/, nav: 'game', fn: (v, p, q) => PageService(v, 'game', p[0], q) },
    { re: /^\/pesanan$/, nav: 'pesanan', title: 'Cek Transaksi', fn: (v, p, q) => PageOrders(v, q) },
    { re: /^\/pesanan\/([\w-]+)$/, nav: 'pesanan', title: 'Detail Transaksi', fn: (v, p) => PageOrder(v, p[0]) },
    { re: /^\/bantuan(?:\/(\w+))?$/, nav: 'help', title: 'Bantuan', fn: (v, p) => PageHelp(v, p[0]) }
  ],
  parse() {
    const raw = location.hash.replace(/^#/, '') || '/';
    const [path, qs] = raw.split('?');
    return { path: path.replace(/(.)\/$/, '$1') || '/', query: parseQuery(qs) };
  },
  go() {
    const { path, query } = this.parse();
    if (typeof this.cleanup === 'function') { try { this.cleanup(); } catch (e) { console.error(e); } }
    this.cleanup = null;
    const old = $('#view'), view = old.cloneNode(false);   // buang semua listener lama
    old.replaceWith(view);
    let route = null, params = [];
    for (const r of this.routes) { const m = path.match(r.re); if (m) { route = r; params = m.slice(1); break; } }
    document.body.classList.toggle('is-checkout', !!(route && /^\/(isi-ulang|topup)\//.test(path)));
    setTitle(route ? route.title : 'Halaman tidak ditemukan');
    this.markNav(route ? route.nav : '');
    view.classList.add('page-in');
    try { this.cleanup = route ? route.fn(view, params, query) : PageNotFound(view); }
    catch (e) { console.error(e); view.innerHTML = '<div class="wrap empty"><h1>Terjadi kendala</h1><p>Halaman gagal dimuat. Muat ulang atau kembali ke beranda.</p><a class="btn btn--accent" href="#/">Ke Beranda</a></div>'; }
    if (!(route && route.nav === 'help' && params[0])) window.scrollTo(0, 0);
  },
  markNav(key) {
    $$('[data-nav]').forEach(a => {
      const on = a.dataset.nav === key;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  },
  start() { window.addEventListener('hashchange', () => this.go()); this.go(); }
};

function PageNotFound(view) {
  setTitle('Halaman tidak ditemukan');
  view.innerHTML = `<div class="wrap empty"><div class="empty__ico">${ui('search', 32)}</div><h1>Halaman tidak ditemukan</h1><p>Alamat yang Anda buka tidak tersedia atau sudah dipindahkan.</p><div class="empty__act"><a class="btn btn--accent" href="#/">Ke Beranda</a><a class="btn btn--ghost" href="#/isi-ulang">Lihat Layanan</a></div></div>`;
}



/* script 15 */

/* app.js — kerangka: header dua lapis (strip info + bar utama), tanpa menu di mobile, footer berisi semua tautan. */
(function () {
  const LINKS = [['home', 'Beranda', '#/'], ['ppob', 'Isi Ulang & Tagihan', '#/isi-ulang'], ['game', 'Top Up Game', '#/topup'], ['pesanan', 'Cek Transaksi', '#/pesanan']];
  const top = () => `<div class="util"><div class="util__in"><span>Harga terlihat sebelum bayar · Tanpa akun</span><nav aria-label="Tautan cepat"><a href="#/bantuan" data-nav="help">Bantuan</a><a href="#/bantuan/syarat">Syarat</a><a href="#/bantuan/privasi">Privasi</a></nav></div></div>
    <div class="top__in">${logoFull()}
    <nav class="top__links" aria-label="Navigasi utama">${LINKS.map(l => `<a href="${l[2]}" data-nav="${l[0]}">${l[1]}</a>`).join('')}</nav>
    <div class="top__r"><button type="button" class="top__find" data-open-palette aria-label="Cari layanan atau game (Ctrl+K)">${ui('search', 18)}<span>Cari</span><kbd>Ctrl K</kbd></button>
      <a class="btn btn--accent btn--sm top__cta" href="#/isi-ulang">Mulai Pesan</a>
      <a class="btn btn--ghost btn--sm top__tx" href="#/pesanan">Cek Transaksi</a></div></div>`;
  function footer() {
    const c = [];
    if (SITE.email) c.push(`<li><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></li>`);
    if (SITE.whatsapp) c.push(`<li>WhatsApp ${esc(SITE.whatsapp)}</li>`);
    if (SITE.phone) c.push(`<li>Telepon ${esc(SITE.phone)}</li>`);
    if (SITE.hours) c.push(`<li>${esc(SITE.hours)}</li>`);
    if (SITE.address) c.push(`<li>${esc(SITE.address)}</li>`);
    return `<div class="wrap"><div class="ft">
      <div class="ft__a">${logoFull()}<p>Isi pulsa, bayar tagihan, voucher digital, dan top up game dengan harga yang terlihat sebelum bayar.</p></div>
      <div><h3>Layanan</h3><ul>${PPOB.slice(0, 5).map(s => `<li><a href="${Catalog.href(s)}">${esc(s.short || s.name)}</a></li>`).join('')}<li><a href="#/topup">Top Up Game</a></li></ul></div>
      <div><h3>Bantuan</h3><ul><li><a href="#/pesanan">Cek Transaksi</a></li><li><a href="#/bantuan">Pertanyaan Umum</a></li><li><a href="#/bantuan/syarat">Syarat &amp; Ketentuan</a></li><li><a href="#/bantuan/privasi">Kebijakan Privasi</a></li></ul></div>
      <div><h3>Kontak</h3><ul>${c.join('')}</ul></div></div>
      <div class="ft__pay"><span>Metode bayar</span>${PAY_METHODS.map(m => `<i>${esc(m.name)}</i>`).join('')}</div>
      <p class="ft__copy">© ${new Date().getFullYear()} ${esc(SITE.legalName || SITE.name)}</p></div>`;
  }
  function boot() {
    $('#top').innerHTML = top();
    $('#site-footer').innerHTML = footer();
    Palette.init();
    $('#skip').addEventListener('click', e => { e.preventDefault(); const v = $('#view'); v.focus(); v.scrollIntoView(); });
    Router.start();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();

