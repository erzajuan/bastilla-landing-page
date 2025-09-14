'use client'; // Diperlukan karena kita menggunakan event listener (useEffect)

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Mobile toggle 
    document.querySelectorAll('.mobile-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const nav = document.querySelector('.nav-links') as HTMLElement;
        if (!nav) return;
        // Ini adalah cara yang lebih aman untuk menangani style di TypeScript
        const isFlex = window.getComputedStyle(nav).display === 'flex';
        nav.style.display = isFlex ? 'none' : 'flex';
      });
    });

    // Slider controls
    document.querySelectorAll('.slider-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        const dir = btn.getAttribute('data-dir');
        if (!target || !dir) return;

        const el = document.getElementById(target);
        if (!el) return;

        const width = el.clientWidth || 420;
        const scrollAmount = Math.round(width * 0.8);

        if (dir === 'left') {
          el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      });
    });
    
    // // Make sure all tracks support keyboard accessibility
    // document.querySelectorAll('.track').forEach(track => {
    //   track.setAttribute('tabindex', '0');
    //   track.addEventListener('keydown', (e) => {
    //     const event = e as KeyboardEvent;
    //     const trackEl = event.currentTarget as HTMLElement;
    //     if (event.key === 'ArrowRight') {
    //       trackEl.scrollBy({ left: 420, behavior: 'smooth' });
    //     }
    //     if (event.key === 'ArrowLeft') {
    //       trackEl.scrollBy({ left: -420, behavior: 'smooth' });
    //     }
    //   });

      
    // });

  }, []); 


  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand">
            <div className="logo">B</div>
            <div className="title">
              <div className="name">Bastilla</div>
              <div className="tag">UMKM Templates</div>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#features">Fitur</a>
            <a href="#templates">Template</a>
            <a href="#pricing">Paket</a>
            <a href="#contact">Kontak</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="btn-ghost hide-mobile">Masuk</button>
            <a className="btn-primary" href="#pricing">Mulai Gratis</a>
            <button className="mobile-toggle only-mobile" aria-label="toggle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="kicker">Solusi UMKM • Export & Import</span>
              <h1 className="fade-in">Bawa produk UMKM Anda <br /><span style={{ background: 'linear-gradient(90deg,#06b6d4,#4f46e5)', WebkitBackgroundClip: 'text', color: 'transparent' }}>ke pasar global</span> — cepat dan mudah.</h1>
              <p className="lead" style={{ marginTop: '14px' }}>Pilih template yang sesuai: versi Free untuk start cepat, atau Premium untuk kebutuhan profesional dan scaling. Semua template responsif, SEO-friendly, dan mudah dikustom.</p>

              <div className="actions" style={{ marginTop: '20px' }}>
                <a className="btn-primary" href="#templates">Lihat Template</a>
                <a className="btn-ghost" href="#pricing">Cek Paket</a>
              </div>

              <div style={{ marginTop: '20px' }} className="muted">
                <span style={{ fontWeight: 700, color: 'var(--brand-1)' }}>Gratis</span> untuk UMKM terpilih • Dukungan via WhatsApp • Panduan dokumen ekspor
              </div>
            </div>

            <div className="hero-visual" style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{ position: 'relative', paddingTop: '58%', overflow: 'hidden', borderRadius: '12px' }}>
                <img src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop"
                  alt="logistics"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
            </div>

            <div className="badge-floating"
              style={{ position: 'absolute', right: '30px', bottom: '30px', background: 'white', padding: '14px 22px', display: 'flex', alignItems: 'center', borderRadius: '12px', boxShadow: '0 6px 20px rgba(0,0,0,0.15)' }}>
              <div>
                <div className="num" style={{ fontSize: '20px', fontWeight: 700, color: '#4f46e5' }}>30+</div>
                <div className="label" style={{ fontSize: '13px', color: '#555' }}>Negara Tersedia</div>
              </div>
              <div style={{ width: '1px', height: '36px', background: 'rgba(0,0,0,0.1)', margin: '0 14px' }}></div>
              <div>
                <div className="num" style={{ fontSize: '20px', fontWeight: 700, color: '#4f46e5' }}>100+</div>
                <div className="label" style={{ fontSize: '13px', color: '#555' }}>Template</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800 }}>Fitur Utama untuk UMKM</h3>
            <p className="muted" style={{ marginTop: '8px' }}>Semua dioptimasi untuk proses ekspor-impor: dokumen, logistik, marketplace, dan pembayaran global.</p>
          </div>

          <div className="grid">
            <div className="feature-card anim-pop">
              <div className="feature-icon">🚢</div>
              <div>
                <div className="feature-title">Integrasi Logistik</div>
                <div className="feature-desc">Jaringan kurir & forwarder yang siap kirim produk ke luar negeri dengan tarif kompetitif.</div>
              </div>
            </div>

            <div className="feature-card anim-pop">
              <div className="feature-icon">📄</div>
              <div>
                <div className="feature-title">Dokumen & Kepabeanan</div>
                <div className="feature-desc">Template dokumen ekspor/impor & panduan step-by-step untuk UMKM pemula.</div>
              </div>
            </div>

            <div className="feature-card anim-pop">
              <div className="feature-icon">💼</div>
              <div>
                <div className="feature-title">Listing Marketplace Global</div>
                <div className="feature-desc">Integrasi ke marketplace multi-negara dan optimasi listing produk.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates section */}
      <section id="templates" className="templates pad-large">
        <div className="container">
          {/* Free templates */}
          <div className="section-head">
            <div>
              <h2>Template UMKM Free</h2>
              <p className="muted">Pilihan ringan & cepat untuk memulai — cocok untuk test market.</p>
            </div>
            <div className="slider-controls hide-mobile">
              <button className="slider-btn" data-target="freeTrack" data-dir="left" aria-label="left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              <button className="slider-btn" data-target="freeTrack" data-dir="right" aria-label="right">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>

          <div id="freeTrack" className="track track-scroll">
            <article className="tpl">
              <div className="media landscape">
                <img src="https://images.unsplash.com/photo-1515165562835-c3b8c10a84b7?q=80&w=1600&auto=format&fit=crop" alt="gudang" />
              </div>
              <div className="body">
                <div>
                  <div className="title">Gudang Starter</div>
                  <div className="meta">Kategori: Logistik • Retail</div>
                </div>
                <div style={{ flex: 1 }}></div>
                <div className="foot">
                  <div className="meta">Ringan & SEO friendly</div>
                  <div><span className="badge free">FREE</span></div>
                </div>
              </div>
            </article>

            <article className="tpl">
              <div className="media landscape">
                <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop" alt="cargo" />
              </div>
              <div className="body">
                <div>
                  <div className="title">Cargo Mini</div>
                  <div className="meta">Kategori: Pengiriman • UMKM</div>
                </div>
                <div style={{ flex: 1 }}></div>
                <div className="foot">
                  <div className="meta">Tracking sederhana</div>
                  <div><span className="badge free">FREE</span></div>
                </div>
              </div>
            </article>

            <article className="tpl">
              <div className="media landscape">
                <img src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop" alt="toko" />
              </div>
              <div className="body">
                <div>
                  <div className="title">Toko Segar</div>
                  <div className="meta">Kategori: Grocery • Retail</div>
                </div>
                <div style={{ flex: 1 }}></div>
                <div className="foot">
                  <div className="meta">Integrasi marketplace</div>
                  <div><span className="badge free">FREE</span></div>
                </div>
              </div>
            </article>

            <article className="tpl">
              <div className="media landscape">
                <img src="https://images.unsplash.com/photo-1498550744925-0a5f1d4b6a3a?q=80&w=1600&auto=format&fit=crop" alt="vendor" />
              </div>
              <div className="body">
                <div>
                  <div className="title">VendorFlex</div>
                  <div className="meta">Kategori: Supplier • UMKM</div>
                </div>
                <div style={{ flex: 1 }}></div>
                <div className="foot">
                  <div className="meta">Sederhana & efektif</div>
                  <div><span className="badge free">FREE</span></div>
                </div>
              </div>
            </article>
          </div>

          {/* Premium templates */}
          <div style={{ marginTop: '34px' }} className="section-head">
            <div>
              <h2>Template UMKM Premium</h2>
              <p className="muted">Fitur lengkap, animasi, dan support prioritas — pilih untuk brand yang fokus scale-up.</p>
            </div>
            <div className="slider-controls hide-mobile">
              <button className="slider-btn" data-target="premiumTrack" data-dir="left" aria-label="left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              <button className="slider-btn" data-target="premiumTrack" data-dir="right" aria-label="right">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>

          <div id="premiumTrack" className="track track-scroll">
            <article className="tpl">
              <div className="media landscape">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" alt="premium1" />
              </div>
              <div className="body">
                <div>
                  <div className="title">Agency Pro</div>
                  <div className="meta">Kategori: Creative • Agency</div>
                </div>
                <div style={{ flex: 1 }}></div>
                <div className="foot">
                  <div className="meta">Full kit • Figma • Animations</div>
                  <div><span className="badge premium">PREMIUM</span></div>
                </div>
              </div>
            </article>
            <article className="tpl">
              <div className="media landscape">
                <img src="https://images.unsplash.com/photo-1556767576-cfba22f1c4f8?q=80&w=1600&auto=format&fit=crop" alt="premium2" />
              </div>
              <div className="body">
                <div>
                  <div className="title">SaaS Growth</div>
                  <div className="meta">Kategori: SaaS • Tech</div>
                </div>
                <div style={{ flex: 1 }}></div>
                <div className="foot">
                  <div className="meta">Integrations • Analytics</div>
                  <div><span className="badge premium">PREMIUM</span></div>
                </div>
              </div>
            </article>
            <article className="tpl">
              <div className="media landscape">
                <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop" alt="premium3" />
              </div>
              <div className="body">
                <div>
                  <div className="title">Hospitality Max</div>
                  <div className="meta">Kategori: Hospitality • Hotel</div>
                </div>
                <div style={{ flex: 1 }}></div>
                <div className="foot">
                  <div className="meta">Booking & CMS</div>
                  <div><span className="badge premium">PREMIUM</span></div>
                </div>
              </div>
            </article>
            <article className="tpl">
              <div className="media landscape">
                <img src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop" alt="premium4" />
              </div>
              <div className="body">
                <div>
                  <div className="title">HealthCare+</div>
                  <div className="meta">Kategori: Healthcare • Clinic</div>
                </div>
                <div style={{ flex: 1 }}></div>
                <div className="foot">
                  <div className="meta">Secure & compliant</div>
                  <div><span className="badge premium">PREMIUM</span></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '12px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800 }}>Paket Harga Bastilla</h2>
            <p className="muted">Pilih yang sesuai untuk bisnis Anda — mulai dari paket Starter hingga Scale / Custom.</p>
          </div>
          <div className="pricing-grid" style={{ marginTop: '18px' }}>
            <div className="price">
              <div className="head">Starter</div>
              <div className="value">Rp1,5jt</div>
              <div className="list">
                <div>• 2 konsep</div>
                <div>• 3x revisi</div>
                <div>• File vector</div>
              </div>
              <a className="cta" href="#contact" style={{ display: 'inline-block', marginTop: '12px', background: '#0f172a', color: 'white', borderRadius: '10px', padding: '10px 12px', textAlign: 'center' }}>Pilih Paket</a>
            </div>
            <div className="price featured">
              <div className="best-badge">Best Value</div>
              <div className="head">Growth</div>
              <div className="value">Rp4,5jt</div>
              <div className="list">
                <div>• 3 konsep</div>
                <div>• Revisi sampai final</div>
                <div>• Guideline 12+ halaman</div>
              </div>
              <a className="cta" href="#contact" style={{ display: 'inline-block', marginTop: '12px', background: 'linear-gradient(90deg,#5b82ff,#7c3aed)', color: 'white', borderRadius: '10px', padding: '10px 12px', textAlign: 'center' }}>Pilih Paket</a>
            </div>
            <div className="price">
              <div className="head">Scale</div>
              <div className="value">Custom</div>
              <div className="list">
                <div>• Retainer bulanan</div>
                <div>• Design system</div>
                <div>• Tim kolaboratif</div>
              </div>
              <a className="cta" href="#contact" style={{ display: 'inline-block', marginTop: '12px', background: '#0f172a', color: 'white', borderRadius: '10px', padding: '10px 12px', textAlign: 'center' }}>Diskusikan</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="pad-large">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800 }}>Apa kata klien kami</h2>
            <p className="muted">Beberapa testimoni nyata dari UMKM yang sudah go-export.</p>
          </div>
          <div className="testi-grid" style={{ marginTop: '18px' }}>
            <div className="testi-card">
              <div className="quote">“Template free memudahkan kami untuk mulai jualan internasional tanpa biaya besar.”</div>
              <div className="author" style={{ marginTop: '10px' }}>— Rina, UMKM Batik</div>
            </div>
            <div className="testi-card">
              <div className="quote">“Paket Growth worth it — guideline dan design system membantu brand kami konsisten.”</div>
              <div className="author" style={{ marginTop: '10px' }}>— Joko, UMKM Kopi</div>
            </div>
            <div className="testi-card">
              <div className="quote">“Pelayanan support sangat cepat, dan integrasi logistik memudahkan proses kirim.”</div>
              <div className="author" style={{ marginTop: '10px' }}>— Siti, UMKM Kriya</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800 }}>Mari Kolaborasi</h2>
            <p className="muted">Ceritakan kebutuhan Anda — kami kirimkan proposal dan estimasi biaya.</p>
          </div>
          <div className="contact-grid" style={{ marginTop: '18px' }}>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Form submitted (demo)'); }}>
              <div className="field">
                <label className="label">Nama</label>
                <input className="input" type="text" placeholder="Nama lengkap" required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="field">
                  <label className="label">Email</label>
                  <input className="input" type="email" placeholder="nama@email.com" required />
                </div>
                <div className="field">
                  <label className="label">WhatsApp</label>
                  <input className="input" type="tel" placeholder="+62 8xx-xxxx-xxxx" required />
                </div>
              </div>
              <div className="field">
                <label className="label">Jenis Proyek</label>
                <select className="select">
                  <option>Branding / Logo</option>
                  <option>Landing Page</option>
                  <option>E-commerce</option>
                  <option>Company Profile</option>
                </select>
              </div>
              <div className="field">
                <label className="label">Perkiraan Budget</label>
                <select className="select">
                  <option>&lt; Rp5jt</option>
                  <option>Rp5–15jt</option>
                  <option>Rp15–30jt</option>
                  <option>&gt; Rp30jt</option>
                </select>
              </div>
              <div className="field">
                <label className="label">Deskripsi Singkat</label>
                <textarea className="textarea" placeholder="Ceritakan tujuan, target market, deadline, dsb."></textarea>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '12px' }}>
                <button className="submit" type="submit">Kirim</button>
                <a className="link-underline" href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">Chat WhatsApp</a>
              </div>
            </form>
            <div>
              <div className="sidebar-card">
                <h4>Kenapa Bastilla?</h4>
                <ul style={{ marginTop: '8px' }} className="muted">
                  <li>• Proses kolaboratif & transparan</li>
                  <li>• Dokumentasi & file rapi (Figma/Adobe)</li>
                  <li>• Fokus pada hasil yang berdampak ke bisnis</li>
                </ul>
              </div>
              <div className="sidebar-card" style={{ marginTop: '14px' }}>
                <h4>Hubungi Kami</h4>
                <div className="contact-info" style={{ marginTop: '8px' }}>
                  <p className="muted">hello@bastilla.id</p>
                  <p className="muted">+62 812-3456-7890</p>
                </div>
                <div className="social-row">
                  <a className="social-btn" href="#" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2zm4.7-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" /></svg>
                  </a>
                  <a className="social-btn" href="#" aria-label="Behance">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 7h5v1.5h-5V7zm-6.79 1.2c.93 0 1.61.24 2.05.71.43.47.65 1.04.65 1.71 0 .61-.19 1.13-.57 1.56.49.2.87.51 1.14.92.27.41.4.9.4 1.47 0 .9-.32 1.61-.96 2.13-.64.52-1.51.78-2.62.78H2V8.2h5.21zM4 10.8h2.92c.5 0 .87-.1 1.11-.29.24-.2.36-.47.36-.83 0-.37-.12-.66-.36-.86-.24-.2-.61-.3-1.11-.3H4v2.28zm0 1.9v2.75h3.1c.52 0 .92-.12 1.19-.36.27-.24.41-.57.41-.98 0-.44-.14-.78-.41-1.02-.27-.24-.67-.36-1.19-.36H4zm14.7-4.5c1.16 0 2.07.35 2.72 1.05.65.7.98 1.7.98 3.01v.3h-6.08c.08.59.31 1.04.71 1.36.39.33.9.49 1.52.49.5 0 .95-.05 1.34-.16.4-.1.84-.28 1.31-.52l.62 1.38c-.42.31-.93.56-1.52.74-.6.19-1.24.28-1.94.28-1.24 0-2.23-.35-2.96-1.06-.73-.7-1.1-1.72-1.1-3.06 0-1.32.36-2.34 1.07-3.05.71-.71 1.66-1.07 2.84-1.07zm-.06 1.74c-.51 0-.9.15-1.19.44-.29.3-.47.73-.53 1.29h3.47c-.03-.57-.19-1-.48-1.29-.29-.3-.7-.44-1.27-.44z" /></svg>
                  </a>
                  <a className="social-btn" href="#" aria-label="Dribbble">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm6.9 6.32a8.3 8.3 0 0 1 1.52 4.1c-1.02-.2-2.8-.47-4.73-.25-.1-.25-.2-.5-.32-.76a38 38 0 0 0 3.53-3.09zM12 3.7a8.3 8.3 0 0 1 5.64 2.2c-1 .98-2.35 2.1-3.86 3.1A29 29 0 0 0 12 5.3c-.4-.7-.73-1.2-.99-1.6.32 0 .66 0 .99 0zM8.05 4.2c.3.4.74 1 .1 0a30 30 0 0 1 2.2 3.3C8.56 8.2 6.5 8.7 4.9 8.9a8.35 8.35 0 0 1 3.15-4.7zM3.7 12c0-.2 0-.4.02-.6 1.86-.03 4.5-.28 7.04-1  .27.5.51 1.03.73 1.58-3.1.9-5.52 2.74-6.9 5.1A8.28 8.28 0 0 1 3.7 12zm8.3 8.3c-2.1 0-3.99-.78-5.45-2.06 1.18-2.1 3.19-3.7 5.88-4.5.9 2.37 1.47 4.74 1.77 6.46-.71.07-1.42.1-2.2.1zm3.6-.65c-.26-1.44-.78-3.66-1.61-5.97 1.62-.18 3.44-.03 4.52.18a8.32 8.32 0 0 1-2.9 5.79z" /></svg>
                  </a>
                  <a className="social-btn" href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.67v10.66H3.91V8.67h3.03zM5.42 4.67a1.76 1.76 0 1 1 0 3.52 1.76 1.76 0 0 1 0-3.52zM20.09 13.36c0-2.76-1.47-4.05-3.43-4.05-1.58 0-2.28.87-2.67 1.48V8.67H11v10.66h3.03v-5.92c0-1.56.3-3.08 2.24-3.08 1.91 0 1.94 1.78 1.94 3.18v5.82h2.88v-6.97z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-grid">
          <div>
            <h5>Bastilla</h5>
            <p className="muted">Template UMKM for Export & Import — Free & Premium packages.</p>
          </div>
          <div>
            <h5>Produk</h5>
            <ul>
              <li><a href="#templates">Template Free</a></li>
              <li><a href="#templates">Template Premium</a></li>
              <li><a href="#pricing">Paket Harga</a></li>
            </ul>
          </div>
          <div>
            <h5>Bantuan</h5>
            <ul>
              <li><a href="#contact">Kontak</a></li>
              <li><a href="#">Panduan</a></li>
              <li><a href="#">Kebijakan</a></li>
            </ul>
          </div>
          <div>
            <h5>Newsletter</h5>
            <form onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! (demo)'); }}>
              <input type="email" placeholder="Email Anda" className="input" style={{ width: '100%', marginBottom: '8px' }} />
              <button className="submit" style={{ width: '100%' }}>Langganan</button>
            </form>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '18px', color: 'var(--muted)' }}>
          © 2025 Bastilla • All rights reserved.
        </div>
        <div style={{ height: '28px' }}></div>
      </footer>
    </>
  );
}

