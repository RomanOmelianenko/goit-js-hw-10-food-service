const switchThemeRef = document.getElementById('theme-switch-toggle');
const keepThemeOnPageReload = localStorage.getItem('theme');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switchThemeRef.addEventListener('change', onSwitchTheme);

function onSwitchTheme() {
  if (switchThemeRef.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.removeItem('theme', Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

if (keepThemeOnPageReload === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  switchThemeRef.checked = true;
}
