function App() {
  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(15, 23, 42, 0.95)',
        padding: '1rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000
      }}>
        <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
          RK
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Raghavendra Kothuri
          </h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Full Stack Developer
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Building amazing web experiences with modern technologies
          </p>
          <button style={{
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            background: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            View My Work
          </button>
        </div>
      </section>

      <section id="about" style={{
        padding: '4rem 5%',
        background: '#f8f9fa'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
          About Me
        </h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
          I'm a passionate Full Stack Developer with expertise in building 
          modern web applications. I love creating elegant solutions to complex problems.
        </p>
      </section>

      <section id="projects" style={{
        padding: '4rem 5%',
        background: 'white'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
          Projects
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            padding: '2rem',
            background: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Project 1</h3>
            <p>Description of your amazing project goes here.</p>
          </div>
          <div style={{
            padding: '2rem',
            background: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Project 2</h3>
            <p>Description of your amazing project goes here.</p>
          </div>
          <div style={{
            padding: '2rem',
            background: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Project 3</h3>
            <p>Description of your amazing project goes here.</p>
          </div>
        </div>
      </section>

      <section id="contact" style={{
        padding: '4rem 5%',
        background: '#667eea',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          Get In Touch
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Let's work together on your next project!
        </p>
        <button style={{
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          background: 'white',
          color: '#667eea',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Contact Me
        </button>
      </section>
    </>
  );
}

export default App;