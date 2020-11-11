// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})


const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.register-signin');
const userElement = document.querySelector('.user');
const userNameElemen = document.querySelector('.user-name');


const toggleAuthDom=()=>{
  const user = setUsers.user;
  if(user){
    loginElem.style.display = 'none';
    userElement.style.display='';
    userNameElemen.textContent=user.displayName;
  }
  else{
    loginElem.style.display='';
    userElement.style.display='none'

  }


}

const listUsers = [{
    email: '1@mail.com',
    password: '12345',
    displayName: '11'
  },
  {
    email: '2@mail.com',
    password: '123456',
    displayName: '22'
  },
  {
    email: '3@mail.com',
    password: '12345',
    displayName: '33'
  }
]


const setUsers = {
  user: null,
  logIn(email, password, handler) {
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.autorizedUser(user)
      handler();
    } else {
      alert('noo');
    }

  },
  logOut() {

  },
  signUp(email, password, handler) {
    if (!this.getUser(email)) {
      const user= {email,
        password,
        displayName: email.split('@')[0]}
      listUsers.push( user);
      this.autorizedUser(user)
      handler();
    } else {
      alert('noo');
    }

  },
  getUser(email) {
    return listUsers.find(item =>
      item.email === email)
  },
  autorizedUser(user) {
    this.user = user;
  }

}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
  toggleAuthDom()
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();
  setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);

})

toggleAuthDom();