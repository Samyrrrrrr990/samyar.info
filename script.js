// Store active page
let activePage = 'home';

const pages = {
  home: `
    <div class="page-container">
      <h1 class="page-title">Samyar's Digital Portfolio</h1>
      <div class="card">
        <h2 class="card-title">About Me</h2>
        <p>
          I'm a multifaceted student passionate about academic excellence and creative expression. 
          With a strong foundation in mathematics and a love for music, I continuously strive to 
          expand my skills and explore new horizons.
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">Quick Links</h2>
        <a href="https://linktr.ee/samyar1388?utm_source=linktree_admin_share" target="_blank">My Linktree Profile</a><br><br>
        <a href="mailto:samyar.shafiee2009@gmail.com">samyar.shafiee2009@gmail.com</a>
      </div>
    </div>
  `,
  academic: `
    <div class="page-container">
      <h1 class="page-title">Academic Achievements</h1>
      <div class="card">
        <h2 class="card-title">Honour Roll</h2>
        <p>
          Consistently maintained high academic performance in Grade 8 and Grade 9, 
          demonstrating dedication to academic excellence and intellectual growth.
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">Mathematics Achievement</h2>
        <p>
          Received the Mathematics Award in Grade 8, highlighting exceptional problem-solving 
          skills and mathematical understanding. Consistently demonstrated advanced analytical 
          and computational abilities.
        </p>
      </div>
    </div>
  `,
  music: `
    <div class="page-container">
      <h1 class="page-title">Musical Journey</h1>
      <div class="card">
        <h2 class="card-title">Trombone Experience</h2>
        <p>
          Dedicated trombone player with three years of continuous musical training. 
          Developed technical skills, musical interpretation, and ensemble collaboration 
          through consistent practice and performance.
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">Current Bands</h2>
        <p>
          Active member of two musical ensembles in Grade 10:
          <ul>
            <li>Concept Band: Exploring innovative musical arrangements and creative performances</li>
            <li>Marching Band: Developing precision, teamwork, and performance skills</li>
          </ul>
        </p>
      </div>
    </div>
  `
};

function setActivePage(page) {
  if (pages[page]) {
    activePage = page;
    document.getElementById('app').innerHTML = pages[page];
    updateNavButtonStyles();
  }
}

function updateNavButtonStyles() {
  document.getElementById('home-btn').style.backgroundColor = activePage === 'home' ? '#2563eb' : 'transparent';
  document.getElementById('academic-btn').style.backgroundColor = activePage === 'academic' ? '#2563eb' : 'transparent';
  document.getElementById
