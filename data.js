/* ===========================
   DATA MANAGEMENT - localStorage
   Sistem Pengurusan Kunci & Tempahan
=========================== */

const DB = {
  // ── Pengguna ──────────────────────────────────────────
  defaultUsers: [
    { id: 'U001', nama: 'Admin Jabatan', email: 'admin@jabatan.edu.my', password: 'admin123', peranan: 'admin', jawatan: 'Pentadbir Jabatan' },
    { id: 'U002', nama: 'Dr. Ahmad Fadzli', email: 'ahmad@jabatan.edu.my', password: 'pensyarah123', peranan: 'pensyarah', jawatan: 'Pensyarah Kanan' },
    { id: 'U003', nama: 'Dr. Siti Rahimah', email: 'siti@jabatan.edu.my', password: 'pensyarah123', peranan: 'pensyarah', jawatan: 'Pensyarah' },
    { id: 'U004', nama: 'En. Rizal Hakim', email: 'rizal@jabatan.edu.my', password: 'pensyarah123', peranan: 'pensyarah', jawatan: 'Pensyarah' },
    { id: 'U005', nama: 'Pn. Norliana', email: 'norliana@jabatan.edu.my', password: 'pensyarah123', peranan: 'pensyarah', jawatan: 'Pensyarah Kanan' },
  ],

  // ── Kunci ──────────────────────────────────────────────
  defaultKunci: [
    { id: 'K001', nama: 'Makmal Komputer 1', kod: 'MK-01', lokasi: 'Aras 2, Blok A', kategori: 'makmal', status: 'tersedia', catatan: '' },
    { id: 'K002', nama: 'Makmal Komputer 2', kod: 'MK-02', lokasi: 'Aras 2, Blok A', kategori: 'makmal', status: 'tersedia', catatan: '' },
    { id: 'K003', nama: 'Makmal Rangkaian', kod: 'MK-03', lokasi: 'Aras 3, Blok A', kategori: 'makmal', status: 'tersedia', catatan: '' },
    { id: 'K004', nama: 'Bilik Kuliah BK-01', kod: 'BK-01', lokasi: 'Aras 1, Blok B', kategori: 'kuliah', status: 'tersedia', catatan: '' },
    { id: 'K005', nama: 'Bilik Kuliah BK-02', kod: 'BK-02', lokasi: 'Aras 1, Blok B', kategori: 'kuliah', status: 'tersedia', catatan: '' },
    { id: 'K006', nama: 'Bilik Kuliah BK-03', kod: 'BK-03', lokasi: 'Aras 2, Blok B', kategori: 'kuliah', status: 'tersedia', catatan: '' },
    { id: 'K007', nama: 'Bilik Seminar', kod: 'BS-01', lokasi: 'Aras 3, Blok B', kategori: 'seminar', status: 'tersedia', catatan: '' },
    { id: 'K008', nama: 'Makmal Elektronik', kod: 'ME-01', lokasi: 'Aras 4, Blok A', kategori: 'makmal', status: 'tersedia', catatan: '' },
  ],

  // ── Peralatan ─────────────────────────────────────────
  defaultPeralatan: [
    { id: 'E001', nama: 'Laptop Dell 01', kod: 'LT-01', jenis: 'laptop', spesifikasi: 'Dell Inspiron, Core i5, 8GB RAM', status: 'tersedia', catatan: '' },
    { id: 'E002', nama: 'Laptop Dell 02', kod: 'LT-02', jenis: 'laptop', spesifikasi: 'Dell Inspiron, Core i5, 8GB RAM', status: 'tersedia', catatan: '' },
    { id: 'E003', nama: 'Laptop Lenovo 01', kod: 'LT-03', jenis: 'laptop', spesifikasi: 'Lenovo ThinkPad, Core i7, 16GB RAM', status: 'tersedia', catatan: '' },
    { id: 'E004', nama: 'Laptop Lenovo 02', kod: 'LT-04', jenis: 'laptop', spesifikasi: 'Lenovo ThinkPad, Core i7, 16GB RAM', status: 'tersedia', catatan: '' },
    { id: 'E005', nama: 'Laptop HP 01', kod: 'LT-05', jenis: 'laptop', spesifikasi: 'HP ProBook, Core i5, 8GB RAM', status: 'tersedia', catatan: '' },
    { id: 'E006', nama: 'LCD Projector 01', kod: 'LCD-01', jenis: 'lcd', spesifikasi: 'Epson EB-X49, 3600 Lumens, HDMI', status: 'tersedia', catatan: '' },
    { id: 'E007', nama: 'LCD Projector 02', kod: 'LCD-02', jenis: 'lcd', spesifikasi: 'Epson EB-X49, 3600 Lumens, HDMI', status: 'tersedia', catatan: '' },
    { id: 'E008', nama: 'LCD Projector 03', kod: 'LCD-03', jenis: 'lcd', spesifikasi: 'BenQ MX550, 3600 Lumens, VGA/HDMI', status: 'tersedia', catatan: '' },
    { id: 'E009', nama: 'LCD Projector 04', kod: 'LCD-04', jenis: 'lcd', spesifikasi: 'BenQ MX550, 3600 Lumens, VGA/HDMI', status: 'tersedia', catatan: '' },
  ],

  // ── Init ──────────────────────────────────────────────
  init() {
    if (!localStorage.getItem('spktr_users')) {
      localStorage.setItem('spktr_users', JSON.stringify(this.defaultUsers));
    }
    if (!localStorage.getItem('spktr_kunci')) {
      localStorage.setItem('spktr_kunci', JSON.stringify(this.defaultKunci));
    }
    if (!localStorage.getItem('spktr_peralatan')) {
      localStorage.setItem('spktr_peralatan', JSON.stringify(this.defaultPeralatan));
    }
    if (!localStorage.getItem('spktr_pinjaman')) {
      localStorage.setItem('spktr_pinjaman', JSON.stringify([]));
    }
    if (!localStorage.getItem('spktr_tempahan')) {
      localStorage.setItem('spktr_tempahan', JSON.stringify([]));
    }
    if (!localStorage.getItem('spktr_tempahan_peralatan')) {
      localStorage.setItem('spktr_tempahan_peralatan', JSON.stringify([]));
    }
    if (!localStorage.getItem('spktr_notifikasi')) {
      localStorage.setItem('spktr_notifikasi', JSON.stringify([]));
    }
  },

  // ── USERS ──────────────────────────────────────────────
  getUsers() { return JSON.parse(localStorage.getItem('spktr_users') || '[]'); },
  saveUsers(d) { localStorage.setItem('spktr_users', JSON.stringify(d)); },
  getUserById(id) { return this.getUsers().find(u => u.id === id); },
  login(email, password) { return this.getUsers().find(u => u.email === email && u.password === password) || null; },

  // ── KUNCI ──────────────────────────────────────────────
  getKunci() { return JSON.parse(localStorage.getItem('spktr_kunci') || '[]'); },
  saveKunci(d) { localStorage.setItem('spktr_kunci', JSON.stringify(d)); },
  getKunciById(id) { return this.getKunci().find(k => k.id === id); },
  updateKunciStatus(id, status) {
    const data = this.getKunci();
    const idx = data.findIndex(k => k.id === id);
    if (idx !== -1) { data[idx].status = status; this.saveKunci(data); }
  },
  addKunci(kunci) {
    const data = this.getKunci();
    kunci.id = 'K' + String(Date.now()).slice(-6);
    data.push(kunci);
    this.saveKunci(data);
    return kunci;
  },

  // ── PERALATAN ─────────────────────────────────────────
  getPeralatan() { return JSON.parse(localStorage.getItem('spktr_peralatan') || '[]'); },
  savePeralatan(d) { localStorage.setItem('spktr_peralatan', JSON.stringify(d)); },
  getPeralatanById(id) { return this.getPeralatan().find(e => e.id === id); },
  getPeralatanTersedia() { return this.getPeralatan().filter(e => e.status === 'tersedia'); },

  // ── TEMPAHAN PERALATAN ────────────────────────────────
  getTempahanPeralatan() { return JSON.parse(localStorage.getItem('spktr_tempahan_peralatan') || '[]'); },
  saveTempahanPeralatan(d) { localStorage.setItem('spktr_tempahan_peralatan', JSON.stringify(d)); },
  getTempahanPeralatanByUser(userId) { return this.getTempahanPeralatan().filter(t => t.userId === userId); },
  getTempahanPeralatanHariIni() {
    const today = new Date().toISOString().slice(0, 10);
    return this.getTempahanPeralatan().filter(t => t.tarikh === today && t.status !== 'ditolak' && t.status !== 'dibatal');
  },
  getTempahanPeralatanMenunggu() {
    return this.getTempahanPeralatan().filter(t => t.status === 'menunggu');
  },

  semakKonflikPeralatan(peralatanId, tarikh, masaMula, masaTamat, excludeId = null) {
    return this.getTempahanPeralatan().some(t =>
      t.peralatanId === peralatanId &&
      t.tarikh === tarikh &&
      t.status !== 'ditolak' &&
      t.status !== 'dibatal' &&
      t.id !== excludeId &&
      !(masaTamat <= t.masaMula || masaMula >= t.masaTamat)
    );
  },

  tambahTempahanPeralatan(userId, data) {
    const senarai = this.getTempahanPeralatan();
    const user = this.getUserById(userId);
    const peralatan = this.getPeralatanById(data.peralatanId);
    if (this.semakKonflikPeralatan(data.peralatanId, data.tarikh, data.masaMula, data.masaTamat)) {
      return { error: 'Konflik! Peralatan ini sudah ditempah pada masa tersebut. Sila pilih masa atau peralatan lain.' };
    }
    const rec = {
      id: 'EP' + String(Date.now()),
      userId,
      namaPensyarah: user ? user.nama : '-',
      namaPeralatan: peralatan ? peralatan.nama : '-',
      kodPeralatan: peralatan ? peralatan.kod : '-',
      jenisPeralatan: peralatan ? peralatan.jenis : '-',
      ...data,
      status: 'menunggu',
      ciptaPada: new Date().toISOString()
    };
    senarai.push(rec);
    this.saveTempahanPeralatan(senarai);
    this.tambahNotifikasi(`📦 Permintaan tempahan peralatan: ${peralatan ? peralatan.nama : ''} daripada ${user ? user.nama : ''}`, 'warning', 'admin');
    return rec;
  },

  luluskanTempahanPeralatan(id, status) {
    const senarai = this.getTempahanPeralatan();
    const idx = senarai.findIndex(t => t.id === id);
    if (idx !== -1) {
      senarai[idx].status = status;
      senarai[idx].diprosesPada = new Date().toISOString();
      this.saveTempahanPeralatan(senarai);
      const mesej = status === 'diluluskan'
        ? `✅ Tempahan peralatan ${senarai[idx].namaPeralatan} anda telah DILULUSKAN`
        : `❌ Tempahan peralatan ${senarai[idx].namaPeralatan} anda telah DITOLAK`;
      this.tambahNotifikasi(mesej, status === 'diluluskan' ? 'success' : 'danger', senarai[idx].userId);
    }
  },

  batalTempahanPeralatan(id) {
    const senarai = this.getTempahanPeralatan();
    const idx = senarai.findIndex(t => t.id === id);
    if (idx !== -1) { senarai[idx].status = 'dibatal'; this.saveTempahanPeralatan(senarai); }
  },

  // ── PINJAMAN ──────────────────────────────────────────
  getPinjaman() { return JSON.parse(localStorage.getItem('spktr_pinjaman') || '[]'); },
  savePinjaman(d) { localStorage.setItem('spktr_pinjaman', JSON.stringify(d)); },
  getPinjamanAktif() { return this.getPinjaman().filter(p => p.status === 'aktif'); },
  getPinjamanByUser(userId) { return this.getPinjaman().filter(p => p.userId === userId); },

  tambahPinjaman(userId, kunciId, tujuan) {
    const pinjaman = this.getPinjaman();
    const user = this.getUserById(userId);
    const kunci = this.getKunciById(kunciId);
    const rec = {
      id: 'P' + String(Date.now()),
      userId, kunciId,
      namaPensyarah: user ? user.nama : '-',
      namaKunci: kunci ? kunci.nama : '-',
      kodKunci: kunci ? kunci.kod : '-',
      tujuan,
      masaAmbil: new Date().toISOString(),
      masaPulang: null,
      status: 'aktif'
    };
    pinjaman.push(rec);
    this.savePinjaman(pinjaman);
    this.updateKunciStatus(kunciId, 'dipinjam');
    this.tambahNotifikasi(`🔑 ${user.nama} telah meminjam ${kunci.nama}`, 'info', userId);
    return rec;
  },

  pulangKunci(pinjamanId) {
    const pinjaman = this.getPinjaman();
    const idx = pinjaman.findIndex(p => p.id === pinjamanId);
    if (idx !== -1) {
      pinjaman[idx].masaPulang = new Date().toISOString();
      pinjaman[idx].status = 'selesai';
      this.savePinjaman(pinjaman);
      this.updateKunciStatus(pinjaman[idx].kunciId, 'tersedia');
      this.tambahNotifikasi(`✅ Kunci ${pinjaman[idx].namaKunci} telah dipulangkan oleh ${pinjaman[idx].namaPensyarah}`, 'success', 'admin');
      return pinjaman[idx];
    }
    return null;
  },

  // ── TEMPAHAN RUANG ────────────────────────────────────
  getTempahan() { return JSON.parse(localStorage.getItem('spktr_tempahan') || '[]'); },
  saveTempahan(d) { localStorage.setItem('spktr_tempahan', JSON.stringify(d)); },
  getTempahanByUser(userId) { return this.getTempahan().filter(t => t.userId === userId); },
  getTempahanHariIni() {
    const today = new Date().toISOString().slice(0, 10);
    return this.getTempahan().filter(t => t.tarikh === today && t.status !== 'ditolak');
  },

  semakKonflik(kunciId, tarikh, masaMula, masaTamat, excludeId = null) {
    return this.getTempahan().some(t =>
      t.kunciId === kunciId &&
      t.tarikh === tarikh &&
      t.status !== 'ditolak' &&
      t.id !== excludeId &&
      !(masaTamat <= t.masaMula || masaMula >= t.masaTamat)
    );
  },

  tambahTempahan(userId, data) {
    const tempahan = this.getTempahan();
    const user = this.getUserById(userId);
    const kunci = this.getKunciById(data.kunciId);
    if (this.semakKonflik(data.kunciId, data.tarikh, data.masaMula, data.masaTamat)) {
      return { error: 'Konflik tempahan! Ruang sudah ditempah pada masa tersebut.' };
    }
    const rec = {
      id: 'T' + String(Date.now()),
      userId,
      namaPensyarah: user ? user.nama : '-',
      namaRuang: kunci ? kunci.nama : '-',
      kodRuang: kunci ? kunci.kod : '-',
      ...data,
      status: 'menunggu',
      ciptaPada: new Date().toISOString()
    };
    tempahan.push(rec);
    this.saveTempahan(tempahan);
    this.tambahNotifikasi(`📅 Permintaan tempahan baru dari ${user.nama} untuk ${kunci.nama}`, 'warning', 'admin');
    return rec;
  },

  luluskanTempahan(tempahanId, status) {
    const tempahan = this.getTempahan();
    const idx = tempahan.findIndex(t => t.id === tempahanId);
    if (idx !== -1) {
      tempahan[idx].status = status;
      tempahan[idx].diprosesPada = new Date().toISOString();
      this.saveTempahan(tempahan);
      const mesej = status === 'diluluskan'
        ? `✅ Tempahan anda untuk ${tempahan[idx].namaRuang} telah DILULUSKAN`
        : `❌ Tempahan anda untuk ${tempahan[idx].namaRuang} telah DITOLAK`;
      this.tambahNotifikasi(mesej, status === 'diluluskan' ? 'success' : 'danger', tempahan[idx].userId);
    }
  },

  batalTempahan(tempahanId) {
    const tempahan = this.getTempahan();
    const idx = tempahan.findIndex(t => t.id === tempahanId);
    if (idx !== -1) {
      tempahan[idx].status = 'dibatal';
      this.saveTempahan(tempahan);
    }
  },

  // ── NOTIFIKASI ────────────────────────────────────────
  getNotifikasi() { return JSON.parse(localStorage.getItem('spktr_notifikasi') || '[]'); },
  saveNotifikasi(d) { localStorage.setItem('spktr_notifikasi', JSON.stringify(d)); },
  getNotifikasiUser(userId) {
    return this.getNotifikasi().filter(n => n.targetId === userId || n.targetId === 'admin');
  },
  getUnreadCount(userId) {
    return this.getNotifikasi().filter(n => !n.dibaca && (n.targetId === userId || n.targetId === 'admin')).length;
  },
  tambahNotifikasi(mesej, jenis, targetId) {
    const notif = this.getNotifikasi();
    notif.unshift({ id: 'N' + Date.now(), mesej, jenis, targetId, masa: new Date().toISOString(), dibaca: false });
    if (notif.length > 50) notif.pop();
    this.saveNotifikasi(notif);
  },
  tandaBacaNotifikasi(id) {
    const notif = this.getNotifikasi();
    const idx = notif.findIndex(n => n.id === id);
    if (idx !== -1) { notif[idx].dibaca = true; this.saveNotifikasi(notif); }
  },
  tandaBacaSemua(userId) {
    const notif = this.getNotifikasi().map(n => {
      if (n.targetId === userId || n.targetId === 'admin') n.dibaca = true;
      return n;
    });
    this.saveNotifikasi(notif);
  },

  // ── HELPERS ───────────────────────────────────────────
  formatTarikh(isoStr) {
    if (!isoStr) return '-';
    const d = new Date(isoStr);
    return d.toLocaleDateString('ms-MY', { day: '2-digit', month: 'short', year: 'numeric' });
  },
  formatMasa(isoStr) {
    if (!isoStr) return '-';
    const d = new Date(isoStr);
    return d.toLocaleTimeString('ms-MY', { hour: '2-digit', minute: '2-digit' });
  },
  formatTarikhMasa(isoStr) {
    if (!isoStr) return '-';
    return `${this.formatTarikh(isoStr)}, ${this.formatMasa(isoStr)}`;
  },
  durasi(mula, tamat) {
    if (!mula || !tamat) return '-';
    const diff = Math.round((new Date(tamat) - new Date(mula)) / 60000);
    const j = Math.floor(diff / 60), m = diff % 60;
    return j > 0 ? `${j}j ${m}m` : `${m}m`;
  },
  generateId(prefix) { return prefix + String(Date.now()).slice(-6); }
};

// Sesi pengguna
const Sesi = {
  set(user) { sessionStorage.setItem('spktr_sesi', JSON.stringify(user)); },
  get() { return JSON.parse(sessionStorage.getItem('spktr_sesi') || 'null'); },
  clear() { sessionStorage.removeItem('spktr_sesi'); },
  isAdmin() { const u = this.get(); return u && u.peranan === 'admin'; },
  isPensyarah() { const u = this.get(); return u && u.peranan === 'pensyarah'; },
  required(redirect = 'index.html') {
    if (!this.get()) { window.location.href = redirect; return false; }
    return true;
  }
};
