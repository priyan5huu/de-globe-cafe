import React, { useEffect } from 'react';

export const Home: React.FC = () => {
  useEffect(() => {
    // Initialize AOS if available
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.refresh();
    }
  }, []);

  return (
    <div>
      <nav style={{ 
        background: '#3B2F2F', 
        padding: '1rem 2rem', 
        color: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderBottom: '2px solid #C49E78'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem', fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>De Globe Café</h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }} 
               onMouseOver={(e) => e.currentTarget.style.color = '#C49E78'}
               onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Home</a>
            <a href="/menu" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }} 
               onMouseOver={(e) => e.currentTarget.style.color = '#C49E78'}
               onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Menu</a>
            <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }} 
               onMouseOver={(e) => e.currentTarget.style.color = '#C49E78'}
               onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Contact</a>
          </div>
        </div>
      </nav>

      <section style={{ 
        background: '#3B2F2F',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
        marginTop: '80px',
        position: 'relative'
      }}>
        {/* Animated Coffee Cup */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            animation: 'float 6s ease-in-out infinite',
            filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.3))'
          }}
        >
          <img 
            src="/coffee-cup.svg"
            alt="Animated Coffee Cup"
            className="w-64 md:w-96"
            style={{
              display: 'block',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>
        
        <div style={{ 
          maxWidth: '800px', 
          position: 'relative', 
          zIndex: 10 
        }} data-aos="fade-up">
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
            marginBottom: '1rem',
            fontWeight: 'bold',
            lineHeight: '1.2',
            fontFamily: 'Playfair Display, serif'
          }}>
            Handmade Coffee with <br />
            <span style={{ 
              background: 'linear-gradient(45deg, #C49E78, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Amazing Vibes
            </span>
          </h1>
          
          <p style={{ 
            fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', 
            marginBottom: '2rem',
            opacity: 0.9,
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }} data-aos="fade-up" data-aos-delay="200">
            Handmade coffee, brewed with passion, creates an unmatched experience. Rich aromas, smooth flavors, and cozy vibes make every sip special, turning simple moments into unforgettable memories. Perfect coffee, perfect ambiance, pure bliss!
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }} data-aos="fade-up" data-aos-delay="400">
            <a 
              href="/menu" 
              className="button-hover"
              style={{ 
                background: '#C49E78',
                color: '#3B2F2F',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
            >
              Explore Our Menu →
            </a>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section style={{ 
        background: '#F5F0E6',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 6vw, 3rem)', 
            marginBottom: '3rem',
            color: '#3B2F2F',
            fontWeight: 'bold',
            fontFamily: 'Playfair Display, serif'
          }} data-aos="fade-up">
            Featured Menu Items
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {/* Veg Soup */}
            <div style={{ 
              background: 'white',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }} 
            className="gallery-img"
            data-aos="fade-up" 
            data-aos-delay="200">
              <img 
                src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Veg Soup"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#3B2F2F', marginBottom: '0.5rem', fontFamily: 'Playfair Display, serif' }}>Veg Soup</h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>A Light Yet Flavorful Vegetable Soup, Perfect For A Cozy Meal.</p>
              </div>
            </div>

            {/* Aloo Burger */}
            <div style={{ 
              background: 'white',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }} 
            className="gallery-img"
            data-aos="fade-up" 
            data-aos-delay="400">
              <img 
                src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Aloo Burger"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#3B2F2F', marginBottom: '0.5rem', fontFamily: 'Playfair Display, serif' }}>Aloo Burger</h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>Crispy potato patty with fresh vegetables and tangy sauces.</p>
              </div>
            </div>

            {/* Chicken Samosa */}
            <div style={{ 
              background: 'white',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }} 
            className="gallery-img"
            data-aos="fade-up" 
            data-aos-delay="600">
              <img 
                src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Chicken Samosa"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#3B2F2F', marginBottom: '0.5rem', fontFamily: 'Playfair Display, serif' }}>Chicken Samosa</h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>Flaky Pastry Stuffed With Spiced Minced Chicken, Deep-Fried To Perfection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={{ 
        background: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up">
          <h2 style={{ 
            fontSize: 'clamp(2rem, 6vw, 3rem)', 
            marginBottom: '1rem',
            color: '#3B2F2F',
            fontWeight: 'bold',
            fontFamily: 'Playfair Display, serif'
          }}>
            More Than Just a Café – It's an Experience!
          </h2>
          
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '2rem',
            color: '#666',
            lineHeight: '1.6'
          }} data-aos="fade-up" data-aos-delay="200">
            At De Globe Café, Every Sip, Every Bite, And Every Moment Is Crafted With Love.❤️ From Authentic Flavors To A Cozy Ambiance, Here's Why Our Customers Keep Coming Back!
          </p>
          
          <a 
            href="/contact" 
            className="button-hover"
            style={{ 
              background: '#C49E78',
              color: '#3B2F2F',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            Visit us today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: '#3B2F2F',
        color: 'white',
        padding: '3rem 2rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div data-aos="fade-up">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>De Globe Café</h3>
              <p style={{ color: '#C49E78', fontSize: '1.1rem' }}>Established in 2019 | Loved by Lucknowies</p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="/" style={{ color: '#C49E78', textDecoration: 'none' }}>Home</a>
                <a href="/menu" style={{ color: '#C49E78', textDecoration: 'none' }}>Menu</a>
                <a href="/contact" style={{ color: '#C49E78', textDecoration: 'none' }}>Contact Us</a>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="400">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Our Branches</h4>
              <p style={{ color: '#C49E78', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Hazratganj Branch 1<br />
                Address: Maqbara Rd, Opposite LIC Office, Bank of Baroda, Hazratganj.<br /><br />
                Hazratganj Branch 2<br />
                Address: Chitrhar Building, Behind Prince Market, Nawal Kishor Road, Hazratganj.
              </p>
            </div>
          </div>
          
          <div style={{ 
            borderTop: '1px solid #C49E78',
            paddingTop: '1rem',
            fontSize: '0.9rem',
            color: '#C49E78'
          }} data-aos="fade-up" data-aos-delay="600">
            <p>Mon-Sun: 9:00 AM – 11:00 PM</p>
            <p>© 2025 All Rights Reserved to De Globe Café | "Crafted with love, brewed to perfection!" — 🤍</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;