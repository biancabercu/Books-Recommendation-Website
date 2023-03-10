class AuthenticatedUserDto {
    constructor (token, username, role) {
        this.token = token;
        this.username = username;
        this.role = role;
    }

    get Token() {
        return this.token;
    }

    get Role() {
        return this.role;
    }
}

module.exports = AuthenticatedUserDto;