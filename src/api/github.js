class GitHub {
    constructor(httpClient) {
        this.github = httpClient;
    }
    async getUser(userName) {
        const response = await this.github.get(`${userName}`);
        return response;
    }
}

export default GitHub;
