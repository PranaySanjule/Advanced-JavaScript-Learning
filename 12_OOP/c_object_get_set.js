const User = {
    _email: 'chai@cuc.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase();
    },
    
    set email(value){
        this._email = value    
    },
    get _password(){
        return this._password.toUpperCase();
    },
    set _password(value){
        this._password = value    
    }
}

console.log(User.email);

//factory method
const tea = Object.create(User)
console.log(tea.email);
