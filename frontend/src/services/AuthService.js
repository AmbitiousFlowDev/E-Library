const { default: axios } = require("axios");

class AuthService
{
    constructor()
    {
        this.http = axios.create({baseURL : "/api/v1/auth"});
    }
    async authenticate(credintials)
    {
        return await this.http.post("/login", credintials);
    }
}

export default new AuthService()