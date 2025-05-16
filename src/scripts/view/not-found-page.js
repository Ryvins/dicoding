class NotFoundPage {
  async render() {
    return `
      <div class="not-found-page" style="text-align:center; padding: 48px 0;">
        <h2 style="font-size:2.5rem; color:#ff4444;">404</h2>
        <p style="font-size:1.25rem;">Halaman Tidak Ditemukan</p>
        <a href="#/" style="color:#4A90E2; text-decoration:underline;">Kembali ke Beranda</a>
      </div>
    `;
  }
  async afterRender() {}
}

export default NotFoundPage;
