module.exports = {
    posts: [
        {
            id: "saushaushausa",
            title: "Teste do Mural",
            description: "Descrição teste"
        },
    ],
    getAll(){
        return this.posts
    },
    newPost(title, description){
        this.posts.push({ id: generateID(), title, description })
    },
    
}

function generateID() {
    return Math.random().toString(36).substr(2, 9)
}
